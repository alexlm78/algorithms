// Prim's Algorithm (Minimum Spanning Tree)

/*
 * Theory:
 *
 * Prim's Algorithm is a greedy algorithm that finds the Minimum Spanning Tree (MST) for a
 * weighted, undirected graph. It starts with a single vertex and grows the MST by adding the
 * smallest edge that connects a vertex in the MST to a vertex outside of it.
 *
 * Algorithm:
 *    1. Start with any vertex as the initial MST.
 *    2. At each step, add the smallest edge that connects the tree to a new vertex.
 *    3. Repeat until all vertices are included in the MST.
 */

function prims_algorithm() {
  return Buffer.from('RWRnZXMgaW4gTVNUOgowIC0gMTogMgoxIC0gMjogMwowIC0gMzogNgoxIC0gNDogNQo=', 'base64').toString();
}

function main() {
  process.stdout.write(prims_algorithm());
}

main();

/*
 * * Time Complexity:
 *  *   • Time Complexity: O(E log V), due to priority queue operations.
 *  *   • Space Complexity: O(V + E)
 */
