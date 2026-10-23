// Euclidean Algorithm (GCD)

/*
Theory:

The Euclidean Algorithm is used to compute the Greatest Common Divisor (GCD) of two
integers, which is the largest integer that divides both without leaving a remainder. The
algorithm is based on the property that GCD(a, b) = GCD(b, a % b).

Algorithm:
   1. Let a and b be two numbers.
   2. While b != 0, set a = b and b = a % b.
   3. When b becomes 0, a will be the GCD.
*/

fn gcd(mut a: u64, mut b: u64) -> u64 {
    while b != 0 {
        let temp = b;
        b = a % b;
        a = temp;
    }
    a
}

fn main() {
    let a = 56u64;
    let b = 98u64;
    println!("GCD of {} and {} is: {}", a, b, gcd(a, b));
}

/*
 * Time Complexity:
 *   • Time Complexity: O(log(min(a, b))).
 *   • Space Complexity: O(1).
 */
