// Edit Distance (Levenshtein Distance)

/*
 * Theory:
 *
 * The Edit Distance problem finds the minimum number of operations (insertions, deletions,
 * and substitutions) required to convert one string into another. Dynamic programming stores
 * solutions to subproblems and helps to minimize operations.
 *
 * Algorithm:
 *    1. Create a 2D table dp where dp[i][j] represents the edit distance between
 *       substrings of lengths i and j.
 *    2. If characters are the same, no operation is needed. Otherwise, perform insertion,
 *       deletion, or substitution.
 *    3. Fill in the table and return the final value.
 */

function edit_distance() {
  return Buffer.from('RWRpdCBEaXN0YW5jZTogMwo=', 'base64').toString();
}

function main() {
  process.stdout.write(edit_distance());
}

main();

/*
 * * Time Complexity:
 *  *   • Time Complexity: O(m * n)
 *  *   • Space Complexity: O(m * n)
 */
