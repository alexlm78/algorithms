// Kruskal's Algorithm (Minimum Spanning Tree)

/*
Theory:

Kruskal's Algorithm is a greedy algorithm used to find the Minimum Spanning Tree (MST)
for a connected, undirected graph. It works by selecting edges in increasing order of their
weight and adding them to the MST if they do not form a cycle.

Algorithm:
   1. Sort all the edges in non-decreasing order of their weight.
   2. Pick the smallest edge and check if it forms a cycle using Union-Find.
   3. If no cycle, include it in the MST.
   4. Repeat until the MST contains exactly (V-1) edges.
*/

struct DisjointSet {
    parent: Vec<usize>,
    rank: Vec<usize>,
}

impl DisjointSet {
    fn new(n: usize) -> Self {
        DisjointSet {
            parent: (0..n).collect(),
            rank: vec![0; n],
        }
    }
    fn find(&mut self, u: usize) -> usize {
        if self.parent[u] != u {
            self.parent[u] = self.find(self.parent[u]);
        }
        self.parent[u]
    }
    fn union(&mut self, u: usize, v: usize) {
        let ru = self.find(u);
        let rv = self.find(v);
        if ru != rv {
            if self.rank[ru] < self.rank[rv] {
                self.parent[ru] = rv;
            } else if self.rank[ru] > self.rank[rv] {
                self.parent[rv] = ru;
            } else {
                self.parent[rv] = ru;
                self.rank[ru] += 1;
            }
        }
    }
}

fn kruskal(v: usize, mut edges: Vec<(usize, usize, u64)>) {
    edges.sort_by_key(|e| e.2);
    let mut ds = DisjointSet::new(v);
    let mut mst: Vec<(usize, usize, u64)> = Vec::new();

    for (u, nv, w) in edges {
        if ds.find(u) != ds.find(nv) {
            ds.union(u, nv);
            mst.push((u, nv, w));
        }
    }

    println!("Edges in MST:");
    for (u, v, w) in mst {
        println!("{} - {}: {}", u, v, w);
    }
}

fn main() {
    let edges = vec![(0, 1, 10), (0, 2, 6), (0, 3, 5), (1, 3, 15), (2, 3, 4)];
    kruskal(4, edges);
}

/*
 * Time Complexity:
 *   • Time Complexity: O(E log E), due to sorting and union-find operations.
 *   • Space Complexity: O(V + E)
 */
