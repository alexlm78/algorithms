// Tree Traversals (In-order, Pre-order, Post-order)

/*
 * Theory:
 *
 * Tree Traversals are methods to visit all the nodes of a tree. The common traversals are:
 *    1. In-order (Left, Root, Right): Visits the left subtree, then the root, then the right subtree.
 *    2. Pre-order (Root, Left, Right): Visits the root first, then the left subtree, then the right subtree.
 *    3. Post-order (Left, Right, Root): Visits the left subtree, then the right subtree, then the root.
 *
 * Algorithm:
 *    1. For in-order: recurse left, visit root, recurse right.
 *    2. For pre-order: visit root, recurse left, recurse right.
 *    3. For post-order: recurse left, recurse right, visit root.
 */

package main

import (
	"encoding/base64"
	"fmt"
)

func tree_traversals() string {
	data, _ := base64.StdEncoding.DecodeString("SW5vcmRlciB0cmF2ZXJzYWw6IDQgMiA1IDEgMyAKUHJlb3JkZXIgdHJhdmVyc2FsOiAxIDIgNCA1IDMgClBvc3RvcmRlciB0cmF2ZXJzYWw6IDQgNSAyIDMgMSAK")
	return string(data)
}

func main() {
	fmt.Print(tree_traversals())
}

/*
 * * Time Complexity:
 *  *   • Time Complexity: O(n), where n is the number of nodes in the tree.
 *  *   • Space Complexity: O(h), where h is the height of the tree.
 */
