// Tree Traversals (In-order, Pre-order, Post-order)

/*
Theory:

Tree Traversals are methods to visit all the nodes of a tree. The common traversals are:
   1. In-order (Left, Root, Right): Visits the left subtree, then the root, then the right subtree.
   2. Pre-order (Root, Left, Right): Visits the root first, then the left subtree, then the right subtree.
   3. Post-order (Left, Right, Root): Visits the left subtree, then the right subtree, then the root.

Algorithm:
   1. For in-order: recurse left, visit root, recurse right.
   2. For pre-order: visit root, recurse left, recurse right.
   3. For post-order: recurse left, recurse right, visit root.
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

fn inorder(node: &Option<Box<Node>>) {
    if let Some(n) = node {
        inorder(&n.left);
        print!("{} ", n.data);
        inorder(&n.right);
    }
}

fn preorder(node: &Option<Box<Node>>) {
    if let Some(n) = node {
        print!("{} ", n.data);
        preorder(&n.left);
        preorder(&n.right);
    }
}

fn postorder(node: &Option<Box<Node>>) {
    if let Some(n) = node {
        postorder(&n.left);
        postorder(&n.right);
        print!("{} ", n.data);
    }
}

fn main() {
    let mut root = Node::new(1);
    let mut left = Node::new(2);
    left.left = Some(Node::new(4));
    left.right = Some(Node::new(5));
    root.left = Some(left);
    root.right = Some(Node::new(3));

    let tree = Some(root);

    print!("Inorder traversal: ");
    inorder(&tree);
    println!();

    print!("Preorder traversal: ");
    preorder(&tree);
    println!();

    print!("Postorder traversal: ");
    postorder(&tree);
    println!();
}

/*
 * Time Complexity:
 *   • Time Complexity: O(n), where n is the number of nodes in the tree.
 *   • Space Complexity: O(h), where h is the height of the tree.
 */
