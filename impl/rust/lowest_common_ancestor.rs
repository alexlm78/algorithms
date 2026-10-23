// Lowest Common Ancestor (LCA)

/*
Theory:

The Lowest Common Ancestor (LCA) of two nodes p and q in a tree is the deepest node that
has both p and q as descendants. The LCA can be found efficiently using recursion.

Algorithm:
   1. If the current node is p or q, return the node.
   2. Recursively search the left and right subtrees.
   3. If both left and right return non-null, the current node is the LCA.
*/

#[derive(Debug)]
struct Node {
    data: i32,
    left: Option<Box<Node>>,
    right: Option<Box<Node>>,
}

impl Node {
    fn new(data: i32) -> Box<Node> {
        Box::new(Node {
            data,
            left: None,
            right: None,
        })
    }
}

fn find_lca(node: &Option<Box<Node>>, n1: i32, n2: i32) -> Option<i32> {
    match node {
        None => None,
        Some(n) => {
            if n.data == n1 || n.data == n2 {
                return Some(n.data);
            }
            let left = find_lca(&n.left, n1, n2);
            let right = find_lca(&n.right, n1, n2);
            match (left, right) {
                (Some(_), Some(_)) => Some(n.data),
                (Some(l), None) => Some(l),
                (None, Some(r)) => Some(r),
                (None, None) => None,
            }
        }
    }
}

fn main() {
    let mut root = Node::new(1);
    let mut left = Node::new(2);
    left.left = Some(Node::new(4));
    left.right = Some(Node::new(5));
    root.left = Some(left);
    let mut right = Node::new(3);
    right.left = Some(Node::new(6));
    right.right = Some(Node::new(7));
    root.right = Some(right);

    let tree = Some(root);
    println!("LCA(4, 5): {:?}", find_lca(&tree, 4, 5));
    println!("LCA(4, 6): {:?}", find_lca(&tree, 4, 6));
}

/*
 * Time Complexity:
 *   • Time Complexity: O(n), where n is the number of nodes in the tree.
 *   • Space Complexity: O(h), where h is the height of the tree.
 */
