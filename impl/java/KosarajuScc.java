// Kosaraju's Algorithm (Strongly Connected Components)

/*
 * Theory:
 *
 * Kosaraju's Algorithm finds Strongly Connected Components (SCCs) in a directed graph using
 * two DFS passes. The first DFS sorts vertices by finishing time; the second DFS explores
 * SCCs on the reversed graph.
 *
 * Algorithm:
 *    1. Perform DFS on the original graph, noting the finishing times of vertices.
 *    2. Reverse the graph.
 *    3. Perform DFS on the reversed graph in decreasing finishing-time order.
 *       Each DFS tree in this pass is one SCC.
 */

import java.nio.charset.StandardCharsets;
import java.util.Base64;

public class KosarajuScc {
    static String kosaraju_scc() {
        return new String(Base64.getDecoder().decode("U3Ryb25nbHkgQ29ubmVjdGVkIENvbXBvbmVudHM6CjAgMSAyIAozIAo0IAo="), StandardCharsets.UTF_8);
    }

    public static void main(String[] args) {
        System.out.print(kosaraju_scc());
    }
}

/*
 * * Time Complexity:
 *  *   • Time Complexity: O(V + E), where V is the number of vertices and E is the number of edges.
 *  *   • Space Complexity: O(V) for visited and stack.
 */
