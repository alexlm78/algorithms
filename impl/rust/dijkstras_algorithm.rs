// Dijkstra's Algorithm

/*
Theory:

Dijkstra's algorithm is used to find the shortest path between nodes in a graph with
non-negative edge weights. It uses a priority queue to explore the closest unvisited node.

Algorithm:
   1. Initialize the distance to the source node as 0 and all other nodes as infinity.
   2. Use a priority queue to select the unvisited node with the smallest known distance.
   3. For each unvisited neighbor, update the shortest known distance.
   4. Repeat until all nodes have been visited.
*/

use std::cmp::Reverse;
use std::collections::BinaryHeap;

fn dijkstra(src: usize, v: usize, adj: &Vec<Vec<(usize, u64)>>) -> Vec<u64> {
    let mut dist = vec![u64::MAX; v];
    dist[src] = 0;
    // Min-heap: (distance, vertex)
    let mut heap = BinaryHeap::new();
    heap.push(Reverse((0u64, src)));

    while let Some(Reverse((d, u))) = heap.pop() {
        if d > dist[u] {
            continue;
        }
        for &(neighbor, weight) in &adj[u] {
            let new_dist = dist[u] + weight;
            if new_dist < dist[neighbor] {
                dist[neighbor] = new_dist;
                heap.push(Reverse((new_dist, neighbor)));
            }
        }
    }
    dist
}

fn main() {
    let v = 5;
    let mut adj: Vec<Vec<(usize, u64)>> = vec![vec![]; v];
    adj[0].extend([(1, 9), (2, 6), (3, 5), (4, 3)]);
    adj[2].extend([(1, 2), (3, 4)]);

    let dist = dijkstra(0, v, &adj);
    println!("Shortest distances from source:");
    for (i, d) in dist.iter().enumerate() {
        println!("Node {} distance: {}", i, d);
    }
}

/*
 * Time Complexity:
 *   • Time Complexity: O((V + E) log V), where V is the number of vertices and E is the number of edges.
 *   • Space Complexity: O(V)
 */
