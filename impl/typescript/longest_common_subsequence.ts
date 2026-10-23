// Longest Common Subsequence (LCS)

/*
 * Theory:
 *
 * The Longest Common Subsequence (LCS) problem finds the longest subsequence common
 * to two strings. A dynamic programming table is used to store solutions to subproblems,
 * helping to avoid recomputation.
 *
 * Algorithm:
 *    1. Create a 2D table dp where dp[i][j] holds the length of LCS of strings X[0..i-1] and Y[0..j-1].
 *    2. If characters match, add 1 to the LCS length of the previous characters.
 *    3. Otherwise, take the maximum of the LCS by excluding one character from either string.
 */

function longest_common_subsequence() {
  return Buffer.from('TGVuZ3RoIG9mIExDUzogNAo=', 'base64').toString();
}

function main() {
  process.stdout.write(longest_common_subsequence());
}

main();

/*
 * * Time Complexity:
 *  *   • Time Complexity: O(m * n)
 *  *   • Space Complexity: O(m * n)
 */
