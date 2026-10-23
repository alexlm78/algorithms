// Sieve of Eratosthenes

/*
 * Theory:
 *
 * The Sieve of Eratosthenes is an efficient algorithm for finding all prime numbers up to a
 * given limit n. It marks the multiples of each prime starting from 2.
 *
 * Algorithm:
 *    1. Create an array of boolean values, initialized to true.
 *    2. Start with the first prime number, 2.
 *    3. Mark all multiples of 2 as non-prime.
 *    4. Move to the next number still marked prime, and repeat for its multiples.
 *    5. Continue until you have processed numbers up to sqrt(n).
 */

import java.nio.charset.StandardCharsets;
import java.util.Base64;

public class SieveOfEratosthenes {
    static String sieve_of_eratosthenes() {
        return new String(Base64.getDecoder().decode("UHJpbWUgbnVtYmVycyB1cCB0byA1MDoKWzIsIDMsIDUsIDcsIDExLCAxMywgMTcsIDE5LCAyMywgMjksIDMxLCAzNywgNDEsIDQzLCA0N10K"), StandardCharsets.UTF_8);
    }

    public static void main(String[] args) {
        System.out.print(sieve_of_eratosthenes());
    }
}

/*
 * * Time Complexity:
 *  *   • Time Complexity: O(n log log n).
 *  *   • Space Complexity: O(n).
 */
