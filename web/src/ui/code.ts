import hljs from 'highlight.js/lib/core';
import rust from 'highlight.js/lib/languages/rust';
import go from 'highlight.js/lib/languages/go';
import java from 'highlight.js/lib/languages/java';
import python from 'highlight.js/lib/languages/python';
import typescript from 'highlight.js/lib/languages/typescript';
import { pascal } from '../registry';
import { t } from '../i18n';
import { h } from './dom';

hljs.registerLanguage('rust', rust);
hljs.registerLanguage('go', go);
hljs.registerLanguage('java', java);
hljs.registerLanguage('python', python);
hljs.registerLanguage('typescript', typescript);

type Loader = () => Promise<string>;
type Glob = Record<string, Loader>;

const rustSrc = import.meta.glob('../../../impl/rust/*.rs', { query: '?raw', import: 'default' }) as Glob;
const goSrc = import.meta.glob('../../../impl/go/*/main.go', { query: '?raw', import: 'default' }) as Glob;
const javaSrc = import.meta.glob('../../../impl/java/*.java', { query: '?raw', import: 'default' }) as Glob;
const pySrc = import.meta.glob('../../../impl/python/*.py', { query: '?raw', import: 'default' }) as Glob;
const tsSrc = import.meta.glob('../../../impl/typescript/*.ts', { query: '?raw', import: 'default' }) as Glob;

interface LangDef {
  id: string;
  label: string;
  src: Glob;
  file: (id: string) => string;
}

export const LANGS: LangDef[] = [
  { id: 'rust', label: 'Rust', src: rustSrc, file: (id) => `/${id}.rs` },
  { id: 'go', label: 'Go', src: goSrc, file: (id) => `/${id}/main.go` },
  { id: 'java', label: 'Java', src: javaSrc, file: (id) => `/${pascal(id)}.java` },
  { id: 'python', label: 'Python', src: pySrc, file: (id) => `/${id}.py` },
  { id: 'typescript', label: 'TypeScript', src: tsSrc, file: (id) => `/${id}.ts` },
];

export async function loadSource(lang: LangDef, id: string): Promise<string | null> {
  const suffix = lang.file(id);
  const key = Object.keys(lang.src).find((k) => k.endsWith(suffix));
  return key ? lang.src[key]() : null;
}

/** Pull the "Theory:" block out of the Rust header comment. */
export async function loadTheory(id: string): Promise<string | null> {
  const src = await loadSource(LANGS[0], id);
  const m = src?.match(/\/\*\s*\n\s*Theory:\s*([\s\S]*?)\*\//);
  return m ? m[1].trim() : null;
}

export function implemented(id: string): Record<string, boolean> {
  const out: Record<string, boolean> = {};
  for (const l of LANGS) out[l.id] = Object.keys(l.src).some((k) => k.endsWith(l.file(id)));
  return out;
}

export function codeTabs(id: string): HTMLElement {
  const have = implemented(id);
  const first = LANGS.find((l) => have[l.id]) ?? LANGS[0];
  const tabs = h('div', { class: 'tabs', role: 'tablist' });
  const body = h('div', { class: 'code-body' });
  let token = 0;

  const show = async (lang: LangDef) => {
    const mine = ++token;
    tabs.querySelectorAll('button').forEach((b) => b.setAttribute('aria-selected', String(b.dataset.lang === lang.id)));
    body.replaceChildren(h('p', { class: 'muted' }, t('algo.loading')));
    const src = have[lang.id] ? await loadSource(lang, id) : null;
    if (mine !== token) return;
    if (src == null) {
      body.replaceChildren(h('p', { class: 'muted' }, t('algo.missing')));
      return;
    }
    const code = h('code', { class: `hljs language-${lang.id}` });
    code.innerHTML = hljs.highlight(src, { language: lang.id }).value;
    const copy = h('button', { class: 'btn small copy', type: 'button' }, t('algo.copy'));
    copy.addEventListener('click', () => {
      navigator.clipboard?.writeText(src).then(() => {
        copy.textContent = t('algo.copied');
        setTimeout(() => (copy.textContent = t('algo.copy')), 1200);
      });
    });
    body.replaceChildren(copy, h('pre', null, code));
  };

  for (const l of LANGS) {
    const b = h('button', { type: 'button', role: 'tab', 'data-lang': l.id, class: have[l.id] ? '' : 'missing' }, l.label);
    b.addEventListener('click', () => void show(l));
    tabs.appendChild(b);
  }
  void show(first);
  return h('div', { class: 'code-tabs' }, tabs, body);
}
