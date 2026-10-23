import { Ctx, type Frame } from '../engine/ctx';
import { SORTS } from '../engine/sorting';
import { genSort } from '../engine/data';
import { L, t } from '../i18n';
import { ALGOS, GROUPS, GROUP_COLORS, algoById, algosIn, groupById, gvars } from '../registry';
import { GROUP_PICTURE, MASTHEAD_PICTURE } from '../pictures';
import { getLang } from '../i18n';
import { h, maskedTitle } from '../ui/dom';
import { drawFrame, reducedMotion } from '../ui/stagefx';

/** The masthead's big tile sorts a small array in a loop. */
function liveSort(): HTMLElement {
  const stage = h('div', { class: 'stage bars live' });
  const algo = algoById('merge_sort')!;
  let frames: Frame[] = [];
  let seed = 3;
  let i = 0;
  let timer: number | undefined;

  const load = () => {
    const c = new Ctx(genSort('random', 16, seed++), true);
    SORTS[algo.id](c);
    frames = c.frames;
    i = 0;
  };
  load();
  drawFrame(stage, frames[reducedMotion() ? frames.length - 1 : 0], 'bars');

  if (!reducedMotion()) {
    timer = window.setInterval(() => {
      if (!stage.isConnected) return clearInterval(timer);
      i++;
      if (i >= frames.length + 12) load(); // linger on the sorted result
      drawFrame(stage, frames[Math.min(i, frames.length - 1)], 'bars');
    }, 90);
  }
  return h(
    'div',
    { class: 'tile-big', style: gvars('sorting') },
    stage,
    h('p', { class: 'tile-cap' }, t('hero.live', { name: L(algo.name) })),
  );
}

const MOSAIC: [string, string, string][] = [
  ['searching', 'log n', 'binary_search'],
  ['traversal', 'V + E', 'breadth_first_search'],
  ['shortest', 'V·E', 'bellman_ford_algorithm'],
  ['greedy', 'n log n', 'activity_selection'],
  ['scc', 'V + E', 'tarjan_scc'],
  ['trees', 'log n', 'avl_tree'],
  ['dp', 'n·W', 'knapsack_problem'],
  ['number', 'log n', 'euclidean_algorithm'],
];

function masthead(): HTMLElement {
  return h(
    'section',
    { class: 'mosaic', 'aria-label': t('app.title') },
    liveSort(),
    MOSAIC.map(([g, fig, id]) =>
      h(
        'a',
        { class: 'tile-fig', href: `#/algo/${id}`, style: gvars(g) },
        h('b', null, fig),
        h('span', null, L(algoById(id)!.name)),
      ),
    ),
  );
}

function hero(): HTMLElement {
  return h(
    'header',
    { class: 'hero' },
    masthead(),
    h(
      'div',
      { class: 'hero-copy' },
      maskedTitle('h1', t('hero.title')),
      h(
        'div',
        { class: 'hero-side rise-in' },
        h('p', { class: 'lead' }, t('hero.lead')),
        h(
          'div',
          { class: 'actions' },
          h('a', { class: 'btn primary', href: '#/compare/sorting' }, t('hero.cta') + ' →'),
          h('a', { class: 'btn', href: '#topics' }, t('hero.browse')),
        ),
      ),
    ),
  );
}

function how(): HTMLElement {
  const items: [string, string, string, string][] = [
    ['how.watch', 'how.watch.t', 'sorting', 'tile-s'],
    ['how.race', 'how.race.t', 'searching', 'tile-m'],
    ['how.read', 'how.read.t', 'traversal', 'tile-l'],
  ];
  return h(
    'section',
    { class: 'how' },
    items.map(([a, b, g, size]) =>
      h('article', { class: `how-tile ${size}`, style: gvars(g) }, h('h3', null, t(a)), h('p', null, t(b))),
    ),
  );
}

function pictureTile(groupId: string): HTMLElement | null {
  const pic = GROUP_PICTURE[groupId];
  if (!pic) return null;
  const lang = getLang();
  return h(
    'figure',
    { class: 'tile-pic' },
    h('img', { src: pic.src, width: pic.w, height: pic.h, alt: pic.alt[lang], loading: 'lazy' }),
    h('figcaption', null, pic.caption[lang]),
  );
}

function stats(): HTMLElement {
  const pic = MASTHEAD_PICTURE;
  const lang = getLang();
  const fig = (value: string | number, caption: string, group: string) =>
    h('div', { class: 'stat-tile', style: gvars(group) }, h('b', null, value), h('p', null, caption));
  return h(
    'section',
    { class: 'stats' },
    h('figure', { class: 'stats-pic' }, h('img', { src: pic.src, width: pic.w, height: pic.h, alt: pic.alt[lang], loading: 'lazy' }), h('figcaption', null, pic.caption[lang])),
    h('div', { class: 'stats-col' }, fig(ALGOS.length, t('stats.algos'), 'greedy'), fig(5, t('stats.langs'), 'sorting')),
  );
}

function chapter(groupId: string): HTMLElement {
  const g = groupById(groupId)!;
  const list = algosIn(groupId);
  return h(
    'section',
    { class: 'field chapter', style: gvars(groupId), id: `g-${groupId}` },
    h(
      'div',
      { class: 'chapter-head' },
      h('h2', null, h('a', { href: `#/group/${g.id}` }, L(g.name))),
      h(
        'div',
        { class: 'chapter-side' },
        h('p', { class: 'lead' }, L(g.blurb)),
        h('a', { class: 'btn solid', href: `#/compare/${g.id}` }, t('nav.compare') + ' →'),
      ),
    ),
    h(
      'div',
      { class: 'tiles' },
      pictureTile(groupId),
      list.map((a) =>
        h(
          'a',
          { class: 'tile', href: `#/algo/${a.id}` },
          h('b', null, L(a.name)),
          h('span', { class: 'tile-sum' }, L(a.summary)),
          h('span', { class: 'tile-cx' }, a.avg, a.vis ? h('em', { class: 'live' }, t('home.interactive')) : null),
        ),
      ),
    ),
  );
}

export function homeView(): HTMLElement {
  return h(
    'div',
    { class: 'home' },
    hero(),
    how(),
    stats(),
    h('h2', { class: 'section-title', id: 'topics' }, t('home.topics')),
    GROUPS.map((g) => chapter(g.id)),
  );
}

export function groupView(id: string): HTMLElement {
  const g = groupById(id);
  if (!g) return h('p', null, t('notfound'));
  const list = algosIn(id);
  return h(
    'div',
    { class: 'group-page', style: gvars(id) },
    h(
      'header',
      { class: 'field head' },
      h('a', { class: 'back', href: '#/' }, '← ' + t('nav.home')),
      maskedTitle('h1', L(g.name)),
      h('div', { class: 'head-side' }, h('p', { class: 'lead' }, L(g.blurb)), h('a', { class: 'btn solid', href: `#/compare/${g.id}` }, t('group.compareAll') + ' →')),
    ),
    h(
      'section',
      { class: 'field plain' },
      h(
        'div',
        { class: 'tiles big' },
        list.map((a) =>
          h(
            'a',
            { class: 'tile fill', href: `#/algo/${a.id}` },
            h('b', null, L(a.name)),
            h('span', { class: 'tile-sum' }, L(a.summary)),
            h('span', { class: 'tile-cx' }, a.avg, ' · ', a.space, a.vis ? h('em', { class: 'live' }, t('home.interactive')) : null),
          ),
        ),
      ),
    ),
  );
}

export { GROUP_COLORS };
