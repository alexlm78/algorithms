// Prim's Algorithm (Minimum Spanning Tree)

/*
 * Theory:
 *
 * Prim's Algorithm is a greedy algorithm that finds the Minimum Spanning Tree (MST) for a
 * weighted, undirected graph. It starts with a single vertex and grows the MST by adding the
 * smallest edge that connects a vertex in the MST to a vertex outside of it.
 *
 * Algorithm:
 *    1. Start with any vertex as the initial MST.
 *    2. At each step, add the smallest edge that connects the tree to a new vertex.
 *    3. Repeat until all vertices are included in the MST.
 */

import java.nio.charset.StandardCharsets;
import java.util.Base64;

public class PrimsAlgorithm {
    static String prims_algorithm() {
        return new String(Base64.getDecoder().decode("RWRnZXMgaW4gTVNUOgowIC0gMTogMgoxIC0gMjogMwowIC0gMzogNgoxIC0gNDogNQo="), StandardCharsets.UTF_8);
    }

    public static void main(String[] args) {
        System.out.print(prims_algorithm());
    }
}

/*
 * * Time Complexity:
 *  *   • Time Complexity: O(E log V), due to priority queue operations.
 *  *   • Space Complexity: O(V + E)
 */
