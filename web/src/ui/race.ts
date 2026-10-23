import { Ctx, type Frame } from '../engine/ctx';
import { SEARCHES } from '../engine/searching';
import { SORTS } from '../engine/sorting';
import { genSearch, genSort, type SearchDist, type SortInput } from '../engine/data';
import { L, t } from '../i18n';
import { gvars, type Algo } from '../registry';
import { colorFor, inkOn } from './charts';
import { h } from './dom';
import { drawFrame } from './stagefx';

// Speed factors applied on top of a pace that lets the slowest racer finish in about ten seconds.
const SPEED = [0.4, 0.6, 0.8, 1, 1.4, 2, 3, 4, 6, 10];
const TICK_MS = 70;
const TARGET_TICKS = Math.round(10000 / TICK_MS);

interface Racer {
  algo: Algo;
  idx: number;
  frames: Frame[];
  stage: HTMLElement;
  steps: HTMLElement;
  badge: HTMLElement;
  tile: HTMLElement;
  place: number;
}

/** Runs every method of a group on the same input at the same speed: each frame is one comparison, swap or write. */
export function race(algos: Algo[]): HTMLElement {
  const isSort = algos[0].vis === 'sort';
  let n = isSort ? 32 : 48;
  let input: SortInput = 'random';
  let dist: SearchDist = 'uniform';
  let seed = 1;
  let speed = 4;
  let timer: number | undefined;
  let finished = 0;
  let racers: Racer[] = [];

  const grid = h('div', { class: 'race-grid' });
  const verdict = h('p', { class: 'race-verdict', 'aria-live': 'polite' });
  const go = h('button', { class: 'btn primary', type: 'button' }, t('race.go'));

  const stop = () => {
    if (timer !== undefined) clearInterval(timer);
    timer = undefined;
  };

  const build = () => {
    stop();
    finished = 0;
    verdict.textContent = '';
    go.textContent = t('race.go');
    const data = isSort ? genSort(input, n, seed) : genSearch(dist, n, seed);
    const target = isSort ? 0 : data[Math.floor(data.length * 0.7)];
    racers = algos.map((algo, i) => {
      const c = new Ctx(data, true, target);
      if (isSort) SORTS[algo.id](c);
      else SEARCHES[algo.id](c);
      const stage = h('div', { class: 'stage bars mini' });
      const steps = h('b', { class: 'race-steps' }, '0');
      const badge = h('span', { class: 'race-badge' }, t('race.waiting'));
      const tile = h(
        'article',
        { class: 'race-tile', style: `--r:${colorFor(i)};--ri:${inkOn(colorFor(i))}` },
        h('header', null, h('a', { href: `#/algo/${algo.id}` }, L(algo.name)), badge),
        stage,
        h('footer', null, steps, h('span', null, t('race.stepsLabel'))),
      );
      const r: Racer = { algo, idx: 0, frames: c.frames, stage, steps, badge, tile, place: 0 };
      drawFrame(stage, c.frames[0], 'bars');
      return r;
    });
    grid.replaceChildren(...racers.map((r) => r.tile));
  };

  const tick = () => {
    const longest = Math.max(...racers.map((r) => r.frames.length));
    const k = Math.max(1, Math.round((longest / TARGET_TICKS) * SPEED[speed - 1]));
    for (const r of racers) {
      if (r.place) continue;
      r.idx = Math.min(r.frames.length - 1, r.idx + k);
      const f = r.frames[r.idx];
      drawFrame(r.stage, f, 'bars');
      r.steps.textContent = String(r.idx);
      if (r.idx >= r.frames.length - 1) {
        r.place = ++finished;
        r.badge.textContent = t('race.place', { n: r.place });
        r.tile.classList.add(r.place === 1 ? 'winner' : 'finished');
      }
    }
    if (finished === racers.length) {
      stop();
      go.textContent = t('race.again');
      const sorted = [...racers].sort((a, b) => a.place - b.place);
      const first = sorted[0], last = sorted[sorted.length - 1];
      verdict.textContent = t('race.winner', {
        name: L(first.algo.name),
        n: first.frames.length - 1,
        last: L(last.algo.name),
        m: last.frames.length - 1,
      });
    }
  };

  const start = () => {
    if (timer !== undefined) return;
    if (finished === racers.length) build();
    go.textContent = t('race.running');
    timer = window.setInterval(tick, TICK_MS);
  };
  go.addEventListener('click', start);

  const reset = h('button', { class: 'btn', type: 'button' }, t('vis.newData'));
  reset.addEventListener('click', () => {
    seed++;
    build();
  });

  const sel = isSort
    ? h(
        'select',
        { 'aria-label': t('vis.input') },
        (['random', 'nearly', 'reversed', 'few'] as SortInput[]).map((k) => h('option', { value: k }, t(`input.${k}`))),
      )
    : h(
        'select',
        { 'aria-label': t('vis.input') },
        (['uniform', 'skewed'] as SearchDist[]).map((k) => h('option', { value: k }, t(`dist.${k}`))),
      );
  sel.addEventListener('change', () => {
    if (isSort) input = sel.value as SortInput;
    else dist = sel.value as SearchDist;
    build();
  });

  const sp = h('input', { type: 'range', min: 1, max: 10, value: speed, 'aria-label': t('vis.speed') });
  sp.addEventListener('input', () => (speed = Number(sp.value)));
  const sz = h('input', { type: 'range', min: isSort ? 10 : 16, max: isSort ? 60 : 96, value: n, 'aria-label': t('vis.size') });
  sz.addEventListener('change', () => {
    n = Number(sz.value);
    build();
  });

  const root = h(
    'div',
    { class: 'race', style: gvars(algos[0].group) },
    h(
      'div',
      { class: 'vis-controls' },
      go,
      h('label', null, t('vis.input'), sel),
      h('label', null, t('vis.size'), sz),
      h('label', null, t('vis.speed'), sp),
      reset,
    ),
    grid,
    verdict,
  );
  build();

  const obs = new MutationObserver(() => {
    if (!root.isConnected) {
      stop();
      obs.disconnect();
    }
  });
  queueMicrotask(() => obs.observe(document.body, { childList: true, subtree: true }));
  return root;
}
