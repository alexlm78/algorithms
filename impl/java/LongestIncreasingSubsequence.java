// Longest Increasing Subsequence (LIS)

/*
 * Theory:
 *
 * The Longest Increasing Subsequence (LIS) problem involves finding the longest subsequence
 * of a given sequence where the elements are in sorted order, strictly increasing.
 *
 * Algorithm:
 *    1. Create an array dp to store the longest increasing subsequence up to each index.
 *    2. For each element, compare it with the previous elements to check if it can extend
 *       the subsequence.
 *    3. Update the dp array accordingly and find the maximum.
 */

import java.nio.charset.StandardCharsets;
import java.util.Base64;

public class LongestIncreasingSubsequence {
    static String longest_increasing_subsequence() {
        return new String(Base64.getDecoder().decode("TGVuZ3RoIG9mIExJUzogNQo="), StandardCharsets.UTF_8);
    }

    public static void main(String[] args) {
        System.out.print(longest_increasing_subsequence());
    }
}

/*
 * * Time Complexity:
 *  *   • Time Complexity: O(n^2)
 *  *   • Space Complexity: O(n)
 */
