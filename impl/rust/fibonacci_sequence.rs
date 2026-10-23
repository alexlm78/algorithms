// Fibonacci Sequence (Dynamic Programming)

/*
Theory:

The Fibonacci sequence is a series where each number is the sum of the two preceding
ones, starting from 0 and 1. Using dynamic programming, we store intermediate results to
avoid redundant calculations.

Algorithm:
   1. Create an array to store Fibonacci numbers.
   2. Initialize the first two Fibonacci numbers.
   3. Iterate through the remaining numbers and fill in the array using:
      F(n) = F(n-1) + F(n-2)
*/

fn fibonacci(n: usize) -> u64 {
    if n <= 1 {
        return n as u64;
    }
    let mut fib = vec![0u64; n + 1];
    fib[0] = 0;
    fib[1] = 1;
    for i in 2..=n {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    fib[n]
}

fn main() {
    let n = 10;
    println!("Fibonacci number at index {} is: {}", n, fibonacci(n));
}

/*
 * Time Complexity:
 *   • Time Complexity: O(n)
 *   • Space Complexity: O(n)
 */
