import { svg } from './dom';

/** United Kingdom flag (English) and Spanish flag as small inline SVGs. */
export function flag(lang: 'en' | 'es'): SVGElement {
  const root = svg('svg', { viewBox: '0 0 60 40', width: 24, height: 16, 'aria-hidden': 'true', class: 'flag', preserveAspectRatio: 'none' });
  if (lang === 'es') {
    root.append(
      svg('rect', { width: 60, height: 40, fill: '#c60b1e' }),
      svg('rect', { y: 10, width: 60, height: 20, fill: '#ffc400' }),
    );
  } else {
    root.append(
      svg('rect', { width: 60, height: 40, fill: '#012169' }),
      svg('path', { d: 'M0 0 60 40M60 0 0 40', stroke: '#fff', 'stroke-width': 8 }),
      svg('path', { d: 'M0 0 60 40M60 0 0 40', stroke: '#c8102e', 'stroke-width': 3 }),
      svg('path', { d: 'M30 0v40M0 20h60', stroke: '#fff', 'stroke-width': 14 }),
      svg('path', { d: 'M30 0v40M0 20h60', stroke: '#c8102e', 'stroke-width': 8 }),
    );
  }
  return root;
}
