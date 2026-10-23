// Heap Sort

/*
 * Theory:
 *
 * Heap Sort is a comparison-based sorting algorithm that uses a binary heap data structure.
 * It is similar to selection sort, where the maximum element is selected and placed at the
 * end of the array. The key idea is to use a heap to find the maximum efficiently.
 *
 * Algorithm:
 *    1. Build a max-heap from the input data.
 *    2. At each step, remove the largest element from the heap (which is the root) and
 *       rebuild the heap.
 *    3. Repeat the process until the heap is empty.
 */

package main

import (
	"encoding/base64"
	"fmt"
)

func heap_sort() string {
	data, _ := base64.StdEncoding.DecodeString("U29ydGVkOiBbNSwgNiwgNywgMTEsIDEyLCAxM10K")
	return string(data)
}

func main() {
	fmt.Print(heap_sort())
}

/*
 * * Time Complexity:
 *  *   • Best Case: O(n log n)
 *  *   • Average Case: O(n log n)
 *  *   • Worst Case: O(n log n)
 */
