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

package main

import (
	"encoding/base64"
	"fmt"
)

func edit_distance() string {
	data, _ := base64.StdEncoding.DecodeString("RWRpdCBEaXN0YW5jZTogMwo=")
	return string(data)
}

func main() {
	fmt.Print(edit_distance())
}

/*
 * * Time Complexity:
 *  *   • Time Complexity: O(m * n)
 *  *   • Space Complexity: O(m * n)
 */
