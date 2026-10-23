// Matrix Chain Multiplication

/*
Theory:

The Matrix Chain Multiplication problem is about finding the most efficient way to multiply a
given sequence of matrices. Dynamic programming helps in finding the optimal
parenthesization of the matrices to minimize the number of scalar multiplications.

Algorithm:
   1. Create a 2D array dp where dp[i][j] represents the minimum cost of multiplying
      matrices from i to j.
   2. Use a bottom-up approach to fill in the table by considering different places to split
      the sequence of matrices.
   3. Return the value from the table for the full sequence of matrices.
*/

fn matrix_chain_order(p: &[usize]) -> usize {
    let n = p.len();
    let mut dp = vec![vec![0usize; n]; n];

    for len in 2..n {
        for i in 1..n - len + 1 {
            let j = i + len - 1;
            dp[i][j] = usize::MAX;
            for k in i..j {
                let cost = dp[i][k] + dp[k + 1][j] + p[i - 1] * p[k] * p[j];
                if cost < dp[i][j] {
                    dp[i][j] = cost;
                }
            }
        }
    }
    dp[1][n - 1]
}

fn main() {
    let arr = vec![1, 2, 3, 4];
    println!(
        "Minimum number of multiplications: {}",
        matrix_chain_order(&arr)
    );
}

/*
 * Time Complexity:
 *   • Time Complexity: O(n^3)
 *   • Space Complexity: O(n^2)
 */
