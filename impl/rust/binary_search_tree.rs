// Binary Search Tree (BST): Insertion, Deletion, Search

/*
Theory:

A Binary Search Tree (BST) is a binary tree in which every node has a value such that all
the values in the left subtree are smaller, and all the values in the right subtree are larger.

   - Insertion: Traverse the tree to find the correct position and insert the new node.
   - Search: Traverse the tree, comparing the value with the current node, moving left or right.
   - Deletion: Handle three cases: leaf node, one child, or two children (replace with in-order successor).

Algorithm:
   1. Insert: If key < node go left; if key > node go right; insert when None is reached.
   2. Search: Return true if key matches; recurse left if smaller, right if larger.
   3. Delete: Replace node with in-order successor if it has two children.
*/

type Tree = Option<Box<Node>>;

struct Node {
    key: i32,
    left: Tree,
    right: Tree,
}

impl Node {
    fn new(key: i32) -> Box<Node> {
        Box::new(Node {
            key,
            left: None,
            right: None,
        })
    }
}

fn insert(root: Tree, key: i32) -> Tree {
    match root {
        None => Some(Node::new(key)),
        Some(mut node) => {
            if key < node.key {
                node.left = insert(node.left, key);
            } else if key > node.key {
                node.right = insert(node.right, key);
            }
            Some(node)
        }
    }
}

fn search(root: &Tree, key: i32) -> bool {
    match root {
        None => false,
        Some(node) => {
            if node.key == key {
                true
            } else if key < node.key {
                search(&node.left, key)
            } else {
                search(&node.right, key)
            }
        }
    }
}

fn min_value(node: &Box<Node>) -> i32 {
    match &node.left {
        None => node.key,
        Some(left) => min_value(left),
    }
}

fn delete(root: Tree, key: i32) -> Tree {
    match root {
        None => None,
        Some(mut node) => {
            if key < node.key {
                node.left = delete(node.left, key);
                Some(node)
            } else if key > node.key {
                node.right = delete(node.right, key);
                Some(node)
            } else {
                match (node.left.take(), node.right.take()) {
                    (None, right) => right,
                    (left, None) => left,
                    (left, Some(right)) => {
                        node.key = min_value(&right);
                        node.left = left;
                        node.right = delete(Some(right), node.key);
                        Some(node)
                    }
                }
            }
        }
    }
}

fn main() {
    let mut root: Tree = None;
    for key in [50, 30, 20, 40, 70, 60, 80] {
        root = insert(root, key);
    }
    println!("Search 40: {}", search(&root, 40));
    root = delete(root, 40);
    println!("Search 40 after deletion: {}", search(&root, 40));
}

/*
 * Time Complexity:
 *   • Insertion: O(h), where h is the height of the tree.
 *   • Search: O(h).
 *   • Deletion: O(h).
 */
