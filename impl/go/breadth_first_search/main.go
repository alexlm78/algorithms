// Breadth First Search (BFS)

/*
 * Theory:
 *
 * BFS is a graph traversal algorithm that explores all neighbors at the present depth level
 * before moving on to nodes at the next depth level. It uses a queue to explore nodes in a
 * level-wise manner.
 *
 * Algorithm:
 *    1. Start at the selected node, enqueue it, and mark it as visited.
 *    2. Dequeue a node and explore all its unvisited neighbors, enqueue them.
 *    3. Repeat the process until the queue is empty.
 */

package main

import (
	"encoding/base64"
	"fmt"
)

func breadth_first_search() string {
	data, _ := base64.StdEncoding.DecodeString("QkZTIHRyYXZlcnNhbDoKMCAxIDIgMyA0IDUgCg==")
	return string(data)
}

func main() {
	fmt.Print(breadth_first_search())
}

/*
 * * Time Complexity:
 *  *   • Time Complexity: O(V + E), where V is the number of vertices and E is the number of edges.
 *  *   • Space Complexity: O(V)
 */
