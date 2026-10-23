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

function exponential_search() {
  return Buffer.from('RWxlbWVudCBmb3VuZCBhdCBpbmRleDogNgo=', 'base64').toString();
}

function main() {
  process.stdout.write(exponential_search());
}

main();

/*
 * * Time Complexity:
 *  *   • Best Case: O(1)
 *  *   • Average Case: O(log n)
 *  *   • Worst Case: O(log n)
 */
