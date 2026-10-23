// Floyd-Warshall Algorithm

/*
Theory:

The Floyd-Warshall Algorithm is used to find the shortest paths between all pairs of vertices
in a graph, which can have positive or negative edge weights (but no negative weight cycles).
It works by comparing all possible paths through the vertices.

Algorithm:
   1. Initialize a matrix dist where dist[i][j] is the direct distance between node i and node j.
   2. For each intermediate vertex k, check if the path from i to j through k is shorter
      than the current known path. If so, update dist[i][j].
   3. After processing all vertices as intermediates, dist holds the shortest paths between
      all pairs of vertices.
*/

const INF: i64 = 99999;

fn floyd_warshall(graph: &Vec<Vec<i64>>) {
    let v = graph.len();
    let mut dist = graph.clone();

    for k in 0..v {
        for i in 0..v {
            for j in 0..v {
                if dist[i][k] != INF && dist[k][j] != INF && dist[i][j] > dist[i][k] + dist[k][j] {
                    dist[i][j] = dist[i][k] + dist[k][j];
                }
            }
        }
    }

    println!("Shortest distances between every pair of vertices:");
    for row in &dist {
        for &val in row {
            if val == INF {
                print!("INF ");
            } else {
                print!("{} ", val);
            }
        }
        println!();
    }
}

fn main() {
    let graph = vec![
        vec![0, 3, INF, 7],
        vec![8, 0, 2, INF],
        vec![5, INF, 0, 1],
        vec![2, INF, INF, 0],
    ];
    floyd_warshall(&graph);
}

/*
 * Time Complexity:
 *   • Time Complexity: O(V^3), where V is the number of vertices.
 *   • Space Complexity: O(V^2) for the distance matrix.
 */
