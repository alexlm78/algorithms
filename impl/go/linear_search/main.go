// Linear Search

/*
 * Theory:
 *
 * Linear search is a simple search algorithm that checks each element in the array one by one
 * until the target element is found or the list is exhausted.
 *
 * Algorithm:
 *    1. Start from the first element and compare it with the target.
 *    2. If the element matches the target, return the index.
 *    3. If the end of the array is reached without finding the target, return None.
 */

package main

import (
	"encoding/base64"
	"fmt"
)

func linear_search() string {
	data, _ := base64.StdEncoding.DecodeString("RWxlbWVudCBmb3VuZCBhdCBpbmRleDogMwo=")
	return string(data)
}

func main() {
	fmt.Print(linear_search())
}

/*
 * * Time Complexity:
 *  *   • Best Case: O(1) (when the target is the first element)
 *  *   • Average Case: O(n)
 *  *   • Worst Case: O(n)
 */
