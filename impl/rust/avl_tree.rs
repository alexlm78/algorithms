// AVL Tree (Self-Balancing BST)

/*
Theory:

An AVL Tree is a self-balancing Binary Search Tree where the difference between heights of
left and right subtrees (the balance factor) is at most 1 for all nodes. When the balance
factor exceeds this, rotations are performed to rebalance the tree.

Algorithm:
   1. Insert as in a BST.
   2. Update the height of the current node.
   3. Get the balance factor and perform rotations if needed:
      - Left Left: right rotate.
      - Right Right: left rotate.
      - Left Right: left rotate then right rotate.
      - Right Left: right rotate then left rotate.
*/

type AVLTree = Option<Box<AVLNode>>;

struct AVLNode {
    key: i32,
    height: i32,
    left: AVLTree,
    right: AVLTree,
}

impl AVLNode {
    fn new(key: i32) -> Box<AVLNode> {
        Box::new(AVLNode {
            key,
            height: 1,
            left: None,
            right: None,
        })
    }
}

fn height(node: &AVLTree) -> i32 {
    node.as_ref().map_or(0, |n| n.height)
}

fn update_height(node: &mut Box<AVLNode>) {
    node.height = 1 + height(&node.left).max(height(&node.right));
}

fn balance_factor(node: &Box<AVLNode>) -> i32 {
    height(&node.left) - height(&node.right)
}

fn rotate_right(mut y: Box<AVLNode>) -> Box<AVLNode> {
    let mut x = y.left.take().unwrap();
    y.left = x.right.take();
    update_height(&mut y);
    x.right = Some(y);
    update_height(&mut x);
    x
}

fn rotate_left(mut x: Box<AVLNode>) -> Box<AVLNode> {
    let mut y = x.right.take().unwrap();
    x.right = y.left.take();
    update_height(&mut x);
    y.left = Some(x);
    update_height(&mut y);
    y
}

fn insert(root: AVLTree, key: i32) -> AVLTree {
    let mut node = match root {
        None => return Some(AVLNode::new(key)),
        Some(mut n) => {
            if key < n.key {
                n.left = insert(n.left, key);
            } else if key > n.key {
                n.right = insert(n.right, key);
            } else {
                return Some(n);
            }
            n
        }
    };
    update_height(&mut node);
    let bf = balance_factor(&node);

    // Left Left
    if bf > 1 && key < node.left.as_ref().unwrap().key {
        return Some(rotate_right(node));
    }
    // Right Right
    if bf < -1 && key > node.right.as_ref().unwrap().key {
        return Some(rotate_left(node));
    }
    // Left Right
    if bf > 1 && key > node.left.as_ref().unwrap().key {
        node.left = Some(rotate_left(node.left.take().unwrap()));
        return Some(rotate_right(node));
    }
    // Right Left
    if bf < -1 && key < node.right.as_ref().unwrap().key {
        node.right = Some(rotate_right(node.right.take().unwrap()));
        return Some(rotate_left(node));
    }
    Some(node)
}

fn preorder(node: &AVLTree) {
    if let Some(n) = node {
        print!("{} ", n.key);
        preorder(&n.left);
        preorder(&n.right);
    }
}

fn main() {
    let mut root: AVLTree = None;
    for key in [10, 20, 30, 40, 50, 25] {
        root = insert(root, key);
    }
    print!("Preorder traversal of AVL tree: ");
    preorder(&root);
    println!();
}

/*
 * Time Complexity:
 *   • Insertion: O(log n), where n is the number of nodes.
 *   • Rotation: O(1).
 *   • Space Complexity: O(log n) due to the recursive stack.
 */
