import { L, t } from '../i18n';
import { algoById, algosIn, groupById, gvars } from '../registry';
import { codeTabs, loadTheory } from '../ui/code';
import { h, maskedTitle } from '../ui/dom';
import { visualizer } from '../ui/visualizer';

export function algoView(id: string): HTMLElement {
  const a = algoById(id);
  if (!a) return h('p', null, t('notfound'));
  const g = groupById(a.group)!;
  const siblings = algosIn(a.group).filter((x) => x.id !== a.id);

  const theory = h('pre', { class: 'theory' });
  const theorySec = h('section', { class: 'block', hidden: true }, h('h2', null, t('algo.theory')), theory);
  void loadTheory(a.id).then((txt) => {
    if (!txt) return;
    theory.textContent = txt.replace(/^\s{0,3}/gm, '');
    theorySec.hidden = false;
  });

  const cx = (label: string, v: string) => h('div', { class: 'cx' }, h('b', null, v), h('small', null, label));

  return h(
    'div',
    { class: 'algo-page', style: gvars(a.group) },
    h(
      'header',
      { class: 'field head' },
      h('a', { class: 'back', href: `#/group/${g.id}` }, '← ' + L(g.name)),
      maskedTitle('h1', L(a.name)),
      h('p', { class: 'lead' }, L(a.summary)),
      h('div', { class: 'cx-grid' }, cx(t('algo.best'), a.best), cx(t('algo.avg'), a.avg), cx(t('algo.worst'), a.worst), cx(t('algo.space'), a.space)),
      h(
        'div',
        { class: 'facts' },
        h('p', null, h('b', null, t('algo.approach')), t(`approach.${a.approach}`)),
        h('p', null, h('b', null, t('algo.when')), L(a.when)),
      ),
    ),
    h('section', { class: 'block' }, h('h2', null, t('algo.watch')), a.vis ? visualizer(a) : h('p', { class: 'muted' }, t('algo.noVis'))),
    h('section', { class: 'block deep' }, h('h2', null, t('algo.code')), codeTabs(a.id)),
    theorySec,
    siblings.length
      ? h(
          'section',
          { class: 'block' },
          h('h2', null, t('algo.related')),
          h(
            'div',
            { class: 'chips' },
            siblings.map((s) => h('a', { class: 'chip', href: `#/algo/${s.id}` }, L(s.name))),
            h('a', { class: 'chip accent', href: `#/compare/${g.id}` }, t('group.compareAll') + ' →'),
          ),
        )
      : null,
  );
}
