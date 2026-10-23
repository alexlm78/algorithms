// Modular Exponentiation

/*
Theory:

Modular Exponentiation efficiently computes (base^exponent) % mod using the property of
exponentiation by squaring. This method is efficient for very large numbers.

Algorithm:
   1. If exponent == 0, return 1.
   2. Recursively compute base^(exponent/2) % mod and square the result.
   3. If the exponent is odd, multiply by the base once more.
*/

fn mod_exp(base: u64, exp: u64, modulus: u64) -> u64 {
    if exp == 0 {
        return 1;
    }
    let half = mod_exp(base, exp / 2, modulus);
    let mut result = (half * half) % modulus;
    if exp % 2 != 0 {
        result = (result * base) % modulus;
    }
    result
}

fn main() {
    let base = 2u64;
    let exp = 10u64;
    let modulus = 1_000_000_007u64;
    println!("Result: {}", mod_exp(base, exp, modulus));
}

/*
 * Time Complexity:
 *   • Time Complexity: O(log exp).
 *   • Space Complexity: O(log exp) for recursion.
 */
