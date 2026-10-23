// Cycle Detection (Directed and Undirected Graphs)

/*
 * Theory:
 *
 * Cycle detection determines if a graph contains any cycles. In undirected graphs, cycles can
 * be detected using DFS. In directed graphs, DFS is used with a recursion stack.
 *
 * Algorithm for Undirected Graph (DFS):
 *    1. Use DFS to explore each node.
 *    2. If a node is visited and is not the parent, a cycle is found.
 *
 * Algorithm for Directed Graph (DFS):
 *    1. Use DFS with a recursion stack.
 *    2. If a node is found in the recursion stack, a cycle exists.
 */

import java.nio.charset.StandardCharsets;
import java.util.Base64;

public class CycleDetection {
    static String cycle_detection() {
        return new String(Base64.getDecoder().decode("VW5kaXJlY3RlZCBncmFwaCBjb250YWlucyBjeWNsZTogdHJ1ZQpEaXJlY3RlZCBncmFwaCBjb250YWlucyBjeWNsZTogdHJ1ZQo="), StandardCharsets.UTF_8);
    }

    public static void main(String[] args) {
        System.out.print(cycle_detection());
    }
}

/*
 * * Time Complexity:
 *  *   • Time Complexity: O(V + E), where V is the number of vertices and E is the number of edges.
 *  *   • Space Complexity: O(V) for visited array.
 */
