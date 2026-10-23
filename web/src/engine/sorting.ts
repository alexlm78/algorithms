import type { Ctx } from './ctx';

export type SortFn = (c: Ctx) => void;

function bubble(c: Ctx) {
  const n = c.n;
  for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (c.gt(j, j + 1)) {
        c.swap(j, j + 1);
        swapped = true;
      }
    }
    c.mark(n - i - 1);
    if (!swapped) break;
  }
  c.finish();
}

function selection(c: Ctx) {
  const n = c.n;
  for (let i = 0; i < n - 1; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) if (c.gt(min, j)) min = j;
    c.swap(i, min);
    c.mark(i);
  }
  c.finish();
}

function insertion(c: Ctx) {
  for (let i = 1; i < c.n; i++) {
    const key = c.a[i];
    let j = i - 1;
    while (j >= 0 && c.gtVal(j, key)) {
      c.write(j + 1, c.a[j]);
      j--;
    }
    c.write(j + 1, key);
  }
  c.finish();
}

function merge(c: Ctx, lo: number, mid: number, hi: number) {
  c.range(lo, hi);
  const L = c.a.slice(lo, mid + 1);
  const R = c.a.slice(mid + 1, hi + 1);
  let i = 0, j = 0, k = lo;
  while (i < L.length && j < R.length) {
    if (c.gtV(L[i], R[j])) c.write(k++, R[j++]);
    else c.write(k++, L[i++]);
  }
  while (i < L.length) c.write(k++, L[i++]);
  while (j < R.length) c.write(k++, R[j++]);
}

function msort(c: Ctx, lo: number, hi: number) {
  if (lo >= hi) return;
  const mid = (lo + hi) >> 1;
  msort(c, lo, mid);
  msort(c, mid + 1, hi);
  merge(c, lo, mid, hi);
}

function mergeSort(c: Ctx) {
  msort(c, 0, c.n - 1);
  c.finish();
}

function qsort(c: Ctx, lo: number, hi: number) {
  if (lo > hi) return;
  if (lo === hi) {
    c.mark(lo);
    return;
  }
  c.range(lo, hi);
  c.pivotAt(hi); // Lomuto partition, last element as pivot
  let i = lo;
  for (let j = lo; j < hi; j++) {
    if (c.gt(hi, j)) c.swap(i++, j);
  }
  c.swap(i, hi);
  c.pivotAt(i);
  c.mark(i);
  c.pivotAt(-1);
  qsort(c, lo, i - 1);
  qsort(c, i + 1, hi);
}

function quick(c: Ctx) {
  qsort(c, 0, c.n - 1);
  c.finish();
}

function sift(c: Ctx, n: number, i: number) {
  for (;;) {
    const l = 2 * i + 1, r = l + 1;
    let m = i;
    if (l < n && c.gt(l, m)) m = l;
    if (r < n && c.gt(r, m)) m = r;
    if (m === i) return;
    c.swap(i, m);
    i = m;
  }
}

function heap(c: Ctx) {
  const n = c.n;
  c.range(0, n - 1);
  for (let i = (n >> 1) - 1; i >= 0; i--) sift(c, n, i);
  for (let end = n - 1; end > 0; end--) {
    c.swap(0, end);
    c.mark(end);
    c.range(0, end - 1);
    sift(c, end, 0);
  }
  c.finish();
}

function counting(c: Ctx) {
  if (c.n === 0) return;
  let max = 0;
  for (const v of c.a) if (v > max) max = v;
  const counts = new Array<number>(max + 1).fill(0);
  for (const v of c.a) counts[v]++;
  let k = 0;
  for (let v = 0; v <= max; v++) {
    while (counts[v]-- > 0) c.write(k++, v);
  }
  c.finish();
}

export const SORTS: Record<string, SortFn> = {
  bubble_sort: bubble,
  selection_sort: selection,
  insertion_sort: insertion,
  merge_sort: mergeSort,
  quick_sort: quick,
  heap_sort: heap,
  counting_sort: counting,
};
