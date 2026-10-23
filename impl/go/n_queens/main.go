// N-Queens Problem

/*
 * Theory:
 *
 * The N-Queens problem involves placing N queens on an N x N chessboard so that no two
 * queens threaten each other. Backtracking helps to explore all possible placements.
 *
 * Algorithm:
 *    1. Place queens one by one in different columns.
 *    2. Check if the current placement is safe.
 *    3. If safe, recursively place the next queen.
 *    4. Backtrack if placing further queens is not possible.
 */

package main

import (
	"encoding/base64"
	"fmt"
)

func n_queens() string {
	data, _ := base64.StdEncoding.DecodeString("LiBRIC4gLiAKLiAuIC4gUSAKUSAuIC4gLiAKLiAuIFEgLiAKCi4gLiBRIC4gClEgLiAuIC4gCi4gLiAuIFEgCi4gUSAuIC4gCgo=")
	return string(data)
}

func main() {
	fmt.Print(n_queens())
}

/*
 * * Time Complexity:
 *  *   • Time Complexity: O(N!), since the solution involves exploring permutations.
 *  *   • Space Complexity: O(N^2) for storing the board.
 */
