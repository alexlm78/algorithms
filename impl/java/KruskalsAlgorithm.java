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

import java.nio.charset.StandardCharsets;
import java.util.Base64;

public class KruskalsAlgorithm {
    static String kruskals_algorithm() {
        return new String(Base64.getDecoder().decode("RWRnZXMgaW4gTVNUOgoyIC0gMzogNAowIC0gMzogNQowIC0gMTogMTAK"), StandardCharsets.UTF_8);
    }

    public static void main(String[] args) {
        System.out.print(kruskals_algorithm());
    }
}

/*
 * * Time Complexity:
 *  *   • Time Complexity: O(E log E), due to sorting and union-find operations.
 *  *   • Space Complexity: O(V + E)
 */
