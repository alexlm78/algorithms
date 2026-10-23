// Bellman-Ford Algorithm

/*
Theory:

The Bellman-Ford algorithm is used to find the shortest path from a single source to all
other vertices in a graph, even when edge weights are negative. Unlike Dijkstra's algorithm,
it works on graphs with negative weights but is slower.

Algorithm:
   1. Initialize the distance to the source node as 0 and all other nodes as infinity.
   2. For each edge, attempt to relax it by updating the distance to its destination.
   3. Repeat the process V-1 times (where V is the number of vertices).
   4. Check for negative-weight cycles by running the relaxation process once more.
*/

fn bellman_ford(edges: &[(usize, usize, i64)], v: usize, src: usize) {
    let mut dist = vec![i64::MAX; v];
    dist[src] = 0;

    for _ in 0..v - 1 {
        for &(u, nv, weight) in edges {
            if dist[u] != i64::MAX && dist[u] + weight < dist[nv] {
                dist[nv] = dist[u] + weight;
            }
        }
    }

    // Check for negative weight cycle
    for &(u, nv, weight) in edges {
        if dist[u] != i64::MAX && dist[u] + weight < dist[nv] {
            println!("Graph contains negative weight cycle");
            return;
        }
    }

    println!("Shortest distances from source:");
    for (i, d) in dist.iter().enumerate() {
        println!("Node {} distance: {}", i, d);
    }
}

fn main() {
    let edges: Vec<(usize, usize, i64)> = vec![
        (0, 1, -1),
        (0, 2, 4),
        (1, 2, 3),
        (1, 3, 2),
        (1, 4, 2),
        (3, 2, 5),
        (3, 1, 1),
        (4, 3, -3),
    ];
    bellman_ford(&edges, 5, 0);
}

/*
 * Time Complexity:
 *   • Time Complexity: O(V * E), where V is the number of vertices and E is the number of edges.
 *   • Space Complexity: O(V)
 */
