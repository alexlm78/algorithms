import babbage from '../assets/babbage-difference-engine-detail-6224956233.jpg';
import euclid from '../assets/p-penn-museum-inv-e02748-euclid-s.jpg';
import catalog from '../assets/schlagwortkatalog.jpg';
import bridges from '../assets/tabuleiro-representando-as-sete-pontes-de-konigsberg.jpg';
import hollerith from '../assets/hollerith-punched-card.jpg';
import type { L10n } from './registry';

export interface Picture {
  src: string;
  w: number;
  h: number;
  alt: L10n;
  caption: L10n;
  credit: string;
}

const P = {
  babbage: {
    src: babbage, w: 1920, h: 1440,
    alt: { en: 'Rows of brass number wheels inside a working Babbage Difference Engine', es: 'Filas de ruedas numéricas de latón dentro de una Máquina Diferencial de Babbage en funcionamiento' },
    caption: { en: 'Babbage’s Difference Engine: arithmetic as a procedure', es: 'La Máquina Diferencial de Babbage: la aritmética como procedimiento' },
    credit: 'Babbage Difference Engine Detail, Don DeBold, CC BY 2.0',
  },
  euclid: {
    src: euclid, w: 1920, h: 1190,
    alt: { en: 'A papyrus fragment of Euclid’s Elements with a geometric diagram', es: 'Un fragmento de papiro de los Elementos de Euclides con un diagrama geométrico' },
    caption: { en: 'Euclid’s Elements on papyrus, where the GCD algorithm was written down', es: 'Los Elementos de Euclides en papiro, donde se escribió el algoritmo del MCD' },
    credit: 'P.Penn. Museum inv. E02748, University of Pennsylvania Museum, CC BY-SA 4.0',
  },
  catalog: {
    src: catalog, w: 1920, h: 1624,
    alt: { en: 'A wooden library card catalogue with one drawer pulled open', es: 'Un fichero de biblioteca de madera con un cajón abierto' },
    caption: { en: 'A card catalogue: binary search with your fingers', es: 'Un fichero: búsqueda binaria con los dedos' },
    credit: 'Schlagwortkatalog, Dr. Marcus Gossler, CC BY-SA 3.0',
  },
  bridges: {
    src: bridges, w: 1920, h: 1280,
    alt: { en: 'A wooden board model of the seven bridges of Königsberg', es: 'Un tablero de madera que representa los siete puentes de Königsberg' },
    caption: { en: 'The seven bridges of Königsberg, where graph theory began', es: 'Los siete puentes de Königsberg, donde nació la teoría de grafos' },
    credit: 'Tabuleiro representando as sete pontes de Königsberg, Estes Objethos Atelier / Rodrigo Tetsuo Argenton, CC BY-SA 4.0',
  },
  hollerith: {
    src: hollerith, w: 1200, h: 538,
    alt: { en: 'A Hollerith punched card with round holes marking digits', es: 'Una tarjeta perforada de Hollerith con agujeros que marcan dígitos' },
    caption: { en: 'A Hollerith card (1895): machines sorted these by hole position', es: 'Una tarjeta de Hollerith (1895): las máquinas las ordenaban por la posición de los agujeros' },
    credit: 'Hollerith Punched Card (1895), public domain',
  },
} satisfies Record<string, Picture>;

/** One real picture per topic that has an honest one. */
export const GROUP_PICTURE: Record<string, Picture> = {
  sorting: P.hollerith,
  searching: P.catalog,
  traversal: P.bridges,
  number: P.euclid,
};

export const MASTHEAD_PICTURE: Picture = P.babbage;

export const CREDITS = Object.values(P).map((p) => p.credit);
