// Depth First Search (DFS)

/*
Theory:

DFS is a graph traversal algorithm that starts at a selected node and explores as far as
possible along each branch before backtracking. It uses a stack (either explicitly or via
recursion) to keep track of the visited nodes.

Algorithm:
   1. Start at a selected node, mark it as visited.
   2. Recursively explore adjacent unvisited nodes.
   3. Once all adjacent nodes are visited, backtrack.
*/

fn dfs(node: usize, visited: &mut Vec<bool>, adj: &Vec<Vec<usize>>) {
    visited[node] = true;
    print!("{} ", node);
    for &neighbor in &adj[node] {
        if !visited[neighbor] {
            dfs(neighbor, visited, adj);
        }
    }
}

fn main() {
    let v = 6;
    let mut adj: Vec<Vec<usize>> = vec![vec![]; v];
    adj[0].extend([1, 2]);
    adj[1].extend([0, 3]);
    adj[2].extend([0, 3]);
    adj[3].extend([1, 2, 4]);
    adj[4].extend([3, 5]);
    adj[5].push(4);

    let mut visited = vec![false; v];
    println!("DFS traversal:");
    dfs(0, &mut visited, &adj);
    println!();
}

/*
 * Time Complexity:
 *   • Time Complexity: O(V + E), where V is the number of vertices and E is the number of edges.
 *   • Space Complexity: O(V)
 */
