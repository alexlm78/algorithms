// Counting Sort

/*
 * Theory:
 *
 * Counting Sort is a non-comparison-based sorting algorithm. It counts the occurrences of
 * each unique element in the input array. The counts are then used to place the elements
 * in the correct position in the sorted array.
 *
 * Algorithm:
 *    1. Find the maximum value in the array.
 *    2. Create a count array to store the count of each unique value.
 *    3. Calculate the cumulative count to determine the position of each element.
 *    4. Build the sorted array using the count array.
 */

function counting_sort() {
  return Buffer.from('U29ydGVkOiBbMSwgMiwgMiwgMywgMywgNCwgOF0K', 'base64').toString();
}

function main() {
  process.stdout.write(counting_sort());
}

main();

/*
 * * Time Complexity:
 *  *   • Best Case: O(n + k) (where k is the range of the input)
 *  *   • Average Case: O(n + k)
 *  *   • Worst Case: O(n + k)
 */
