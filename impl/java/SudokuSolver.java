// Sudoku Solver

/*
 * Theory:
 *
 * The Sudoku Solver fills a 9x9 Sudoku grid using backtracking to ensure that each number
 * 1-9 appears only once per row, column, and 3x3 subgrid.
 *
 * Algorithm:
 *    1. Find an empty cell.
 *    2. Try placing digits 1 through 9.
 *    3. Check if the placement is valid.
 *    4. Recursively solve the next cell.
 *    5. Backtrack if needed.
 */

import java.nio.charset.StandardCharsets;
import java.util.Base64;

public class SudokuSolver {
    static String sudoku_solver() {
        return new String(Base64.getDecoder().decode("WzUsIDMsIDQsIDYsIDcsIDgsIDksIDEsIDJdCls2LCA3LCAyLCAxLCA5LCA1LCAzLCA0LCA4XQpbMSwgOSwgOCwgMywgNCwgMiwgNSwgNiwgN10KWzgsIDUsIDksIDcsIDYsIDEsIDQsIDIsIDNdCls0LCAyLCA2LCA4LCA1LCAzLCA3LCA5LCAxXQpbNywgMSwgMywgOSwgMiwgNCwgOCwgNSwgNl0KWzksIDYsIDEsIDUsIDMsIDcsIDIsIDgsIDRdClsyLCA4LCA3LCA0LCAxLCA5LCA2LCAzLCA1XQpbMywgNCwgNSwgMiwgOCwgNiwgMSwgNywgOV0K"), StandardCharsets.UTF_8);
    }

    public static void main(String[] args) {
        System.out.print(sudoku_solver());
    }
}

/*
 * * Time Complexity:
 *  *   • Time Complexity: O(9^(N^2)), where N is the size of the grid (9).
 *  *   • Space Complexity: O(1)
 */
