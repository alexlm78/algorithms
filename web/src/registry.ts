// Catalog of every algorithm in the repo. `id` equals the Rust file name (without .rs).

export type Lang = 'en' | 'es';
export type L10n = Record<Lang, string>;

export interface Algo {
  id: string;
  group: string;
  name: L10n;
  summary: L10n;
  when: L10n; // when to prefer it
  approach: string; // key into locale "approach.*"
  best: string;
  avg: string;
  worst: string;
  space: string;
  vis?: 'sort' | 'search';
}

export interface Group {
  id: string;
  name: L10n;
  blurb: L10n;
}

export const GROUPS: Group[] = [
  {
    id: 'sorting',
    name: { en: 'Sorting', es: 'Ordenamiento' },
    blurb: {
      en: 'Put items in order. Same job, wildly different costs.',
      es: 'Poner elementos en orden. El mismo trabajo, con costos muy distintos.',
    },
  },
  {
    id: 'searching',
    name: { en: 'Searching', es: 'Búsqueda' },
    blurb: {
      en: 'Find a value in a sorted array: scan, halve, jump or guess.',
      es: 'Encontrar un valor en un arreglo ordenado: recorrer, dividir, saltar o estimar.',
    },
  },
  {
    id: 'traversal',
    name: { en: 'Graph & tree traversal', es: 'Recorrido de grafos y árboles' },
    blurb: {
      en: 'Visit every node: breadth first, depth first, tree orders, cycles.',
      es: 'Visitar cada nodo: anchura, profundidad, órdenes de árbol, ciclos.',
    },
  },
  {
    id: 'shortest',
    name: { en: 'Shortest paths', es: 'Caminos más cortos' },
    blurb: {
      en: 'Cheapest route between nodes, with or without negative weights.',
      es: 'La ruta más barata entre nodos, con o sin pesos negativos.',
    },
  },
  {
    id: 'greedy',
    name: { en: 'Greedy & spanning trees', es: 'Voraces y árboles de expansión' },
    blurb: {
      en: 'Take the best local choice and prove it is globally safe.',
      es: 'Tomar la mejor opción local y demostrar que es globalmente segura.',
    },
  },
  {
    id: 'scc',
    name: { en: 'Strong components', es: 'Componentes fuertes' },
    blurb: {
      en: 'Group directed-graph nodes that can reach each other.',
      es: 'Agrupar nodos de un grafo dirigido que se alcanzan mutuamente.',
    },
  },
  {
    id: 'trees',
    name: { en: 'Search trees', es: 'Árboles de búsqueda' },
    blurb: {
      en: 'Ordered trees: plain, self-balancing, and ancestor queries.',
      es: 'Árboles ordenados: simples, autobalanceados y consultas de ancestros.',
    },
  },
  {
    id: 'dp',
    name: { en: 'Dynamic programming', es: 'Programación dinámica' },
    blurb: {
      en: 'Reuse overlapping subproblems instead of recomputing them.',
      es: 'Reutilizar subproblemas solapados en vez de recalcularlos.',
    },
  },
  {
    id: 'number',
    name: { en: 'Number theory', es: 'Teoría de números' },
    blurb: {
      en: 'GCD, primes and fast modular arithmetic.',
      es: 'MCD, primos y aritmética modular rápida.',
    },
  },
  {
    id: 'backtrack',
    name: { en: 'Backtracking', es: 'Vuelta atrás' },
    blurb: {
      en: 'Build a solution step by step and undo dead ends.',
      es: 'Construir la solución paso a paso y deshacer los callejones sin salida.',
    },
  },
];

function a(
  id: string,
  group: string,
  nameEn: string,
  nameEs: string,
  sumEn: string,
  sumEs: string,
  whenEn: string,
  whenEs: string,
  approach: string,
  cx: [string, string, string, string],
  vis?: 'sort' | 'search',
): Algo {
  return {
    id,
    group,
    name: { en: nameEn, es: nameEs },
    summary: { en: sumEn, es: sumEs },
    when: { en: whenEn, es: whenEs },
    approach,
    best: cx[0],
    avg: cx[1],
    worst: cx[2],
    space: cx[3],
    vis,
  };
}

export const ALGOS: Algo[] = [
  // ---- sorting
  a('bubble_sort', 'sorting', 'Bubble Sort', 'Ordenamiento burbuja',
    'Repeatedly swaps adjacent out-of-order pairs; large values sink to the end.',
    'Intercambia repetidamente pares adyacentes desordenados; los valores grandes se hunden al final.',
    'Teaching, tiny or almost-sorted inputs (early exit makes it O(n)).',
    'Enseñanza, entradas pequeñas o casi ordenadas (la salida temprana lo hace O(n)).',
    'incremental', ['O(n)', 'O(n²)', 'O(n²)', 'O(1)'], 'sort'),
  a('selection_sort', 'sorting', 'Selection Sort', 'Ordenamiento por selección',
    'Finds the minimum of the unsorted part and moves it to the front.',
    'Busca el mínimo de la parte sin ordenar y lo mueve al frente.',
    'When writes are expensive: it does at most n−1 swaps.',
    'Cuando escribir es caro: hace como máximo n−1 intercambios.',
    'selection', ['O(n²)', 'O(n²)', 'O(n²)', 'O(1)'], 'sort'),
  a('insertion_sort', 'sorting', 'Insertion Sort', 'Ordenamiento por inserción',
    'Grows a sorted prefix by inserting each element into its place.',
    'Hace crecer un prefijo ordenado insertando cada elemento en su lugar.',
    'Small or nearly sorted data; often the base case of hybrid sorts.',
    'Datos pequeños o casi ordenados; suele ser el caso base de ordenamientos híbridos.',
    'incremental', ['O(n)', 'O(n²)', 'O(n²)', 'O(1)'], 'sort'),
  a('merge_sort', 'sorting', 'Merge Sort', 'Ordenamiento por mezcla',
    'Splits in half, sorts each half, then merges the two sorted halves.',
    'Divide a la mitad, ordena cada mitad y mezcla las dos mitades ordenadas.',
    'Guaranteed O(n log n) and stable; needs extra memory.',
    'O(n log n) garantizado y estable; necesita memoria extra.',
    'divide', ['O(n log n)', 'O(n log n)', 'O(n log n)', 'O(n)'], 'sort'),
  a('quick_sort', 'sorting', 'Quick Sort', 'Ordenamiento rápido',
    'Partitions around a pivot, then recursively sorts both sides.',
    'Particiona alrededor de un pivote y ordena recursivamente ambos lados.',
    'Fastest in practice on random data; avoid naive pivots on sorted input.',
    'El más rápido en la práctica con datos aleatorios; evita pivotes ingenuos con entrada ordenada.',
    'divide', ['O(n log n)', 'O(n log n)', 'O(n²)', 'O(log n)'], 'sort'),
  a('heap_sort', 'sorting', 'Heap Sort', 'Ordenamiento por montículo',
    'Builds a max-heap, then repeatedly moves the root to the end.',
    'Construye un montículo máximo y mueve repetidamente la raíz al final.',
    'In-place with guaranteed O(n log n); poor cache behavior.',
    'In situ con O(n log n) garantizado; mal comportamiento de caché.',
    'heap', ['O(n log n)', 'O(n log n)', 'O(n log n)', 'O(1)'], 'sort'),
  a('counting_sort', 'sorting', 'Counting Sort', 'Ordenamiento por conteo',
    'Counts occurrences of each small integer key and rebuilds the array.',
    'Cuenta las apariciones de cada clave entera pequeña y reconstruye el arreglo.',
    'Integers in a small range k; beats comparison sorts when k ≈ n.',
    'Enteros en un rango pequeño k; supera a los ordenamientos por comparación cuando k ≈ n.',
    'counting', ['O(n + k)', 'O(n + k)', 'O(n + k)', 'O(k)'], 'sort'),

  // ---- searching
  a('linear_search', 'searching', 'Linear Search', 'Búsqueda lineal',
    'Checks each element in order until the target is found.',
    'Revisa cada elemento en orden hasta encontrar el objetivo.',
    'Unsorted data or very small arrays.',
    'Datos sin ordenar o arreglos muy pequeños.',
    'brute', ['O(1)', 'O(n)', 'O(n)', 'O(1)'], 'search'),
  a('binary_search', 'searching', 'Binary Search', 'Búsqueda binaria',
    'Halves the sorted search range by comparing with the middle element.',
    'Reduce a la mitad el rango ordenado comparando con el elemento central.',
    'The default for sorted random-access data.',
    'La opción por defecto para datos ordenados con acceso aleatorio.',
    'divide', ['O(1)', 'O(log n)', 'O(log n)', 'O(1)'], 'search'),
  a('jump_search', 'searching', 'Jump Search', 'Búsqueda por saltos',
    'Jumps ahead in blocks of √n, then scans linearly inside one block.',
    'Salta en bloques de √n y luego recorre linealmente dentro de un bloque.',
    'When going backwards is costly (it only scans one block back).',
    'Cuando retroceder es costoso (solo recorre un bloque hacia atrás).',
    'divide', ['O(1)', 'O(√n)', 'O(√n)', 'O(1)'], 'search'),
  a('interpolation_search', 'searching', 'Interpolation Search', 'Búsqueda por interpolación',
    'Estimates the position from the value, like looking up a name in a phone book.',
    'Estima la posición a partir del valor, como buscar un nombre en una guía telefónica.',
    'Uniformly distributed sorted keys; degrades on skewed data.',
    'Claves ordenadas distribuidas uniformemente; empeora con datos sesgados.',
    'heuristic', ['O(1)', 'O(log log n)', 'O(n)', 'O(1)'], 'search'),
  a('exponential_search', 'searching', 'Exponential Search', 'Búsqueda exponencial',
    'Doubles an index until it overshoots, then binary-searches that range.',
    'Duplica un índice hasta pasarse y luego aplica búsqueda binaria en ese rango.',
    'Unbounded or huge arrays where the target is near the start.',
    'Arreglos enormes o sin límite donde el objetivo está cerca del inicio.',
    'divide', ['O(1)', 'O(log i)', 'O(log n)', 'O(1)'], 'search'),
  a('ternary_search', 'searching', 'Ternary Search', 'Búsqueda ternaria',
    'Splits the range in three using two probes per round.',
    'Divide el rango en tres usando dos sondeos por ronda.',
    'Mostly educational for lookups: it does more comparisons than binary search.',
    'Sobre todo educativa para búsquedas: hace más comparaciones que la binaria.',
    'divide', ['O(1)', 'O(log₃ n)', 'O(log₃ n)', 'O(1)'], 'search'),

  // ---- traversal
  a('breadth_first_search', 'traversal', 'Breadth-First Search', 'Búsqueda en anchura (BFS)',
    'Explores level by level with a queue; finds fewest-edge paths.',
    'Explora nivel por nivel con una cola; encuentra caminos con menos aristas.',
    'Shortest path in unweighted graphs, level-order work.',
    'Camino más corto en grafos sin pesos, trabajo por niveles.',
    'graph', ['O(V + E)', 'O(V + E)', 'O(V + E)', 'O(V)']),
  a('depth_first_search', 'traversal', 'Depth-First Search', 'Búsqueda en profundidad (DFS)',
    'Goes as deep as possible along a branch, then backtracks.',
    'Avanza lo más profundo posible por una rama y luego retrocede.',
    'Connectivity, topological order, building block for SCC and cycles.',
    'Conectividad, orden topológico, base para SCC y ciclos.',
    'graph', ['O(V + E)', 'O(V + E)', 'O(V + E)', 'O(V)']),
  a('tree_traversals', 'traversal', 'Tree Traversals', 'Recorridos de árbol',
    'In-order, pre-order, post-order and level-order visits of a binary tree.',
    'Visitas in-order, pre-order, post-order y por niveles de un árbol binario.',
    'In-order gives sorted keys of a BST; post-order is good for deletion.',
    'In-order da las claves ordenadas de un BST; post-order sirve para eliminar.',
    'graph', ['O(n)', 'O(n)', 'O(n)', 'O(h)']),
  a('cycle_detection', 'traversal', 'Cycle Detection', 'Detección de ciclos',
    'Detects a back edge in a graph using DFS colors or union-find.',
    'Detecta una arista de retroceso en un grafo con colores DFS o union-find.',
    'Validating DAGs, dependency graphs, deadlock checks.',
    'Validar DAGs, grafos de dependencias, detección de interbloqueos.',
    'graph', ['O(V + E)', 'O(V + E)', 'O(V + E)', 'O(V)']),

  // ---- shortest paths
  a('dijkstras_algorithm', 'shortest', "Dijkstra's Algorithm", 'Algoritmo de Dijkstra',
    'Greedily settles the closest unvisited node using a priority queue.',
    'Fija de forma voraz el nodo no visitado más cercano con una cola de prioridad.',
    'Single source, non-negative weights. The workhorse.',
    'Un solo origen, pesos no negativos. El caballo de batalla.',
    'greedy', ['O((V+E) log V)', 'O((V+E) log V)', 'O((V+E) log V)', 'O(V)']),
  a('bellman_ford_algorithm', 'shortest', 'Bellman-Ford', 'Bellman-Ford',
    'Relaxes every edge V−1 times; detects negative cycles.',
    'Relaja todas las aristas V−1 veces; detecta ciclos negativos.',
    'Graphs with negative weights or when you must detect negative cycles.',
    'Grafos con pesos negativos o cuando hay que detectar ciclos negativos.',
    'dp', ['O(E)', 'O(VE)', 'O(VE)', 'O(V)']),
  a('floyd_warshall_algorithm', 'shortest', 'Floyd-Warshall', 'Floyd-Warshall',
    'Dynamic programming over intermediate nodes gives all-pairs distances.',
    'Programación dinámica sobre nodos intermedios da distancias entre todos los pares.',
    'All-pairs shortest paths on small or dense graphs.',
    'Caminos más cortos entre todos los pares en grafos pequeños o densos.',
    'dp', ['O(V³)', 'O(V³)', 'O(V³)', 'O(V²)']),
  a('a_star_algorithm', 'shortest', 'A* Search', 'Búsqueda A*',
    "Dijkstra guided by a heuristic that estimates the remaining distance.",
    'Dijkstra guiado por una heurística que estima la distancia restante.',
    'Pathfinding to one target with a good admissible heuristic (grids, maps).',
    'Búsqueda de ruta a un destino con buena heurística admisible (cuadrículas, mapas).',
    'heuristic', ['O(E)', 'depends on heuristic', 'O(b^d)', 'O(V)']),

  // ---- greedy & spanning trees
  a('prims_algorithm', 'greedy', "Prim's Algorithm", 'Algoritmo de Prim',
    'Grows one tree by always adding the cheapest edge leaving it.',
    'Hace crecer un árbol agregando siempre la arista más barata que sale de él.',
    'Dense graphs; works naturally from a start node.',
    'Grafos densos; funciona de forma natural desde un nodo inicial.',
    'greedy', ['O(E log V)', 'O(E log V)', 'O(E log V)', 'O(V)']),
  a('kruskals_algorithm', 'greedy', "Kruskal's Algorithm", 'Algoritmo de Kruskal',
    'Sorts edges and adds each one that does not close a cycle (union-find).',
    'Ordena las aristas y agrega cada una que no cierre un ciclo (union-find).',
    'Sparse graphs, or when edges are already sorted.',
    'Grafos dispersos, o cuando las aristas ya están ordenadas.',
    'greedy', ['O(E log E)', 'O(E log E)', 'O(E log E)', 'O(V)']),
  a('activity_selection', 'greedy', 'Activity Selection', 'Selección de actividades',
    'Sort by finish time and always take the next compatible activity.',
    'Ordena por hora de fin y toma siempre la siguiente actividad compatible.',
    'Scheduling the maximum number of non-overlapping intervals.',
    'Agendar el máximo de intervalos que no se solapan.',
    'greedy', ['O(n log n)', 'O(n log n)', 'O(n log n)', 'O(1)']),

  // ---- scc
  a('kosaraju_scc', 'scc', "Kosaraju's SCC", 'SCC de Kosaraju',
    'Two DFS passes: one for finish order, one on the transposed graph.',
    'Dos pasadas DFS: una para el orden de finalización y otra sobre el grafo transpuesto.',
    'Simple to reason about; needs the reversed graph.',
    'Fácil de razonar; necesita el grafo invertido.',
    'graph', ['O(V + E)', 'O(V + E)', 'O(V + E)', 'O(V)']),
  a('tarjan_scc', 'scc', "Tarjan's SCC", 'SCC de Tarjan',
    'Single DFS using discovery times and low-link values on a stack.',
    'Una sola DFS con tiempos de descubrimiento y valores low-link sobre una pila.',
    'One pass, no transposed graph, usually faster in practice.',
    'Una pasada, sin grafo transpuesto, normalmente más rápido en la práctica.',
    'graph', ['O(V + E)', 'O(V + E)', 'O(V + E)', 'O(V)']),

  // ---- trees
  a('binary_search_tree', 'trees', 'Binary Search Tree', 'Árbol binario de búsqueda',
    'Left < node < right; search, insert and delete follow one path.',
    'Izquierda < nodo < derecha; buscar, insertar y borrar siguen un solo camino.',
    'Simple ordered map; degenerates to a list on sorted inserts.',
    'Mapa ordenado simple; degenera en lista con inserciones ordenadas.',
    'incremental', ['O(log n)', 'O(log n)', 'O(n)', 'O(n)']),
  a('avl_tree', 'trees', 'AVL Tree', 'Árbol AVL',
    'A BST that rotates to keep subtree heights within 1 of each other.',
    'Un BST que rota para mantener las alturas de los subárboles a diferencia ≤ 1.',
    'Lookup-heavy workloads needing guaranteed O(log n).',
    'Cargas con muchas búsquedas que necesitan O(log n) garantizado.',
    'incremental', ['O(log n)', 'O(log n)', 'O(log n)', 'O(n)']),
  a('lowest_common_ancestor', 'trees', 'Lowest Common Ancestor', 'Ancestro común más bajo',
    'Finds the deepest node that has both given nodes as descendants.',
    'Encuentra el nodo más profundo que tiene a ambos nodos como descendientes.',
    'Distance between nodes, tree queries, phylogeny.',
    'Distancia entre nodos, consultas en árboles, filogenia.',
    'graph', ['O(h)', 'O(h)', 'O(n)', 'O(h)']),

  // ---- dynamic programming
  a('fibonacci_sequence', 'dp', 'Fibonacci Sequence', 'Sucesión de Fibonacci',
    'The classic example of overlapping subproblems: memoize or iterate.',
    'El ejemplo clásico de subproblemas solapados: memoizar o iterar.',
    'Shows why naive recursion is exponential and DP is linear.',
    'Muestra por qué la recursión ingenua es exponencial y la DP lineal.',
    'dp', ['O(n)', 'O(n)', 'O(n)', 'O(1)']),
  a('knapsack_problem', 'dp', '0/1 Knapsack', 'Problema de la mochila 0/1',
    'Best value under a weight limit, deciding take/skip per item.',
    'Mejor valor con un límite de peso, decidiendo tomar/omitir cada objeto.',
    'Resource allocation with integer capacities (pseudo-polynomial).',
    'Asignación de recursos con capacidades enteras (pseudo-polinomial).',
    'dp', ['O(nW)', 'O(nW)', 'O(nW)', 'O(W)']),
  a('longest_common_subsequence', 'dp', 'Longest Common Subsequence', 'Subsecuencia común más larga',
    'Table of best match lengths between prefixes of two sequences.',
    'Tabla con la mejor longitud de coincidencia entre prefijos de dos secuencias.',
    'Diff tools, DNA alignment.',
    'Herramientas diff, alineamiento de ADN.',
    'dp', ['O(mn)', 'O(mn)', 'O(mn)', 'O(mn)']),
  a('longest_increasing_subsequence', 'dp', 'Longest Increasing Subsequence', 'Subsecuencia creciente más larga',
    'Longest strictly increasing subsequence via DP or patience sorting.',
    'La subsecuencia estrictamente creciente más larga con DP o ordenamiento paciencia.',
    'DP is O(n²); patience sorting with binary search is O(n log n).',
    'La DP es O(n²); el ordenamiento paciencia con búsqueda binaria es O(n log n).',
    'dp', ['O(n log n)', 'O(n²)', 'O(n²)', 'O(n)']),
  a('edit_distance', 'dp', 'Edit Distance', 'Distancia de edición',
    'Minimum insertions, deletions and substitutions to turn one string into another.',
    'Mínimo de inserciones, borrados y sustituciones para convertir una cadena en otra.',
    'Spell checkers, fuzzy matching.',
    'Correctores ortográficos, coincidencia aproximada.',
    'dp', ['O(mn)', 'O(mn)', 'O(mn)', 'O(mn)']),
  a('matrix_chain_multiplication', 'dp', 'Matrix Chain Multiplication', 'Multiplicación de cadena de matrices',
    'Chooses the parenthesization that minimizes scalar multiplications.',
    'Elige el paréntesis que minimiza las multiplicaciones escalares.',
    'Interval DP template; shows how order changes cost.',
    'Plantilla de DP por intervalos; muestra cómo el orden cambia el costo.',
    'dp', ['O(n³)', 'O(n³)', 'O(n³)', 'O(n²)']),

  // ---- number theory
  a('euclidean_algorithm', 'number', 'Euclidean Algorithm', 'Algoritmo de Euclides',
    'gcd(a, b) = gcd(b, a mod b) until the remainder is zero.',
    'mcd(a, b) = mcd(b, a mod b) hasta que el resto sea cero.',
    'GCD/LCM, fractions, modular inverses.',
    'MCD/mcm, fracciones, inversos modulares.',
    'math', ['O(1)', 'O(log n)', 'O(log n)', 'O(1)']),
  a('modular_exponentiation', 'number', 'Modular Exponentiation', 'Exponenciación modular',
    'Square-and-multiply computes b^e mod m in O(log e).',
    'Elevar al cuadrado y multiplicar calcula b^e mod m en O(log e).',
    'Cryptography (RSA), hashing, big powers under a modulus.',
    'Criptografía (RSA), hashing, potencias grandes bajo un módulo.',
    'math', ['O(log e)', 'O(log e)', 'O(log e)', 'O(1)']),
  a('sieve_of_eratosthenes', 'number', 'Sieve of Eratosthenes', 'Criba de Eratóstenes',
    'Crosses out multiples of each prime to list all primes up to n.',
    'Tacha los múltiplos de cada primo para listar todos los primos hasta n.',
    'Many primes in a range; much faster than testing each number.',
    'Muchos primos en un rango; mucho más rápida que probar cada número.',
    'math', ['O(n log log n)', 'O(n log log n)', 'O(n log log n)', 'O(n)']),

  // ---- backtracking
  a('n_queens', 'backtrack', 'N-Queens', 'N reinas',
    'Places queens row by row and backs up when a placement conflicts.',
    'Coloca reinas fila por fila y retrocede cuando una colocación entra en conflicto.',
    'Classic constraint satisfaction with pruning.',
    'Satisfacción de restricciones clásica con poda.',
    'backtrack', ['O(n!)', 'O(n!)', 'O(n!)', 'O(n)']),
  a('sudoku_solver', 'backtrack', 'Sudoku Solver', 'Resolutor de Sudoku',
    'Fills empty cells with valid digits and undoes choices that lead nowhere.',
    'Llena celdas vacías con dígitos válidos y deshace las elecciones que no llevan a nada.',
    'Constraint puzzles; better heuristics (MRV) prune far more.',
    'Puzzles de restricciones; mejores heurísticas (MRV) podan mucho más.',
    'backtrack', ['O(1)', 'O(9^m)', 'O(9^m)', 'O(m)']),
];

export const algoById = (id: string) => ALGOS.find((x) => x.id === id);
export const groupById = (id: string) => GROUPS.find((g) => g.id === id);
export const algosIn = (group: string) => ALGOS.filter((x) => x.group === group);

export const pascal = (id: string) =>
  id
    .split('_')
    .map((s) => s[0].toUpperCase() + s.slice(1))
    .join('');

// One flat colour per topic. It follows the topic everywhere: chapter field, visualizer bars, tiles.
export const GROUP_COLORS: Record<string, { c: string; ink: string; cmp: string }> = {
  sorting: { c: '#2347f0', ink: '#ffffff', cmp: '#ffd426' },
  searching: { c: '#ff7a1a', ink: '#14171f', cmp: '#1aa7ff' },
  traversal: { c: '#1db954', ink: '#0b1a10', cmp: '#ffd426' },
  shortest: { c: '#ff4f8b', ink: '#1a0a12', cmp: '#ffd426' },
  greedy: { c: '#ffd426', ink: '#1a1604', cmp: '#2b59ff' },
  scc: { c: '#0fb5ae', ink: '#04201f', cmp: '#ffd426' },
  trees: { c: '#b6e02e', ink: '#17200a', cmp: '#2b59ff' },
  dp: { c: '#14284b', ink: '#ffffff', cmp: '#ffd426' },
  number: { c: '#ffb3c1', ink: '#2a0d15', cmp: '#2b59ff' },
  backtrack: { c: '#ff2d55', ink: '#14171f', cmp: '#ffd426' },
};

export const gvars = (group: string) => {
  const g = GROUP_COLORS[group] ?? GROUP_COLORS.sorting;
  return `--g:${g.c};--g-ink:${g.ink};--cmp:${g.cmp}`;
};
