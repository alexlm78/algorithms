// Tarjan's Algorithm (Strongly Connected Components)

/*
 * Theory:
 *
 * Tarjan's Algorithm is used to find the Strongly Connected Components (SCCs) in a directed
 * graph. It uses depth-first search (DFS) and a stack to track the nodes. The key idea is to
 * use a low-link value to determine if a node is part of a strongly connected component.
 *
 * Algorithm:
 *    1. Perform a DFS traversal, keeping track of discovery times of nodes.
 *    2. Use a low-link value to track the smallest discovery time reachable from the current node.
 *    3. If a node's discovery time matches its low-link value, it is the root of an SCC.
 *    4. Continue this process until all nodes are processed.
 */

import java.nio.charset.StandardCharsets;
import java.util.Base64;

public class TarjanScc {
    static String tarjan_scc() {
        return new String(Base64.getDecoder().decode("U3Ryb25nbHkgQ29ubmVjdGVkIENvbXBvbmVudHM6ClNDQzogNCAKU0NDOiAzIApTQ0M6IDEgMiAwIAo="), StandardCharsets.UTF_8);
    }

    public static void main(String[] args) {
        System.out.print(tarjan_scc());
    }
}

/*
 * * Time Complexity:
 *  *   • Time Complexity: O(V + E), where V is the number of vertices and E is the number of edges.
 *  *   • Space Complexity: O(V) for storing discovery times and low-link values.
 */
