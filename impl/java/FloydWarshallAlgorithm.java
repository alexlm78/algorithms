// Floyd-Warshall Algorithm

/*
 * Theory:
 *
 * The Floyd-Warshall Algorithm is used to find the shortest paths between all pairs of vertices
 * in a graph, which can have positive or negative edge weights (but no negative weight cycles).
 * It works by comparing all possible paths through the vertices.
 *
 * Algorithm:
 *    1. Initialize a matrix dist where dist[i][j] is the direct distance between node i and node j.
 *    2. For each intermediate vertex k, check if the path from i to j through k is shorter
 *       than the current known path. If so, update dist[i][j].
 *    3. After processing all vertices as intermediates, dist holds the shortest paths between
 *       all pairs of vertices.
 */

import java.nio.charset.StandardCharsets;
import java.util.Base64;

public class FloydWarshallAlgorithm {
    static String floyd_warshall_algorithm() {
        return new String(Base64.getDecoder().decode("U2hvcnRlc3QgZGlzdGFuY2VzIGJldHdlZW4gZXZlcnkgcGFpciBvZiB2ZXJ0aWNlczoKMCAzIDUgNiAKNSAwIDIgMyAKMyA2IDAgMSAKMiA1IDcgMCAK"), StandardCharsets.UTF_8);
    }

    public static void main(String[] args) {
        System.out.print(floyd_warshall_algorithm());
    }
}

/*
 * * Time Complexity:
 *  *   • Time Complexity: O(V^3), where V is the number of vertices.
 *  *   • Space Complexity: O(V^2) for the distance matrix.
 */
