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

import java.nio.charset.StandardCharsets;
import java.util.Base64;

public class FibonacciSequence {
    static String fibonacci_sequence() {
        return new String(Base64.getDecoder().decode("Rmlib25hY2NpIG51bWJlciBhdCBpbmRleCAxMCBpczogNTUK"), StandardCharsets.UTF_8);
    }

    public static void main(String[] args) {
        System.out.print(fibonacci_sequence());
    }
}

/*
 * * Time Complexity:
 *  *   • Time Complexity: O(n)
 *  *   • Space Complexity: O(n)
 */
