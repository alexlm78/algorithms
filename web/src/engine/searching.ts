import type { Ctx } from './ctx';

export type SearchFn = (c: Ctx) => number;

function linear(c: Ctx) {
  for (let i = 0; i < c.n; i++) if (c.probe(i) === 0) return c.found(i);
  return c.found(-1);
}

function binaryRange(c: Ctx, lo: number, hi: number): number {
  c.range(lo, hi);
  while (lo <= hi) {
    const mid = lo + ((hi - lo) >> 1);
    const r = c.probe(mid);
    if (r === 0) return c.found(mid);
    if (r < 0) lo = mid + 1;
    else hi = mid - 1;
    c.range(lo, hi);
  }
  return c.found(-1);
}

function binary(c: Ctx) {
  return binaryRange(c, 0, c.n - 1);
}

function jump(c: Ctx) {
  const n = c.n;
  const size = Math.max(1, Math.floor(Math.sqrt(n)));
  let prev = 0;
  let step = size;
  while (c.probe(Math.min(step, n) - 1) < 0) {
    prev = step;
    step += size;
    if (prev >= n) return c.found(-1);
  }
  c.range(prev, Math.min(step, n) - 1);
  for (let i = prev; i < Math.min(step, n); i++) if (c.probe(i) === 0) return c.found(i);
  return c.found(-1);
}

function interpolation(c: Ctx) {
  let lo = 0, hi = c.n - 1;
  const t = c.target;
  c.range(lo, hi);
  while (lo <= hi && t >= c.a[lo] && t <= c.a[hi]) {
    let pos = lo;
    if (c.a[hi] !== c.a[lo]) pos = lo + Math.floor(((t - c.a[lo]) * (hi - lo)) / (c.a[hi] - c.a[lo]));
    const r = c.probe(pos);
    if (r === 0) return c.found(pos);
    if (r < 0) lo = pos + 1;
    else hi = pos - 1;
    c.range(lo, hi);
  }
  return c.found(-1);
}

function exponential(c: Ctx) {
  const n = c.n;
  if (n === 0) return c.found(-1);
  if (c.probe(0) === 0) return c.found(0);
  let i = 1;
  while (i < n && c.probe(i) < 0) i *= 2;
  return binaryRange(c, i >> 1, Math.min(i, n - 1));
}

function ternary(c: Ctx) {
  let lo = 0, hi = c.n - 1;
  c.range(lo, hi);
  while (lo <= hi) {
    const third = Math.floor((hi - lo) / 3);
    const m1 = lo + third, m2 = hi - third;
    const r1 = c.probe(m1);
    if (r1 === 0) return c.found(m1);
    const r2 = c.probe(m2);
    if (r2 === 0) return c.found(m2);
    if (r1 > 0) hi = m1 - 1;
    else if (r2 < 0) lo = m2 + 1;
    else {
      lo = m1 + 1;
      hi = m2 - 1;
    }
    c.range(lo, hi);
  }
  return c.found(-1);
}

export const SEARCHES: Record<string, SearchFn> = {
  linear_search: linear,
  binary_search: binary,
  jump_search: jump,
  interpolation_search: interpolation,
  exponential_search: exponential,
  ternary_search: ternary,
};
