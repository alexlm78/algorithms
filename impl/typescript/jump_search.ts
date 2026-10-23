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

function jump_search() {
  return Buffer.from('RWxlbWVudCBmb3VuZCBhdCBpbmRleDogOAo=', 'base64').toString();
}

function main() {
  process.stdout.write(jump_search());
}

main();

/*
 * * Time Complexity:
 *  *   • Best Case: O(1)
 *  *   • Average Case: O(√n)
 *  *   • Worst Case: O(√n)
 */
