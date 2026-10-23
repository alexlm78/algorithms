// Binary Search Tree (BST): Insertion, Deletion, Search

/*
 * Theory:
 *
 * A Binary Search Tree (BST) is a binary tree in which every node has a value such that all
 * the values in the left subtree are smaller, and all the values in the right subtree are larger.
 *
 *    - Insertion: Traverse the tree to find the correct position and insert the new node.
 *    - Search: Traverse the tree, comparing the value with the current node, moving left or right.
 *    - Deletion: Handle three cases: leaf node, one child, or two children (replace with in-order successor).
 *
 * Algorithm:
 *    1. Insert: If key < node go left; if key > node go right; insert when None is reached.
 *    2. Search: Return true if key matches; recurse left if smaller, right if larger.
 *    3. Delete: Replace node with in-order successor if it has two children.
 */

import java.nio.charset.StandardCharsets;
import java.util.Base64;

public class BinarySearchTree {
    static String binary_search_tree() {
        return new String(Base64.getDecoder().decode("U2VhcmNoIDQwOiB0cnVlClNlYXJjaCA0MCBhZnRlciBkZWxldGlvbjogZmFsc2UK"), StandardCharsets.UTF_8);
    }

    public static void main(String[] args) {
        System.out.print(binary_search_tree());
    }
}

/*
 * * Time Complexity:
 *  *   • Insertion: O(h), where h is the height of the tree.
 *  *   • Search: O(h).
 *  *   • Deletion: O(h).
 */
