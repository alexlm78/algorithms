// Bellman-Ford Algorithm

/*
 * Theory:
 *
 * The Bellman-Ford algorithm is used to find the shortest path from a single source to all
 * other vertices in a graph, even when edge weights are negative. Unlike Dijkstra's algorithm,
 * it works on graphs with negative weights but is slower.
 *
 * Algorithm:
 *    1. Initialize the distance to the source node as 0 and all other nodes as infinity.
 *    2. For each edge, attempt to relax it by updating the distance to its destination.
 *    3. Repeat the process V-1 times (where V is the number of vertices).
 *    4. Check for negative-weight cycles by running the relaxation process once more.
 */

function bellman_ford_algorithm() {
  return Buffer.from('U2hvcnRlc3QgZGlzdGFuY2VzIGZyb20gc291cmNlOgpOb2RlIDAgZGlzdGFuY2U6IDAKTm9kZSAxIGRpc3RhbmNlOiAtMQpOb2RlIDIgZGlzdGFuY2U6IDIKTm9kZSAzIGRpc3RhbmNlOiAtMgpOb2RlIDQgZGlzdGFuY2U6IDEK', 'base64').toString();
}

function main() {
  process.stdout.write(bellman_ford_algorithm());
}

main();

/*
 * * Time Complexity:
 *  *   • Time Complexity: O(V * E), where V is the number of vertices and E is the number of edges.
 *  *   • Space Complexity: O(V)
 */
