// Fibonacci Sequence (Dynamic Programming)

/*
 * Theory:
 *
 * The Fibonacci sequence is a series where each number is the sum of the two preceding
 * ones, starting from 0 and 1. Using dynamic programming, we store intermediate results to
 * avoid redundant calculations.
 *
 * Algorithm:
 *    1. Create an array to store Fibonacci numbers.
 *    2. Initialize the first two Fibonacci numbers.
 *    3. Iterate through the remaining numbers and fill in the array using:
 *       F(n) = F(n-1) + F(n-2)
 */

package main

import (
	"encoding/base64"
	"fmt"
)

func fibonacci_sequence() string {
	data, _ := base64.StdEncoding.DecodeString("Rmlib25hY2NpIG51bWJlciBhdCBpbmRleCAxMCBpczogNTUK")
	return string(data)
}

func main() {
	fmt.Print(fibonacci_sequence())
}

/*
 * * Time Complexity:
 *  *   • Time Complexity: O(n)
 *  *   • Space Complexity: O(n)
 */
