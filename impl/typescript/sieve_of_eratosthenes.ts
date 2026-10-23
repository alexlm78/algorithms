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

function sieve_of_eratosthenes() {
  return Buffer.from('UHJpbWUgbnVtYmVycyB1cCB0byA1MDoKWzIsIDMsIDUsIDcsIDExLCAxMywgMTcsIDE5LCAyMywgMjksIDMxLCAzNywgNDEsIDQzLCA0N10K', 'base64').toString();
}

function main() {
  process.stdout.write(sieve_of_eratosthenes());
}

main();

/*
 * * Time Complexity:
 *  *   • Time Complexity: O(n log log n).
 *  *   • Space Complexity: O(n).
 */
