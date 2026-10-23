import en from './locales/en';
import es from './locales/es';
import type { L10n, Lang } from './registry';

const dicts: Record<Lang, Record<string, string>> = { en, es };

function load(): Lang {
  try {
    const v = localStorage.getItem('lang');
    if (v === 'en' || v === 'es') return v;
  } catch {
    /* storage unavailable */
  }
  return 'en'; // English is the primary language
}

let lang: Lang = load();

export const getLang = () => lang;

export function setLang(l: Lang) {
  lang = l;
  try {
    localStorage.setItem('lang', l);
  } catch {
    /* ignore */
  }
  document.documentElement.lang = l;
  window.dispatchEvent(new Event('langchange'));
}

export function t(key: string, params?: Record<string, string | number>): string {
  let s = dicts[lang][key] ?? dicts.en[key] ?? key;
  if (params) for (const [k, v] of Object.entries(params)) s = s.replaceAll(`{${k}}`, String(v));
  return s;
}

export const L = (x: L10n) => x[lang];
