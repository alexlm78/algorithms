import type { Frame } from '../engine/ctx';
import { h } from './dom';

/** Paint one frame into a stage. Shared by the visualizer, the race and the home masthead. */
export function drawFrame(stage: HTMLElement, f: Frame, mode: 'bars' | 'cells', labels = false) {
  const max = Math.max(...f.a, 1);
  const cmp = new Set(f.cmp), swp = new Set(f.swp), wr = new Set(f.wr), done = new Set(f.done);
  const ranged = f.lo >= 0 && f.hi >= 0;
  const n = f.a.length;
  stage.replaceChildren(
    ...f.a.map((v, i) => {
      const cls = ['cell'];
      if (f.found === i) cls.push('found');
      else if (swp.has(i)) cls.push('swap');
      else if (wr.has(i)) cls.push('write');
      else if (cmp.has(i)) cls.push('cmp');
      else if (f.pivot === i) cls.push('pivot');
      else if (done.has(i)) cls.push('done');
      if (ranged && (i < f.lo || i > f.hi)) cls.push('dim');
      if (mode === 'bars') {
        return h(
          'div',
          { class: cls.join(' '), style: `height:${Math.max(4, (v / max) * 100)}%` },
          labels && n <= 25 ? h('span', null, v) : null,
        );
      }
      return h('div', { class: cls.join(' ') }, h('b', null, v), h('small', null, i));
    }),
  );
}

export const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
