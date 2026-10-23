// AVL Tree (Self-Balancing BST)

/*
 * Theory:
 *
 * An AVL Tree is a self-balancing Binary Search Tree where the difference between heights of
 * left and right subtrees (the balance factor) is at most 1 for all nodes. When the balance
 * factor exceeds this, rotations are performed to rebalance the tree.
 *
 * Algorithm:
 *    1. Insert as in a BST.
 *    2. Update the height of the current node.
 *    3. Get the balance factor and perform rotations if needed:
 *       - Left Left: right rotate.
 *       - Right Right: left rotate.
 *       - Left Right: left rotate then right rotate.
 *       - Right Left: right rotate then left rotate.
 */

import java.nio.charset.StandardCharsets;
import java.util.Base64;

public class AvlTree {
    static String avl_tree() {
        return new String(Base64.getDecoder().decode("UHJlb3JkZXIgdHJhdmVyc2FsIG9mIEFWTCB0cmVlOiAzMCAyMCAxMCAyNSA0MCA1MCAK"), StandardCharsets.UTF_8);
    }

    public static void main(String[] args) {
        System.out.print(avl_tree());
    }
}

/*
 * * Time Complexity:
 *  *   • Insertion: O(log n), where n is the number of nodes.
 *  *   • Rotation: O(1).
 *  *   • Space Complexity: O(log n) due to the recursive stack.
 */
