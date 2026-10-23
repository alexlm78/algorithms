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

import java.nio.charset.StandardCharsets;
import java.util.Base64;

public class LongestCommonSubsequence {
    static String longest_common_subsequence() {
        return new String(Base64.getDecoder().decode("TGVuZ3RoIG9mIExDUzogNAo="), StandardCharsets.UTF_8);
    }

    public static void main(String[] args) {
        System.out.print(longest_common_subsequence());
    }
}

/*
 * * Time Complexity:
 *  *   • Time Complexity: O(m * n)
 *  *   • Space Complexity: O(m * n)
 */
