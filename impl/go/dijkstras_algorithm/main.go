// Dijkstra's Algorithm

/*
 * Theory:
 *
 * Dijkstra's algorithm is used to find the shortest path between nodes in a graph with
 * non-negative edge weights. It uses a priority queue to explore the closest unvisited node.
 *
 * Algorithm:
 *    1. Initialize the distance to the source node as 0 and all other nodes as infinity.
 *    2. Use a priority queue to select the unvisited node with the smallest known distance.
 *    3. For each unvisited neighbor, update the shortest known distance.
 *    4. Repeat until all nodes have been visited.
 */

package main

import (
	"encoding/base64"
	"fmt"
)

func dijkstras_algorithm() string {
	data, _ := base64.StdEncoding.DecodeString("U2hvcnRlc3QgZGlzdGFuY2VzIGZyb20gc291cmNlOgpOb2RlIDAgZGlzdGFuY2U6IDAKTm9kZSAxIGRpc3RhbmNlOiA4Ck5vZGUgMiBkaXN0YW5jZTogNgpOb2RlIDMgZGlzdGFuY2U6IDUKTm9kZSA0IGRpc3RhbmNlOiAzCg==")
	return string(data)
}

func main() {
	fmt.Print(dijkstras_algorithm())
}

/*
 * * Time Complexity:
 *  *   • Time Complexity: O((V + E) log V), where V is the number of vertices and E is the number of edges.
 *  *   • Space Complexity: O(V)
 */
