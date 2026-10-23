import { t } from '../i18n';
import type { Algo } from '../registry';
import { Ctx, type Frame } from '../engine/ctx';
import { SORTS } from '../engine/sorting';
import { SEARCHES } from '../engine/searching';
import { genSearch, genSort, type SearchDist, type SortInput } from '../engine/data';
import { h } from './dom';
import { drawFrame } from './stagefx';

const delayFor = (speed: number) => 1100 / Math.pow(speed, 1.5);

function option(value: string, label: string, selected: boolean) {
  return h('option', { value, selected }, label);
}

export function visualizer(algo: Algo): HTMLElement {
  const isSort = algo.vis === 'sort';
  let n = isSort ? 20 : 16;
  let input: SortInput = 'random';
  let dist: SearchDist = 'uniform';
  let seed = 1;
  let target = 0;
  let speed = 5;
  let frames: Frame[] = [];
  let idx = 0;
  let timer: number | undefined;
  let data: number[] = [];

  const stage = h('div', { class: isSort ? 'stage bars' : 'stage cells' });
  const msg = h('div', { class: 'vis-msg', 'aria-live': 'polite' });
  const cmpStat = h('b');
  const wrStat = h('b');
  const frameLbl = h('span', { class: 'muted' });
  const scrub = h('input', { type: 'range', min: 0, max: 0, value: 0, 'aria-label': t('vis.frame', { i: 0, n: 0 }) });
  const playBtn = h('button', { class: 'btn primary', type: 'button' });

  const stop = () => {
    if (timer !== undefined) clearInterval(timer);
    timer = undefined;
    playBtn.textContent = t('vis.play');
  };

  const build = () => {
    stop();
    if (isSort) {
      data = genSort(input, n, seed);
      const c = new Ctx(data, true);
      SORTS[algo.id](c);
      frames = c.frames;
    } else {
      data = genSearch(dist, n, seed);
      const c = new Ctx(data, true, target);
      SEARCHES[algo.id](c);
      frames = c.frames;
    }
    idx = 0;
    scrub.max = String(frames.length - 1);
    draw();
  };

  const pickTarget = () => {
    const arr = genSearch(dist, n, seed);
    target = arr[Math.floor(arr.length * 0.7)];
    targetInput.value = String(target);
  };

  const draw = () => {
    const f = frames[idx];
    drawFrame(stage, f, isSort ? 'bars' : 'cells', n <= 25);
    const m = f.msg;
    msg.textContent = t(`msg.${m.k}`, m.p);
    cmpStat.textContent = String(f.comparisons);
    wrStat.textContent = String(f.writes);
    frameLbl.textContent = t('vis.frame', { i: idx + 1, n: frames.length });
    scrub.value = String(idx);
    scrub.setAttribute('aria-label', frameLbl.textContent);
  };

  const go = (to: number) => {
    idx = Math.max(0, Math.min(frames.length - 1, to));
    draw();
  };

  const toggle = () => {
    if (timer !== undefined) return stop();
    if (idx >= frames.length - 1) idx = 0;
    playBtn.textContent = t('vis.pause');
    const tick = () => {
      if (idx >= frames.length - 1) return stop();
      go(idx + 1);
    };
    const start = () => {
      clearInterval(timer);
      timer = window.setInterval(tick, delayFor(speed));
    };
    start();
    speedInput.onchange = start;
  };

  playBtn.textContent = t('vis.play');
  playBtn.addEventListener('click', toggle);

  const btn = (label: string, fn: () => void) => {
    const b = h('button', { class: 'btn', type: 'button' }, label);
    b.addEventListener('click', fn);
    return b;
  };

  const speedInput = h('input', { type: 'range', min: 1, max: 10, value: speed, 'aria-label': t('vis.speed') });
  speedInput.addEventListener('input', () => (speed = Number(speedInput.value)));

  const sizeInput = h('input', { type: 'range', min: isSort ? 5 : 8, max: isSort ? 60 : 40, value: n, 'aria-label': t('vis.size') });
  sizeInput.addEventListener('change', () => {
    n = Number(sizeInput.value);
    if (!isSort) pickTarget();
    build();
  });

  scrub.addEventListener('input', () => {
    stop();
    go(Number(scrub.value));
  });

  const selects: HTMLElement[] = [];
  const targetInput = h('input', { type: 'number', class: 'target', 'aria-label': t('vis.target') });
  if (isSort) {
    const sel = h(
      'select',
      { 'aria-label': t('vis.input') },
      (['random', 'nearly', 'reversed', 'few'] as SortInput[]).map((k) => option(k, t(`input.${k}`), k === input)),
    );
    sel.addEventListener('change', () => {
      input = sel.value as SortInput;
      build();
    });
    selects.push(h('label', null, t('vis.input'), sel));
  } else {
    const sel = h(
      'select',
      { 'aria-label': t('vis.input') },
      (['uniform', 'skewed'] as SearchDist[]).map((k) => option(k, t(`dist.${k}`), k === dist)),
    );
    sel.addEventListener('change', () => {
      dist = sel.value as SearchDist;
      pickTarget();
      build();
    });
    targetInput.addEventListener('change', () => {
      target = Number(targetInput.value);
      build();
    });
    selects.push(h('label', null, t('vis.input'), sel), h('label', null, t('vis.target'), targetInput));
    pickTarget();
  }

  const legend = h(
    'div',
    { class: 'legend small' },
    [
      ['cmp', 'compare'],
      ...(isSort ? [['swap', 'swap'], ['write', 'write'], ['pivot', 'pivot'], ['done', 'done']] : [['found', 'found']]),
    ].map(([cls, key]) => h('span', { class: 'legend-item' }, h('i', { class: `sw ${cls}` }), t(`vis.legend.${key}`))),
  );

  const root = h(
    'div',
    { class: 'visualizer' },
    h('div', { class: 'vis-controls' }, selects, h('label', null, t('vis.size'), sizeInput), h('label', null, t('vis.speed'), speedInput), btn(t('vis.newData'), () => {
      seed++;
      if (!isSort) pickTarget();
      build();
    })),
    stage,
    legend,
    msg,
    h(
      'div',
      { class: 'vis-transport' },
      btn('⏮', () => (stop(), go(0))),
      btn('◀ ' + t('vis.back'), () => (stop(), go(idx - 1))),
      playBtn,
      btn(t('vis.step') + ' ▶', () => (stop(), go(idx + 1))),
      btn('⏭', () => (stop(), go(frames.length - 1))),
      scrub,
    ),
    h('div', { class: 'vis-stats' }, h('span', null, t('vis.comparisons') + ': ', cmpStat), isSort ? h('span', null, t('vis.writes') + ': ', wrStat) : null, frameLbl),
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
