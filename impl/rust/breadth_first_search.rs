// Breadth First Search (BFS)

/*
Theory:

BFS is a graph traversal algorithm that explores all neighbors at the present depth level
before moving on to nodes at the next depth level. It uses a queue to explore nodes in a
level-wise manner.

Algorithm:
   1. Start at the selected node, enqueue it, and mark it as visited.
   2. Dequeue a node and explore all its unvisited neighbors, enqueue them.
   3. Repeat the process until the queue is empty.
*/

use std::collections::VecDeque;

fn bfs(start: usize, adj: &Vec<Vec<usize>>) {
    let v = adj.len();
    let mut visited = vec![false; v];
    let mut queue = VecDeque::new();

    visited[start] = true;
    queue.push_back(start);

    while let Some(node) = queue.pop_front() {
        print!("{} ", node);
        for &neighbor in &adj[node] {
            if !visited[neighbor] {
                visited[neighbor] = true;
                queue.push_back(neighbor);
            }
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

    println!("BFS traversal:");
    bfs(0, &adj);
    println!();
}

/*
 * Time Complexity:
 *   • Time Complexity: O(V + E), where V is the number of vertices and E is the number of edges.
 *   • Space Complexity: O(V)
 */
