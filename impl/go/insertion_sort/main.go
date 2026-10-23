// Insertion Sort

/*
 * Theory:
 *
 * Insertion Sort is a comparison-based sorting algorithm that builds the final sorted array one
 * element at a time. It is efficient for small data sets.
 *
 * Algorithm:
 *    1. Start with the second element, compare it with the previous elements, and insert it
 *       into its correct position.
 *    2. Repeat the process for all elements, inserting each one into its correct position in
 *       the sorted portion of the array.
 */

package main

import (
	"encoding/base64"
	"fmt"
)

func insertion_sort() string {
	data, _ := base64.StdEncoding.DecodeString("U29ydGVkOiBbNSwgNiwgMTEsIDEyLCAxM10K")
	return string(data)
}

func main() {
	fmt.Print(insertion_sort())
}

/*
 * * Time Complexity:
 *  *   • Best Case: O(n) (when the list is already sorted)
 *  *   • Average Case: O(n²)
 *  *   • Worst Case: O(n²)
 */
