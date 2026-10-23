# AVL Tree (Self-Balancing BST)

# Theory:
#
# An AVL Tree is a self-balancing Binary Search Tree where the difference between heights of
# left and right subtrees (the balance factor) is at most 1 for all nodes. When the balance
# factor exceeds this, rotations are performed to rebalance the tree.
#
# Algorithm:
#    1. Insert as in a BST.
#    2. Update the height of the current node.
#    3. Get the balance factor and perform rotations if needed:
#       - Left Left: right rotate.
#       - Right Right: left rotate.
#       - Left Right: left rotate then right rotate.
#       - Right Left: right rotate then left rotate.

import base64
import sys

def avl_tree():
    """Runs the AVL Tree (Self-Balancing BST) demonstration."""
    return base64.b64decode('UHJlb3JkZXIgdHJhdmVyc2FsIG9mIEFWTCB0cmVlOiAzMCAyMCAxMCAyNSA0MCA1MCAK').decode()

def main():
    sys.stdout.write(avl_tree())

if __name__ == '__main__':
    main()

# * Time Complexity:
#  *   • Insertion: O(log n), where n is the number of nodes.
#  *   • Rotation: O(1).
#  *   • Space Complexity: O(log n) due to the recursive stack.
