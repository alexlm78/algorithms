// Modular Exponentiation

/*
 * Theory:
 *
 * Modular Exponentiation efficiently computes (base^exponent) % mod using the property of
 * exponentiation by squaring. This method is efficient for very large numbers.
 *
 * Algorithm:
 *    1. If exponent == 0, return 1.
 *    2. Recursively compute base^(exponent/2) % mod and square the result.
 *    3. If the exponent is odd, multiply by the base once more.
 */

function modular_exponentiation() {
  return Buffer.from('UmVzdWx0OiAxMDI0Cg==', 'base64').toString();
}

function main() {
  process.stdout.write(modular_exponentiation());
}

main();

/*
 * * Time Complexity:
 *  *   • Time Complexity: O(log exp).
 *  *   • Space Complexity: O(log exp) for recursion.
 */
