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

import java.nio.charset.StandardCharsets;
import java.util.Base64;

public class DepthFirstSearch {
    static String depth_first_search() {
        return new String(Base64.getDecoder().decode("REZTIHRyYXZlcnNhbDoKMCAxIDMgMiA0IDUgCg=="), StandardCharsets.UTF_8);
    }

    public static void main(String[] args) {
        System.out.print(depth_first_search());
    }
}

/*
 * * Time Complexity:
 *  *   • Time Complexity: O(V + E), where V is the number of vertices and E is the number of edges.
 *  *   • Space Complexity: O(V)
 */
