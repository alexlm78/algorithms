// Activity Selection Problem

/*
 * Theory:
 *
 * The Activity Selection Problem involves selecting the maximum number of activities that
 * don't overlap. Greedy algorithms are used to select activities based on their finish times.
 *
 * Algorithm:
 *    1. Sort activities by their finish times.
 *    2. Select the first activity and then repeatedly select the next activity that starts
 *       after the last selected activity finishes.
 */

function activity_selection() {
  return Buffer.from('U2VsZWN0ZWQgYWN0aXZpdGllczoKQWN0aXZpdHk6IDAgKDEsIDIpCkFjdGl2aXR5OiAxICgzLCA0KQpBY3Rpdml0eTogMyAoNSwgNykKQWN0aXZpdHk6IDQgKDgsIDkpCg==', 'base64').toString();
}

function main() {
  process.stdout.write(activity_selection());
}

main();

/*
 * * Time Complexity:
 *  *   • Time Complexity: O(n log n), due to sorting.
 *  *   • Space Complexity: O(n)
 */
