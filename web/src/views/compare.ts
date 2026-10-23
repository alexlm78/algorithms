import { L, t } from '../i18n';
import { algosIn, groupById, gvars, type Algo } from '../registry';
import { benchSearch, benchSort, type BenchResult } from '../engine/data';
import { SORTS } from '../engine/sorting';
import { SEARCHES } from '../engine/searching';
import { barChart, colorFor, lineChart } from '../ui/charts';
import { h, maskedTitle } from '../ui/dom';
import { race } from '../ui/race';

interface BenchConfig {
  scenarios: string[];
  scenarioLabel: (s: string) => string;
  sizes: number[];
  growth: number[];
  run: (id: string, scenario: string, n: number) => BenchResult;
  bars: { key: keyof BenchResult; label: string }[];
  growthMetric: (r: BenchResult) => number;
  growthLabel: string;
  takeaway: string;
}

// Built per call so labels follow the active language.
const configs = (): Record<string, BenchConfig> => ({
  sorting: {
    scenarios: ['random', 'nearly', 'reversed', 'few'],
    scenarioLabel: (s) => t(`input.${s}`),
    sizes: [100, 500, 1000, 2000, 5000],
    growth: [100, 200, 400, 800, 1600, 3200],
    run: (id, s, n) => benchSort(id, s as never, n),
    bars: [
      { key: 'comparisons', label: t('cmp.metric.comparisons') },
      { key: 'writes', label: t('cmp.metric.writes') },
      { key: 'ms', label: t('cmp.metric.ms') },
    ],
    growthMetric: (r) => r.comparisons + r.writes,
    growthLabel: t('cmp.ops'),
    takeaway: t('take.sorting'),
  },
  searching: {
    scenarios: ['uniform', 'skewed'],
    scenarioLabel: (s) => t(`dist.${s}`),
    sizes: [1000, 10000, 100000, 1000000],
    growth: [100, 1000, 10000, 100000, 1000000],
    run: (id, s, n) => benchSearch(id, s as never, n, 100),
    bars: [
      { key: 'comparisons', label: `${t('cmp.metric.comparisons')} (${t('cmp.avgPerLookup')})` },
      { key: 'ms', label: `${t('cmp.metric.ms')} (${t('cmp.avgPerLookup')})` },
    ],
    growthMetric: (r) => r.comparisons,
    growthLabel: `${t('cmp.metric.comparisons')} (${t('cmp.avgPerLookup')})`,
    takeaway: t('take.searching'),
  },
});

const hasImpl = (a: Algo) => (a.vis === 'sort' ? !!SORTS[a.id] : a.vis === 'search' ? !!SEARCHES[a.id] : false);

function table(algos: Algo[]) {
  return h(
    'div',
    { class: 'table-wrap' },
    h(
      'table',
      { class: 'cmp-table' },
      h(
        'thead',
        null,
        h(
          'tr',
          null,
          [t('cmp.algorithm'), t('algo.approach'), t('algo.best'), t('algo.avg'), t('algo.worst'), t('algo.space'), t('algo.when')].map((x) =>
            h('th', null, x),
          ),
        ),
      ),
      h(
        'tbody',
        null,
        algos.map((a, i) =>
          h(
            'tr',
            null,
            h('td', null, h('a', { href: `#/algo/${a.id}` }, h('i', { class: 'dot', style: `background:${colorFor(i)}` }), L(a.name))),
            h('td', null, t(`approach.${a.approach}`)),
            h('td', { class: 'mono' }, a.best),
            h('td', { class: 'mono' }, a.avg),
            h('td', { class: 'mono' }, a.worst),
            h('td', { class: 'mono' }, a.space),
            h('td', { class: 'when' }, L(a.when)),
          ),
        ),
      ),
    ),
  );
}

function bench(groupId: string, algos: Algo[], cfg: BenchConfig): HTMLElement {
  const runnable = algos.filter(hasImpl);
  let scenario = cfg.scenarios[0];
  let size = cfg.sizes[Math.min(2, cfg.sizes.length - 1)];

  const out = h('div', { class: 'bench-out' });
  const status = h('p', { class: 'muted' });

  const run = async () => {
    status.textContent = t('cmp.running');
    out.replaceChildren();
    await new Promise((r) => setTimeout(r, 30));

    const results = runnable.map((a) => ({ a, r: cfg.run(a.id, scenario, size) }));
    const bars = h(
      'div',
      { class: 'chart-grid' },
      cfg.bars.map((b) =>
        barChart(
          b.label,
          results.map(({ a, r }) => ({ label: L(a.name), value: r[b.key] as number, color: colorFor(algos.indexOf(a)) })),
        ),
      ),
    );
    out.replaceChildren(h('h4', null, t('cmp.at', { n: size.toLocaleString() })), bars);

    status.textContent = t('cmp.running');
    await new Promise((r) => setTimeout(r, 30));
    const series = runnable.map((a) => ({
      name: L(a.name),
      color: colorFor(algos.indexOf(a)),
      points: cfg.growth.map((n) => [n, Math.max(cfg.growthMetric(cfg.run(a.id, scenario, n)), 0)] as [number, number]),
    }));
    out.appendChild(lineChart(t('cmp.growth'), series, 'n', cfg.growthLabel));
    status.textContent = '';
  };

  const scSel = h(
    'select',
    null,
    cfg.scenarios.map((s) => h('option', { value: s, selected: s === scenario }, cfg.scenarioLabel(s))),
  );
  scSel.addEventListener('change', () => (scenario = scSel.value));
  const szSel = h(
    'select',
    null,
    cfg.sizes.map((s) => h('option', { value: s, selected: s === size }, s.toLocaleString())),
  );
  szSel.addEventListener('change', () => (size = Number(szSel.value)));
  const go = h('button', { class: 'btn primary', type: 'button' }, t('cmp.run'));
  go.addEventListener('click', () => void run());

  void groupId;
  queueMicrotask(() => void run());
  return h(
    'section',
    { class: 'block' },
    h('h2', null, t('cmp.bench')),
    h('p', { class: 'muted' }, t('cmp.benchNote')),
    h('div', { class: 'vis-controls' }, h('label', null, t('cmp.scenario'), scSel), h('label', null, t('cmp.size'), szSel), go),
    status,
    out,
  );
}

export function compareView(groupId: string): HTMLElement {
  const g = groupById(groupId);
  if (!g) return h('p', null, t('notfound'));
  const algos = algosIn(groupId);
  const cfg = configs()[groupId];
  const racing = algos.filter(hasImpl);
  return h(
    'div',
    { class: 'compare-page', style: gvars(groupId) },
    h(
      'header',
      { class: 'field head' },
      h('a', { class: 'back', href: `#/group/${g.id}` }, '← ' + L(g.name)),
      maskedTitle('h1', t('cmp.title', { g: L(g.name) })),
      h('div', { class: 'head-split' }, h('p', { class: 'lead' }, L(g.blurb)), cfg ? h('p', { class: 'notice' }, h('b', null, t('cmp.takeaway')), cfg.takeaway) : null),
    ),
    racing.length > 1
      ? h('section', { class: 'block' }, h('h2', null, t('race.title')), h('p', { class: 'muted' }, t('race.lead')), race(racing))
      : null,
    h('section', { class: 'block' }, h('h2', null, t('cmp.table')), table(algos)),
    cfg ? bench(groupId, algos, cfg) : h('p', { class: 'block' }, t('cmp.noBench')),
  );
}
