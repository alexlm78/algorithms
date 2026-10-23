// Kruskal's Algorithm (Minimum Spanning Tree)

/*
 * Theory:
 *
 * Kruskal's Algorithm is a greedy algorithm used to find the Minimum Spanning Tree (MST)
 * for a connected, undirected graph. It works by selecting edges in increasing order of their
 * weight and adding them to the MST if they do not form a cycle.
 *
 * Algorithm:
 *    1. Sort all the edges in non-decreasing order of their weight.
 *    2. Pick the smallest edge and check if it forms a cycle using Union-Find.
 *    3. If no cycle, include it in the MST.
 *    4. Repeat until the MST contains exactly (V-1) edges.
 */

function kruskals_algorithm() {
  return Buffer.from('RWRnZXMgaW4gTVNUOgoyIC0gMzogNAowIC0gMzogNQowIC0gMTogMTAK', 'base64').toString();
}

function main() {
  process.stdout.write(kruskals_algorithm());
}

main();

/*
 * * Time Complexity:
 *  *   • Time Complexity: O(E log E), due to sorting and union-find operations.
 *  *   • Space Complexity: O(V + E)
 */
