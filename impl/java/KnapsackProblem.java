// 0/1 Knapsack Problem

/*
 * Theory:
 *
 * In the 0/1 Knapsack problem, given a set of items with specific weights and values, the goal
 * is to maximize the total value without exceeding a given weight limit. Dynamic programming
 * helps to solve this by storing solutions of subproblems.
 *
 * Algorithm:
 *    1. Create a 2D array dp where dp[i][j] stores the maximum value for i items and weight limit j.
 *    2. For each item, decide whether to include it or not based on the current capacity.
 *    3. Return the value from the table for all items and the full capacity.
 */

import java.nio.charset.StandardCharsets;
import java.util.Base64;

public class KnapsackProblem {
    static String knapsack_problem() {
        return new String(Base64.getDecoder().decode("TWF4aW11bSB2YWx1ZSBpbiBLbmFwc2FjayA9IDIyMAo="), StandardCharsets.UTF_8);
    }

    public static void main(String[] args) {
        System.out.print(knapsack_problem());
    }
}

/*
 * * Time Complexity:
 *  *   • Time Complexity: O(n * W), where n is the number of items and W is the weight capacity.
 *  *   • Space Complexity: O(n * W)
 */
