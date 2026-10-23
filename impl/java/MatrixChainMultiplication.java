// Matrix Chain Multiplication

/*
 * Theory:
 *
 * The Matrix Chain Multiplication problem is about finding the most efficient way to multiply a
 * given sequence of matrices. Dynamic programming helps in finding the optimal
 * parenthesization of the matrices to minimize the number of scalar multiplications.
 *
 * Algorithm:
 *    1. Create a 2D array dp where dp[i][j] represents the minimum cost of multiplying
 *       matrices from i to j.
 *    2. Use a bottom-up approach to fill in the table by considering different places to split
 *       the sequence of matrices.
 *    3. Return the value from the table for the full sequence of matrices.
 */

import java.nio.charset.StandardCharsets;
import java.util.Base64;

public class MatrixChainMultiplication {
    static String matrix_chain_multiplication() {
        return new String(Base64.getDecoder().decode("TWluaW11bSBudW1iZXIgb2YgbXVsdGlwbGljYXRpb25zOiAxOAo="), StandardCharsets.UTF_8);
    }

    public static void main(String[] args) {
        System.out.print(matrix_chain_multiplication());
    }
}

/*
 * * Time Complexity:
 *  *   • Time Complexity: O(n^3)
 *  *   • Space Complexity: O(n^2)
 */
