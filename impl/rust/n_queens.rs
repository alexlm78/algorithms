// N-Queens Problem

/*
Theory:

The N-Queens problem involves placing N queens on an N x N chessboard so that no two
queens threaten each other. Backtracking helps to explore all possible placements.

Algorithm:
   1. Place queens one by one in different columns.
   2. Check if the current placement is safe.
   3. If safe, recursively place the next queen.
   4. Backtrack if placing further queens is not possible.
*/

fn is_safe(board: &[usize], row: usize, col: usize) -> bool {
    for i in 0..row {
        if board[i] == col
            || (board[i] as i32 - i as i32) == (col as i32 - row as i32)
            || (board[i] as i32 + i as i32) == (col as i32 + row as i32)
        {
            return false;
        }
    }
    true
}

fn print_board(board: &[usize], n: usize) {
    for i in 0..n {
        for j in 0..n {
            print!("{} ", if board[i] == j { 'Q' } else { '.' });
        }
        println!();
    }
    println!();
}

fn solve(board: &mut Vec<usize>, row: usize, n: usize) {
    if row == n {
        print_board(board, n);
        return;
    }
    for col in 0..n {
        if is_safe(board, row, col) {
            board[row] = col;
            solve(board, row + 1, n);
        }
    }
}

fn solve_n_queens(n: usize) {
    let mut board = vec![0usize; n];
    solve(&mut board, 0, n);
}

fn main() {
    let n = 4;
    solve_n_queens(n);
}

/*
 * Time Complexity:
 *   • Time Complexity: O(N!), since the solution involves exploring permutations.
 *   • Space Complexity: O(N^2) for storing the board.
 */
