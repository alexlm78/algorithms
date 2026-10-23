type Child = Node | string | number | null | undefined | false;

export function h<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  props?: Record<string, unknown> | null,
  ...children: (Child | Child[])[]
): HTMLElementTagNameMap[K] {
  const el = document.createElement(tag);
  if (props) {
    for (const [k, v] of Object.entries(props)) {
      if (v == null || v === false) continue;
      if (k === 'class') el.className = String(v);
      else if (k === 'style') el.style.cssText = String(v);
      else if (k.startsWith('on') && typeof v === 'function') el.addEventListener(k.slice(2), v as EventListener);
      else if (k in el && typeof v !== 'string') (el as unknown as Record<string, unknown>)[k] = v;
      else el.setAttribute(k, String(v));
    }
  }
  append(el, children);
  return el;
}

function append(el: Node, children: (Child | Child[])[]) {
  for (const c of children) {
    if (Array.isArray(c)) append(el, c);
    else if (c != null && c !== false) el.appendChild(typeof c === 'object' ? c : document.createTextNode(String(c)));
  }
}

const SVG = 'http://www.w3.org/2000/svg';

export function svg(tag: string, attrs: Record<string, string | number> = {}, ...children: (Node | string)[]) {
  const el = document.createElementNS(SVG, tag);
  for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, String(v));
  for (const c of children) el.appendChild(typeof c === 'string' ? document.createTextNode(c) : c);
  return el;
}

/** A headline split into at most two lines, each rising out of its own mask on load. */
export function maskedTitle(tag: 'h1' | 'h2', text: string, cls = ''): HTMLElement {
  const words = text.split(' ');
  let cut = words.length;
  if (words.length > 1) {
    // break nearest the middle of the text
    let best = Infinity, acc = 0;
    for (let i = 0; i < words.length - 1; i++) {
      acc += words[i].length + 1;
      const d = Math.abs(acc - text.length / 2);
      if (d < best) {
        best = d;
        cut = i + 1;
      }
    }
  }
  const lines = [words.slice(0, cut).join(' '), words.slice(cut).join(' ')].filter(Boolean);
  const el = h(tag, { class: `masked ${cls}`.trim(), 'aria-label': text });
  lines.forEach((l, i) =>
    el.appendChild(h('span', { class: 'mask', 'aria-hidden': 'true' }, h('span', { class: 'rise', style: `--i:${i}` }, l))),
  );
  return el;
}
