// A* Search Algorithm

/*
Theory:

The A* Search Algorithm is a popular pathfinding and graph traversal algorithm, widely used
in AI, especially in games. It combines the advantages of Dijkstra's Algorithm and Greedy
Best-First Search by using a heuristic to guide its search.

Algorithm:
   1. Open list: Nodes to be evaluated.
   2. Closed list: Nodes already evaluated.
   3. For each node, calculate f(n) = g(n) + h(n):
      - g(n): The cost to reach the node.
      - h(n): Heuristic estimate of the cost to reach the goal (Manhattan distance).
   4. At each step, choose the node from the open list with the lowest f(n) value.
   5. Repeat until the goal is reached.
*/

use std::cmp::Reverse;
use std::collections::{BinaryHeap, HashSet};

#[derive(Clone, Debug, PartialEq, Eq, Hash)]
struct Node {
    x: usize,
    y: usize,
}

fn heuristic(a: &Node, b: &Node) -> usize {
    let dx = if a.x > b.x { a.x - b.x } else { b.x - a.x };
    let dy = if a.y > b.y { a.y - b.y } else { b.y - a.y };
    dx + dy
}

fn a_star(size: usize, start: (usize, usize), goal: (usize, usize)) -> Option<Vec<(usize, usize)>> {
    let goal_node = Node {
        x: goal.0,
        y: goal.1,
    };
    // (f_cost, g_cost, x, y, path)
    let mut heap: BinaryHeap<Reverse<(usize, usize, usize, usize, Vec<(usize, usize)>)>> =
        BinaryHeap::new();
    let mut closed: HashSet<(usize, usize)> = HashSet::new();

    let start_node = Node {
        x: start.0,
        y: start.1,
    };
    let h = heuristic(&start_node, &goal_node);
    heap.push(Reverse((h, 0, start.0, start.1, vec![start])));

    let directions = [(0i32, 1i32), (1, 0), (0, -1), (-1, 0)];

    while let Some(Reverse((_, g, x, y, path))) = heap.pop() {
        if (x, y) == goal {
            return Some(path);
        }
        if !closed.insert((x, y)) {
            continue;
        }

        for (dx, dy) in &directions {
            let nx = x as i32 + dx;
            let ny = y as i32 + dy;
            if nx >= 0 && nx < size as i32 && ny >= 0 && ny < size as i32 {
                let (nx, ny) = (nx as usize, ny as usize);
                if !closed.contains(&(nx, ny)) {
                    let new_g = g + 1;
                    let h = heuristic(&Node { x: nx, y: ny }, &goal_node);
                    let mut new_path = path.clone();
                    new_path.push((nx, ny));
                    heap.push(Reverse((new_g + h, new_g, nx, ny, new_path)));
                }
            }
        }
    }
    None
}

fn main() {
    let size = 5;
    match a_star(size, (0, 0), (4, 4)) {
        Some(path) => {
            for (x, y) in path {
                println!("Path: ({}, {})", x, y);
            }
        }
        None => println!("No path found"),
    }
}

/*
 * Time Complexity:
 *   • Time Complexity: O(b^d), where b is the branching factor and d is the depth of the solution.
 *   • Space Complexity: O(b^d) for the open and closed lists.
 */
