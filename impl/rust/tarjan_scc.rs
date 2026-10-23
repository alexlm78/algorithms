// Tarjan's Algorithm (Strongly Connected Components)

/*
Theory:

Tarjan's Algorithm is used to find the Strongly Connected Components (SCCs) in a directed
graph. It uses depth-first search (DFS) and a stack to track the nodes. The key idea is to
use a low-link value to determine if a node is part of a strongly connected component.

Algorithm:
   1. Perform a DFS traversal, keeping track of discovery times of nodes.
   2. Use a low-link value to track the smallest discovery time reachable from the current node.
   3. If a node's discovery time matches its low-link value, it is the root of an SCC.
   4. Continue this process until all nodes are processed.
*/

struct TarjanSCC {
    disc: Vec<i32>,
    low: Vec<i32>,
    on_stack: Vec<bool>,
    stack: Vec<usize>,
    timer: i32,
}

impl TarjanSCC {
    fn new(v: usize) -> Self {
        TarjanSCC {
            disc: vec![-1; v],
            low: vec![-1; v],
            on_stack: vec![false; v],
            stack: Vec::new(),
            timer: 0,
        }
    }

    fn scc_util(&mut self, u: usize, adj: &Vec<Vec<usize>>) {
        self.disc[u] = self.timer;
        self.low[u] = self.timer;
        self.timer += 1;
        self.stack.push(u);
        self.on_stack[u] = true;

        for &v in &adj[u] {
            if self.disc[v] == -1 {
                self.scc_util(v, adj);
                self.low[u] = self.low[u].min(self.low[v]);
            } else if self.on_stack[v] {
                self.low[u] = self.low[u].min(self.disc[v]);
            }
        }

        if self.low[u] == self.disc[u] {
            print!("SCC: ");
            while let Some(w) = self.stack.pop() {
                print!("{} ", w);
                self.on_stack[w] = false;
                if w == u {
                    break;
                }
            }
            println!();
        }
    }

    fn find_sccs(&mut self, adj: &Vec<Vec<usize>>) {
        let v = adj.len();
        for i in 0..v {
            if self.disc[i] == -1 {
                self.scc_util(i, adj);
            }
        }
    }
}

fn main() {
    let v = 5;
    let mut adj: Vec<Vec<usize>> = vec![vec![]; v];
    adj[0].extend([2, 3]);
    adj[2].push(1);
    adj[1].push(0);
    adj[3].push(4);

    let mut tarjan = TarjanSCC::new(v);
    println!("Strongly Connected Components:");
    tarjan.find_sccs(&adj);
}

/*
 * Time Complexity:
 *   • Time Complexity: O(V + E), where V is the number of vertices and E is the number of edges.
 *   • Space Complexity: O(V) for storing discovery times and low-link values.
 */
