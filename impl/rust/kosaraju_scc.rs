// Kosaraju's Algorithm (Strongly Connected Components)

/*
Theory:

Kosaraju's Algorithm finds Strongly Connected Components (SCCs) in a directed graph using
two DFS passes. The first DFS sorts vertices by finishing time; the second DFS explores
SCCs on the reversed graph.

Algorithm:
   1. Perform DFS on the original graph, noting the finishing times of vertices.
   2. Reverse the graph.
   3. Perform DFS on the reversed graph in decreasing finishing-time order.
      Each DFS tree in this pass is one SCC.
*/

fn dfs_finish(v: usize, visited: &mut Vec<bool>, adj: &Vec<Vec<usize>>, stack: &mut Vec<usize>) {
    visited[v] = true;
    for &u in &adj[v] {
        if !visited[u] {
            dfs_finish(u, visited, adj, stack);
        }
    }
    stack.push(v);
}

fn dfs_reverse(v: usize, visited: &mut Vec<bool>, rev_adj: &Vec<Vec<usize>>) {
    visited[v] = true;
    print!("{} ", v);
    for &u in &rev_adj[v] {
        if !visited[u] {
            dfs_reverse(u, visited, rev_adj);
        }
    }
}

fn kosaraju(n: usize, adj: &Vec<Vec<usize>>) {
    let mut visited = vec![false; n];
    let mut stack = Vec::new();

    for i in 0..n {
        if !visited[i] {
            dfs_finish(i, &mut visited, adj, &mut stack);
        }
    }

    // Build reversed graph
    let mut rev_adj: Vec<Vec<usize>> = vec![vec![]; n];
    for u in 0..n {
        for &v in &adj[u] {
            rev_adj[v].push(u);
        }
    }

    visited.fill(false);
    println!("Strongly Connected Components:");
    while let Some(v) = stack.pop() {
        if !visited[v] {
            dfs_reverse(v, &mut visited, &rev_adj);
            println!();
        }
    }
}

fn main() {
    let n = 5;
    let mut adj: Vec<Vec<usize>> = vec![vec![]; n];
    adj[0].extend([2, 3]);
    adj[2].push(1);
    adj[1].push(0);
    adj[3].push(4);

    kosaraju(n, &adj);
}

/*
 * Time Complexity:
 *   • Time Complexity: O(V + E), where V is the number of vertices and E is the number of edges.
 *   • Space Complexity: O(V) for visited and stack.
 */
