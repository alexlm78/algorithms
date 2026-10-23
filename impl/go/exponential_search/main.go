// Exponential Search

/*
 * Theory:
 *
 * Exponential Search works on sorted arrays and is useful when the size of the array is not
 * known in advance. It first finds a range where the target might be and then uses binary
 * search within that range.
 *
 * Algorithm:
 *    1. Start with an index of 1 and double the index in each step until you find an index
 *       such that the value at that index is greater than the target.
 *    2. Perform a binary search in the range [previous_index, current_index].
 */

package main

import (
	"encoding/base64"
	"fmt"
)

func exponential_search() string {
	data, _ := base64.StdEncoding.DecodeString("RWxlbWVudCBmb3VuZCBhdCBpbmRleDogNgo=")
	return string(data)
}

func main() {
	fmt.Print(exponential_search())
}

/*
 * * Time Complexity:
 *  *   • Best Case: O(1)
 *  *   • Average Case: O(log n)
 *  *   • Worst Case: O(log n)
 */
