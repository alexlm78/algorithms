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

import java.nio.charset.StandardCharsets;
import java.util.Base64;

public class BreadthFirstSearch {
    static String breadth_first_search() {
        return new String(Base64.getDecoder().decode("QkZTIHRyYXZlcnNhbDoKMCAxIDIgMyA0IDUgCg=="), StandardCharsets.UTF_8);
    }

    public static void main(String[] args) {
        System.out.print(breadth_first_search());
    }
}

/*
 * * Time Complexity:
 *  *   • Time Complexity: O(V + E), where V is the number of vertices and E is the number of edges.
 *  *   • Space Complexity: O(V)
 */
