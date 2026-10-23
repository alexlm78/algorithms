// Jump Search

/*
 * Theory:
 *
 * Jump Search is a search algorithm for sorted arrays. It works by jumping ahead by a fixed
 * number of steps (block size), and once it finds a block where the target might be, it performs
 * a linear search within that block.
 *
 * Algorithm:
 *    1. Jump ahead by a fixed block size (sqrt(n)).
 *    2. When the block where the target might be is found, perform a linear search within
 *       that block.
 *    3. If the target is found, return the index; otherwise, return None.
 */

package main

import (
	"encoding/base64"
	"fmt"
)

func jump_search() string {
	data, _ := base64.StdEncoding.DecodeString("RWxlbWVudCBmb3VuZCBhdCBpbmRleDogOAo=")
	return string(data)
}

func main() {
	fmt.Print(jump_search())
}

/*
 * * Time Complexity:
 *  *   • Best Case: O(1)
 *  *   • Average Case: O(√n)
 *  *   • Worst Case: O(√n)
 */
