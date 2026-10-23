// Sieve of Eratosthenes

/*
Theory:

The Sieve of Eratosthenes is an efficient algorithm for finding all prime numbers up to a
given limit n. It marks the multiples of each prime starting from 2.

Algorithm:
   1. Create an array of boolean values, initialized to true.
   2. Start with the first prime number, 2.
   3. Mark all multiples of 2 as non-prime.
   4. Move to the next number still marked prime, and repeat for its multiples.
   5. Continue until you have processed numbers up to sqrt(n).
*/

fn sieve(n: usize) -> Vec<usize> {
    let mut is_prime = vec![true; n + 1];
    is_prime[0] = false;
    if n > 0 {
        is_prime[1] = false;
    }

    let mut p = 2;
    while p * p <= n {
        if is_prime[p] {
            let mut i = p * p;
            while i <= n {
                is_prime[i] = false;
                i += p;
            }
        }
        p += 1;
    }

    (2..=n).filter(|&i| is_prime[i]).collect()
}

fn main() {
    let n = 50;
    let primes = sieve(n);
    println!("Prime numbers up to {}:", n);
    println!("{:?}", primes);
}

/*
 * Time Complexity:
 *   • Time Complexity: O(n log log n).
 *   • Space Complexity: O(n).
 */
