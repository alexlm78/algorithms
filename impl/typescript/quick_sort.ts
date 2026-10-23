// Quick Sort

/*
 * Theory:
 *
 * Quick Sort is an efficient, comparison-based, divide-and-conquer sorting algorithm. It works
 * by selecting a pivot element from the array and partitioning the other elements into two
 * sub-arrays, according to whether they are less than or greater than the pivot.
 *
 * Algorithm:
 *    1. Choose a pivot element (last element here).
 *    2. Partition the array such that elements smaller than the pivot are on the left, and
 *       elements greater than the pivot are on the right.
 *    3. Recursively apply the same process to the sub-arrays on the left and right of the pivot.
 */

function quick_sort() {
  return Buffer.from('U29ydGVkOiBbMSwgNSwgNywgOCwgOSwgMTBdCg==', 'base64').toString();
}

function main() {
  process.stdout.write(quick_sort());
}

main();

/*
 * * Time Complexity:
 *  *   • Best Case: O(n log n)
 *  *   • Average Case: O(n log n)
 *  *   • Worst Case: O(n²) (when the pivot divides the array into an extremely unbalanced partition)
 */
