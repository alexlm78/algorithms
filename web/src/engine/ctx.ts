// Instrumented array context. Each algorithm is written once against this API.
// In record mode every operation snapshots a Frame (for the visualizer);
// in count mode it only bumps counters (for benchmarks).

export type Msg = { k: string; p?: Record<string, string | number> };

export interface Frame {
  a: number[];
  cmp: number[];
  swp: number[];
  wr: number[];
  done: number[];
  pivot: number;
  lo: number;
  hi: number;
  found: number;
  comparisons: number;
  writes: number;
  msg: Msg;
}

export class Ctx {
  a: number[];
  readonly n: number;
  comparisons = 0;
  writes = 0;
  frames: Frame[] = [];
  private done = new Set<number>();
  private pv = -1;
  private lo = -1;
  private hi = -1;
  private fnd = -1;
  target = 0;

  constructor(arr: number[], private rec: boolean, target = 0, copy = true) {
    this.a = copy ? arr.slice() : arr;
    this.n = arr.length;
    this.target = target;
    this.emit([], [], [], { k: 'start' });
  }

  private emit(cmp: number[], swp: number[], wr: number[], msg: Msg) {
    if (!this.rec) return;
    this.frames.push({
      a: this.a.slice(),
      cmp,
      swp,
      wr,
      done: [...this.done],
      pivot: this.pv,
      lo: this.lo,
      hi: this.hi,
      found: this.fnd,
      comparisons: this.comparisons,
      writes: this.writes,
      msg,
    });
  }

  /** a[i] > a[j] */
  gt(i: number, j: number): boolean {
    this.comparisons++;
    this.emit([i, j], [], [], { k: 'cmp', p: { i, j, x: this.a[i], y: this.a[j] } });
    return this.a[i] > this.a[j];
  }

  /** a[i] > v, v held outside the array (insertion key) */
  gtVal(i: number, v: number): boolean {
    this.comparisons++;
    this.emit([i], [], [], { k: 'cmpKey', p: { i, x: this.a[i], y: v } });
    return this.a[i] > v;
  }

  /** compare two detached values (merge step) */
  gtV(x: number, y: number): boolean {
    this.comparisons++;
    this.emit([], [], [], { k: 'cmpVal', p: { x, y } });
    return x > y;
  }

  swap(i: number, j: number) {
    if (i === j) return;
    const t = this.a[i];
    this.a[i] = this.a[j];
    this.a[j] = t;
    this.writes += 2;
    this.emit([], [i, j], [], { k: 'swap', p: { i, j } });
  }

  write(i: number, v: number) {
    this.a[i] = v;
    this.writes++;
    this.emit([], [], [i], { k: 'write', p: { i, v } });
  }

  range(lo: number, hi: number) {
    this.lo = lo;
    this.hi = hi;
    this.emit([], [], [], { k: 'range', p: { lo, hi } });
  }

  pivotAt(i: number) {
    this.pv = i;
    if (i >= 0) this.emit([], [], [], { k: 'pivot', p: { i, v: this.a[i] } });
  }

  mark(i: number) {
    this.done.add(i);
  }

  finish() {
    for (let i = 0; i < this.n; i++) this.done.add(i);
    this.pv = -1;
    this.lo = -1;
    this.hi = -1;
    this.emit([], [], [], { k: 'sorted' });
  }

  /** Search probe: returns a[i] - target (sign tells direction) */
  probe(i: number): number {
    this.comparisons++;
    this.emit([i], [], [], { k: 'probe', p: { i, x: this.a[i], t: this.target } });
    return this.a[i] - this.target;
  }

  found(i: number): number {
    this.fnd = i;
    this.emit([], [], [], i >= 0 ? { k: 'found', p: { i } } : { k: 'notFound', p: { t: this.target } });
    return i;
  }
}
