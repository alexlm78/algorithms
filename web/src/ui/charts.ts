import { h, svg } from './dom';

export const PALETTE = ['#2347f0', '#ff7a1a', '#1db954', '#ff4f8b', '#e0b400', '#0fb5ae', '#ff2d55', '#7d8a2a'];

export const colorFor = (i: number) => PALETTE[i % PALETTE.length];

/** Black or white, whichever has the higher contrast on this fill. */
export function inkOn(hex: string): string {
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255).map((v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
  const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return 1.05 / (lum + 0.05) > (lum + 0.05) / 0.05 ? '#ffffff' : '#14171f';
}

export interface BarItem {
  label: string;
  value: number | null; // null = skipped
  color: string;
  note?: string;
}

const fmt = (v: number) => {
  if (v >= 1e9) return (v / 1e9).toFixed(1) + 'B';
  if (v >= 1e6) return (v / 1e6).toFixed(1) + 'M';
  if (v >= 1e4) return (v / 1e3).toFixed(0) + 'k';
  if (v >= 100) return v.toFixed(0);
  if (v >= 1) return v.toFixed(1);
  if (v === 0) return '0';
  return v.toPrecision(2);
};

/** Horizontal bar chart (HTML), accessible and wraps well on small screens. */
export function barChart(title: string, items: BarItem[]): HTMLElement {
  const max = Math.max(1e-9, ...items.map((i) => i.value ?? 0));
  return h(
    'div',
    { class: 'chart' },
    h('h4', null, title),
    items.map((it) =>
      h(
        'div',
        { class: 'bar-row' },
        h('span', { class: 'bar-label' }, it.label),
        h(
          'span',
          { class: 'bar-track' },
          it.value == null
            ? h('span', { class: 'bar-skip' }, it.note ?? '')
            : h('span', { class: 'bar-fill', style: `width:${Math.max(0.5, (it.value / max) * 100)}%;background:${it.color}` }),
        ),
        h('span', { class: 'bar-value' }, it.value == null ? '–' : fmt(it.value)),
      ),
    ),
  );
}

export interface Series {
  name: string;
  color: string;
  points: [number, number][];
}

/** Log-log line chart (SVG). */
export function lineChart(title: string, series: Series[], xLabel: string, yLabel: string): HTMLElement {
  const W = 640, H = 320, m = { l: 56, r: 16, t: 12, b: 38 };
  const pts = series.flatMap((s) => s.points).filter(([x, y]) => x > 0 && y > 0);
  const root = svg('svg', { viewBox: `0 0 ${W} ${H}`, class: 'line-chart', role: 'img', 'aria-label': title });
  if (!pts.length) return h('div', { class: 'chart' }, h('h4', null, title));

  const lx = pts.map(([x]) => Math.log10(x));
  const ly = pts.map(([, y]) => Math.log10(y));
  const x0 = Math.floor(Math.min(...lx)), x1 = Math.max(x0 + 1, Math.ceil(Math.max(...lx)));
  const y0 = Math.floor(Math.min(...ly)), y1 = Math.max(y0 + 1, Math.ceil(Math.max(...ly)));
  const X = (v: number) => m.l + ((Math.log10(v) - x0) / (x1 - x0)) * (W - m.l - m.r);
  const Y = (v: number) => H - m.b - ((Math.log10(v) - y0) / (y1 - y0)) * (H - m.t - m.b);

  for (let e = y0; e <= y1; e++) {
    const y = Y(10 ** e);
    root.appendChild(svg('line', { x1: m.l, x2: W - m.r, y1: y, y2: y, class: 'grid' }));
    root.appendChild(svg('text', { x: m.l - 6, y: y + 4, 'text-anchor': 'end', class: 'tick' }, fmt(10 ** e)));
  }
  for (let e = x0; e <= x1; e++) {
    const x = X(10 ** e);
    root.appendChild(svg('line', { x1: x, x2: x, y1: m.t, y2: H - m.b, class: 'grid' }));
    root.appendChild(svg('text', { x, y: H - m.b + 16, 'text-anchor': 'middle', class: 'tick' }, fmt(10 ** e)));
  }
  root.appendChild(svg('text', { x: (W + m.l) / 2, y: H - 4, 'text-anchor': 'middle', class: 'axis' }, xLabel));
  root.appendChild(
    svg('text', { x: 12, y: H / 2, 'text-anchor': 'middle', class: 'axis', transform: `rotate(-90 12 ${H / 2})` }, yLabel),
  );

  for (const s of series) {
    const p = s.points.filter(([x, y]) => x > 0 && y > 0);
    if (!p.length) continue;
    root.appendChild(
      svg('polyline', {
        points: p.map(([x, y]) => `${X(x)},${Y(y)}`).join(' '),
        fill: 'none',
        stroke: s.color,
        'stroke-width': 2.2,
        'stroke-linejoin': 'round',
      }),
    );
    for (const [x, y] of p) root.appendChild(svg('circle', { cx: X(x), cy: Y(y), r: 3, fill: s.color }));
  }

  const legend = h(
    'div',
    { class: 'legend' },
    series.map((s) => h('span', { class: 'legend-item' }, h('i', { style: `background:${s.color}` }), s.name)),
  );
  return h('div', { class: 'chart' }, h('h4', null, title), root, legend);
}
