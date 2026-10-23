// 0/1 Knapsack Problem

/*
Theory:

In the 0/1 Knapsack problem, given a set of items with specific weights and values, the goal
is to maximize the total value without exceeding a given weight limit. Dynamic programming
helps to solve this by storing solutions of subproblems.

Algorithm:
   1. Create a 2D array dp where dp[i][j] stores the maximum value for i items and weight limit j.
   2. For each item, decide whether to include it or not based on the current capacity.
   3. Return the value from the table for all items and the full capacity.
*/

fn knapsack(capacity: usize, weights: &[usize], values: &[usize]) -> usize {
    let n = values.len();
    let mut dp = vec![vec![0usize; capacity + 1]; n + 1];

    for i in 1..=n {
        for w in 1..=capacity {
            if weights[i - 1] <= w {
                dp[i][w] = dp[i - 1][w].max(values[i - 1] + dp[i - 1][w - weights[i - 1]]);
            } else {
                dp[i][w] = dp[i - 1][w];
            }
        }
    }
    dp[n][capacity]
}

fn main() {
    let values = vec![60, 100, 120];
    let weights = vec![10, 20, 30];
    let capacity = 50;
    println!(
        "Maximum value in Knapsack = {}",
        knapsack(capacity, &weights, &values)
    );
}

/*
 * Time Complexity:
 *   • Time Complexity: O(n * W), where n is the number of items and W is the weight capacity.
 *   • Space Complexity: O(n * W)
 */
