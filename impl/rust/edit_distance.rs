// Edit Distance (Levenshtein Distance)

/*
Theory:

The Edit Distance problem finds the minimum number of operations (insertions, deletions,
and substitutions) required to convert one string into another. Dynamic programming stores
solutions to subproblems and helps to minimize operations.

Algorithm:
   1. Create a 2D table dp where dp[i][j] represents the edit distance between
      substrings of lengths i and j.
   2. If characters are the same, no operation is needed. Otherwise, perform insertion,
      deletion, or substitution.
   3. Fill in the table and return the final value.
*/

fn edit_distance(s1: &str, s2: &str) -> usize {
    let m = s1.len();
    let n = s2.len();
    let s1: Vec<char> = s1.chars().collect();
    let s2: Vec<char> = s2.chars().collect();
    let mut dp = vec![vec![0usize; n + 1]; m + 1];

    for i in 0..=m {
        dp[i][0] = i;
    }
    for j in 0..=n {
        dp[0][j] = j;
    }

    for i in 1..=m {
        for j in 1..=n {
            if s1[i - 1] == s2[j - 1] {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = 1 + dp[i - 1][j].min(dp[i][j - 1]).min(dp[i - 1][j - 1]);
            }
        }
    }
    dp[m][n]
}

fn main() {
    let s1 = "sunday";
    let s2 = "saturday";
    println!("Edit Distance: {}", edit_distance(s1, s2));
}

/*
 * Time Complexity:
 *   • Time Complexity: O(m * n)
 *   • Space Complexity: O(m * n)
 */
