// Cycle Detection (Directed and Undirected Graphs)

/*
Theory:

Cycle detection determines if a graph contains any cycles. In undirected graphs, cycles can
be detected using DFS. In directed graphs, DFS is used with a recursion stack.

Algorithm for Undirected Graph (DFS):
   1. Use DFS to explore each node.
   2. If a node is visited and is not the parent, a cycle is found.

Algorithm for Directed Graph (DFS):
   1. Use DFS with a recursion stack.
   2. If a node is found in the recursion stack, a cycle exists.
*/

// --- Undirected ---
fn is_cyclic_undirected_util(
    v: usize,
    parent: Option<usize>,
    visited: &mut Vec<bool>,
    adj: &Vec<Vec<usize>>,
) -> bool {
    visited[v] = true;
    for &u in &adj[v] {
        if !visited[u] {
            if is_cyclic_undirected_util(u, Some(v), visited, adj) {
                return true;
            }
        } else if Some(u) != parent {
            return true;
        }
    }
    false
}

fn is_cyclic_undirected(n: usize, adj: &Vec<Vec<usize>>) -> bool {
    let mut visited = vec![false; n];
    for i in 0..n {
        if !visited[i] && is_cyclic_undirected_util(i, None, &mut visited, adj) {
            return true;
        }
    }
    false
}

// --- Directed ---
fn is_cyclic_directed_util(
    v: usize,
    visited: &mut Vec<bool>,
    rec_stack: &mut Vec<bool>,
    adj: &Vec<Vec<usize>>,
) -> bool {
    visited[v] = true;
    rec_stack[v] = true;
    for &u in &adj[v] {
        if !visited[u] {
            if is_cyclic_directed_util(u, visited, rec_stack, adj) {
                return true;
            }
        } else if rec_stack[u] {
            return true;
        }
    }
    rec_stack[v] = false;
    false
}

fn is_cyclic_directed(n: usize, adj: &Vec<Vec<usize>>) -> bool {
    let mut visited = vec![false; n];
    let mut rec_stack = vec![false; n];
    for i in 0..n {
        if !visited[i] && is_cyclic_directed_util(i, &mut visited, &mut rec_stack, adj) {
            return true;
        }
    }
    false
}

fn main() {
    // Undirected graph with cycle
    let n = 5;
    let mut undir_adj: Vec<Vec<usize>> = vec![vec![]; n];
    undir_adj[0].extend([1, 2]);
    undir_adj[1].extend([0, 2]);
    undir_adj[2].extend([0, 1]);
    undir_adj[3].push(4);
    undir_adj[4].push(3);
    println!(
        "Undirected graph contains cycle: {}",
        is_cyclic_undirected(n, &undir_adj)
    );

    // Directed graph with cycle
    let mut dir_adj: Vec<Vec<usize>> = vec![vec![]; n];
    dir_adj[0].push(1);
    dir_adj[1].push(2);
    dir_adj[2].push(0);
    dir_adj[3].push(4);
    println!(
        "Directed graph contains cycle: {}",
        is_cyclic_directed(n, &dir_adj)
    );
}

/*
 * Time Complexity:
 *   • Time Complexity: O(V + E), where V is the number of vertices and E is the number of edges.
 *   • Space Complexity: O(V) for visited array.
 */
