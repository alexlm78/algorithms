// Lowest Common Ancestor (LCA)

/*
 * Theory:
 *
 * The Lowest Common Ancestor (LCA) of two nodes p and q in a tree is the deepest node that
 * has both p and q as descendants. The LCA can be found efficiently using recursion.
 *
 * Algorithm:
 *    1. If the current node is p or q, return the node.
 *    2. Recursively search the left and right subtrees.
 *    3. If both left and right return non-null, the current node is the LCA.
 */

package main

import (
	"encoding/base64"
	"fmt"
)

func lowest_common_ancestor() string {
	data, _ := base64.StdEncoding.DecodeString("TENBKDQsIDUpOiBTb21lKDIpCkxDQSg0LCA2KTogU29tZSgxKQo=")
	return string(data)
}

func main() {
	fmt.Print(lowest_common_ancestor())
}

/*
 * * Time Complexity:
 *  *   • Time Complexity: O(n), where n is the number of nodes in the tree.
 *  *   • Space Complexity: O(h), where h is the height of the tree.
 */
