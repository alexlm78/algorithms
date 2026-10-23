// Longest Common Subsequence (LCS)

/*
Theory:

The Longest Common Subsequence (LCS) problem finds the longest subsequence common
to two strings. A dynamic programming table is used to store solutions to subproblems,
helping to avoid recomputation.

Algorithm:
   1. Create a 2D table dp where dp[i][j] holds the length of LCS of strings X[0..i-1] and Y[0..j-1].
   2. If characters match, add 1 to the LCS length of the previous characters.
   3. Otherwise, take the maximum of the LCS by excluding one character from either string.
*/

fn lcs(x: &str, y: &str) -> usize {
    let m = x.len();
    let n = y.len();
    let xb: Vec<char> = x.chars().collect();
    let yb: Vec<char> = y.chars().collect();
    let mut dp = vec![vec![0usize; n + 1]; m + 1];

    for i in 1..=m {
        for j in 1..=n {
            if xb[i - 1] == yb[j - 1] {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = dp[i - 1][j].max(dp[i][j - 1]);
            }
        }
    }
    dp[m][n]
}

fn main() {
    let x = "AGGTAB";
    let y = "GXTXAYB";
    println!("Length of LCS: {}", lcs(x, y));
}

/*
 * Time Complexity:
 *   • Time Complexity: O(m * n)
 *   • Space Complexity: O(m * n)
 */
