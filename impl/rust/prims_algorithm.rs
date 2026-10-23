// Prim's Algorithm (Minimum Spanning Tree)

/*
Theory:

Prim's Algorithm is a greedy algorithm that finds the Minimum Spanning Tree (MST) for a
weighted, undirected graph. It starts with a single vertex and grows the MST by adding the
smallest edge that connects a vertex in the MST to a vertex outside of it.

Algorithm:
   1. Start with any vertex as the initial MST.
   2. At each step, add the smallest edge that connects the tree to a new vertex.
   3. Repeat until all vertices are included in the MST.
*/

use std::cmp::Reverse;
use std::collections::BinaryHeap;

fn prim(v: usize, adj: &Vec<Vec<(usize, u64)>>) {
    let mut in_mst = vec![false; v];
    let mut key = vec![u64::MAX; v];
    let mut parent = vec![usize::MAX; v];
    let mut heap: BinaryHeap<Reverse<(u64, usize)>> = BinaryHeap::new();

    key[0] = 0;
    heap.push(Reverse((0, 0)));

    while let Some(Reverse((_, u))) = heap.pop() {
        if in_mst[u] {
            continue;
        }
        in_mst[u] = true;

        for &(nv, weight) in &adj[u] {
            if !in_mst[nv] && weight < key[nv] {
                key[nv] = weight;
                parent[nv] = u;
                heap.push(Reverse((weight, nv)));
            }
        }
    }

    println!("Edges in MST:");
    for i in 1..v {
        if parent[i] != usize::MAX {
            println!("{} - {}: {}", parent[i], i, key[i]);
        }
    }
}

fn main() {
    let v = 5;
    let mut adj: Vec<Vec<(usize, u64)>> = vec![vec![]; v];
    adj[0].extend([(1, 2), (3, 6)]);
    adj[1].extend([(0, 2), (2, 3), (3, 8), (4, 5)]);
    adj[2].extend([(1, 3), (4, 7)]);
    adj[3].extend([(0, 6), (1, 8), (4, 9)]);
    adj[4].extend([(1, 5), (2, 7), (3, 9)]);

    prim(v, &adj);
}

/*
 * Time Complexity:
 *   • Time Complexity: O(E log V), due to priority queue operations.
 *   • Space Complexity: O(V + E)
 */
