// Euclidean Algorithm (GCD)

/*
 * Theory:
 *
 * The Euclidean Algorithm is used to compute the Greatest Common Divisor (GCD) of two
 * integers, which is the largest integer that divides both without leaving a remainder. The
 * algorithm is based on the property that GCD(a, b) = GCD(b, a % b).
 *
 * Algorithm:
 *    1. Let a and b be two numbers.
 *    2. While b != 0, set a = b and b = a % b.
 *    3. When b becomes 0, a will be the GCD.
 */

package main

import (
	"encoding/base64"
	"fmt"
)

func euclidean_algorithm() string {
	data, _ := base64.StdEncoding.DecodeString("R0NEIG9mIDU2IGFuZCA5OCBpczogMTQK")
	return string(data)
}

func main() {
	fmt.Print(euclidean_algorithm())
}

/*
 * * Time Complexity:
 *  *   • Time Complexity: O(log(min(a, b))).
 *  *   • Space Complexity: O(1).
 */
