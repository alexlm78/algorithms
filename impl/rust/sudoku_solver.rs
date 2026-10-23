// Sudoku Solver

/*
Theory:

The Sudoku Solver fills a 9x9 Sudoku grid using backtracking to ensure that each number
1-9 appears only once per row, column, and 3x3 subgrid.

Algorithm:
   1. Find an empty cell.
   2. Try placing digits 1 through 9.
   3. Check if the placement is valid.
   4. Recursively solve the next cell.
   5. Backtrack if needed.
*/

fn is_valid(board: &[[u8; 9]; 9], row: usize, col: usize, num: u8) -> bool {
    for i in 0..9 {
        if board[row][i] == num
            || board[i][col] == num
            || board[row - row % 3 + i / 3][col - col % 3 + i % 3] == num
        {
            return false;
        }
    }
    true
}

fn solve(board: &mut [[u8; 9]; 9]) -> bool {
    for row in 0..9 {
        for col in 0..9 {
            if board[row][col] == 0 {
                for num in 1..=9 {
                    if is_valid(board, row, col, num) {
                        board[row][col] = num;
                        if solve(board) {
                            return true;
                        }
                        board[row][col] = 0; // Backtrack
                    }
                }
                return false;
            }
        }
    }
    true
}

fn print_board(board: &[[u8; 9]; 9]) {
    for row in board {
        println!("{:?}", row);
    }
}

fn main() {
    let mut board: [[u8; 9]; 9] = [
        [5, 3, 0, 0, 7, 0, 0, 0, 0],
        [6, 0, 0, 1, 9, 5, 0, 0, 0],
        [0, 9, 8, 0, 0, 0, 0, 6, 0],
        [8, 0, 0, 0, 6, 0, 0, 0, 3],
        [4, 0, 0, 8, 0, 3, 0, 0, 1],
        [7, 0, 0, 0, 2, 0, 0, 0, 6],
        [0, 6, 0, 0, 0, 0, 2, 8, 0],
        [0, 0, 0, 4, 1, 9, 0, 0, 5],
        [0, 0, 0, 0, 8, 0, 0, 7, 9],
    ];

    if solve(&mut board) {
        print_board(&board);
    } else {
        println!("No solution found");
    }
}

/*
 * Time Complexity:
 *   • Time Complexity: O(9^(N^2)), where N is the size of the grid (9).
 *   • Space Complexity: O(1)
 */
