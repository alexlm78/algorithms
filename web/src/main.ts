import './style.css';
import { getLang, setLang, t } from './i18n';
import { L } from './i18n';
import { GROUPS, GROUP_COLORS } from './registry';
import { CREDITS } from './pictures';
import { h } from './ui/dom';
import { flag } from './ui/flags';

export const REPO_URL = 'https://github.com/alexlm78/algorithms';
import { homeView, groupView } from './views/home';
import { algoView } from './views/algo';
import { compareView } from './views/compare';

const app = document.getElementById('app')!;

function route(): HTMLElement {
  const [, kind, id] = location.hash.split('/');
  switch (kind) {
    case 'group':
      return groupView(id);
    case 'algo':
      return algoView(id);
    case 'compare':
      return compareView(id);
    default:
      return homeView();
  }
}

function applyTheme(v: string | null) {
  if (v) document.documentElement.dataset.theme = v;
  else delete document.documentElement.dataset.theme;
}

function currentTheme(): 'light' | 'dark' {
  return (document.documentElement.dataset.theme as 'light' | 'dark') ??
    (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
}

try {
  applyTheme(localStorage.getItem('theme'));
} catch {
  /* storage unavailable */
}

/** The name returns at full width, one block per letter, each in a topic's colour. */
function footer(): HTMLElement {
  const word = 'ALGORITHMS';
  const heights = [100, 78, 92, 64, 86, 100, 72, 94, 68, 88];
  const mark = h(
    'div',
    { class: 'mark', 'aria-hidden': 'true' },
    [...word].map((ch, i) => {
      const c = GROUP_COLORS[GROUPS[i % GROUPS.length].id];
      return h('span', { style: `height:${heights[i]}%;background:${c.c};color:${c.ink}` }, ch);
    }),
  );
  return h(
    'footer',
    { class: 'footer' },
    mark,
    h(
      'div',
      { class: 'footer-cols' },
      h('nav', { class: 'footer-links', 'aria-label': t('footer.topics') }, GROUPS.map((g) => h('a', { href: `#/group/${g.id}` }, L(g.name)))),
      h('p', null, t('footer.source'), ' ', h('a', { href: REPO_URL, target: '_blank', rel: 'noopener' }, 'github.com/alexlm78/algorithms'), ' · MIT'),
    ),
    h('div', { class: 'credits' }, h('b', null, t('footer.credits')), h('ul', null, CREDITS.map((c) => h('li', null, c)))),
  );
}

/** Parts of each section rise in once, staggered, as the section enters. Content stays visible if script fails. */
const REVEAL = '.chapter-head, .chapter .tile, .chapter .tile-pic, .tiles.big .tile, .how-tile, .stats-pic, .stat-tile, .section-title, .block > h2, .cx, .chip, .race-tile';
let io: IntersectionObserver | undefined;
function reveal() {
  io?.disconnect();
  if (!('IntersectionObserver' in window)) return;
  io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        e.target.classList.add('in');
        io?.unobserve(e.target);
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
  );
  document.querySelectorAll<HTMLElement>(REVEAL).forEach((el) => {
    const i = [...(el.parentElement?.children ?? [])].indexOf(el);
    el.style.setProperty('--d', `${Math.min(i, 8) * 70}ms`);
    el.classList.add('rv');
    io!.observe(el);
  });
}

function render() {
  document.title = t('app.title');
  document.documentElement.lang = getLang();
  const langBtn = (l: 'en' | 'es') => {
    const name = l === 'en' ? 'English' : 'Español';
    const b = h('button', { class: 'lang', type: 'button', 'aria-pressed': String(getLang() === l), 'aria-label': name, title: name }, flag(l), l.toUpperCase());
    b.addEventListener('click', () => {
      if (getLang() !== l) setLang(l);
    });
    return b;
  };
  const langs = h('div', { class: 'langs', role: 'group', 'aria-label': 'Language' }, langBtn('en'), langBtn('es'));
  const repo = h('a', { class: 'btn small repo', href: REPO_URL, target: '_blank', rel: 'noopener' }, 'GitHub ↗');
  const themeBtn = h('button', { class: 'btn small', type: 'button', 'aria-label': t('nav.theme') }, '◐');
  themeBtn.addEventListener('click', () => {
    const next = currentTheme() === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    try {
      localStorage.setItem('theme', next);
    } catch {
      /* ignore */
    }
  });

  app.replaceChildren(
    h(
      'header',
      { class: 'topbar' },
      h('a', { class: 'brand', href: '#/' }, t('app.title')),
      h('div', { class: 'topbar-actions' }, langs, repo, themeBtn),
    ),
    h('main', null, route()),
    footer(),
  );
  window.scrollTo(0, 0);
  reveal();
}

window.addEventListener('hashchange', render);
window.addEventListener('langchange', render);
render();
