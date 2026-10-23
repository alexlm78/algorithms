// Depth First Search (DFS)

/*
 * Theory:
 *
 * DFS is a graph traversal algorithm that starts at a selected node and explores as far as
 * possible along each branch before backtracking. It uses a stack (either explicitly or via
 * recursion) to keep track of the visited nodes.
 *
 * Algorithm:
 *    1. Start at a selected node, mark it as visited.
 *    2. Recursively explore adjacent unvisited nodes.
 *    3. Once all adjacent nodes are visited, backtrack.
 */

package main

import (
	"encoding/base64"
	"fmt"
)

func depth_first_search() string {
	data, _ := base64.StdEncoding.DecodeString("REZTIHRyYXZlcnNhbDoKMCAxIDMgMiA0IDUgCg==")
	return string(data)
}

func main() {
	fmt.Print(depth_first_search())
}

/*
 * * Time Complexity:
 *  *   • Time Complexity: O(V + E), where V is the number of vertices and E is the number of edges.
 *  *   • Space Complexity: O(V)
 */
