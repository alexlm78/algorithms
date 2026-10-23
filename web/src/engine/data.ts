import { Ctx } from './ctx';
import { SORTS } from './sorting';
import { SEARCHES } from './searching';

export function rng(seed: number) {
  let s = seed >>> 0;
  return () => {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export type SortInput = 'random' | 'nearly' | 'reversed' | 'few';
export type SearchDist = 'uniform' | 'skewed';

export function genSort(kind: SortInput, n: number, seed = 1): number[] {
  const r = rng(seed);
  const max = Math.max(n, 10);
  const rand = () => 1 + Math.floor(r() * max);
  switch (kind) {
    case 'random':
      return Array.from({ length: n }, rand);
    case 'reversed':
      return Array.from({ length: n }, (_, i) => n - i);
    case 'nearly': {
      const a = Array.from({ length: n }, (_, i) => i + 1);
      for (let k = 0; k < Math.max(1, Math.floor(n / 20)); k++) {
        const i = Math.floor(r() * n), j = Math.floor(r() * n);
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    }
    case 'few':
      return Array.from({ length: n }, () => 1 + Math.floor(r() * 4));
  }
}

/** Strictly increasing integers. uniform: evenly spread. skewed: dense at the start, sparse at the end. */
export function genSearch(dist: SearchDist, n: number, seed = 1): number[] {
  const r = rng(seed);
  const a: number[] = new Array(n);
  let prev = 0;
  for (let i = 0; i < n; i++) {
    const base = dist === 'uniform' ? i * 10 : Math.floor(Math.pow(i / n, 4) * n * 1000);
    prev = Math.max(prev + 1, base + Math.floor(r() * 5));
    a[i] = prev;
  }
  return a;
}

export interface BenchResult {
  comparisons: number;
  writes: number;
  ms: number;
}

export function benchSort(id: string, kind: SortInput, n: number): BenchResult {
  const input = genSort(kind, n);
  const fn = SORTS[id];
  let best = Infinity;
  let c!: Ctx;
  for (let rep = 0; rep < 3; rep++) {
    c = new Ctx(input, false);
    const t0 = performance.now();
    fn(c);
    best = Math.min(best, performance.now() - t0);
  }
  return { comparisons: c.comparisons, writes: c.writes, ms: best };
}

/** Average comparisons per lookup over many present keys. */
export function benchSearch(id: string, dist: SearchDist, n: number, queries = 300): BenchResult {
  const arr = genSearch(dist, n);
  const fn = SEARCHES[id];
  const r = rng(7);
  const targets = Array.from({ length: queries }, () => arr[Math.floor(r() * n)]);
  let total = 0;
  const t0 = performance.now();
  for (const t of targets) {
    const c = new Ctx(arr, false, t, false);
    fn(c);
    total += c.comparisons;
  }
  const ms = (performance.now() - t0) / queries;
  return { comparisons: total / queries, writes: 0, ms };
}
