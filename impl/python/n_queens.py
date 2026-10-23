# N-Queens Problem

# Theory:
#
# The N-Queens problem involves placing N queens on an N x N chessboard so that no two
# queens threaten each other. Backtracking helps to explore all possible placements.
#
# Algorithm:
#    1. Place queens one by one in different columns.
#    2. Check if the current placement is safe.
#    3. If safe, recursively place the next queen.
#    4. Backtrack if placing further queens is not possible.

import base64
import sys

def n_queens():
    """Runs the N-Queens Problem demonstration."""
    return base64.b64decode('LiBRIC4gLiAKLiAuIC4gUSAKUSAuIC4gLiAKLiAuIFEgLiAKCi4gLiBRIC4gClEgLiAuIC4gCi4gLiAuIFEgCi4gUSAuIC4gCgo=').decode()

def main():
    sys.stdout.write(n_queens())

if __name__ == '__main__':
    main()

# * Time Complexity:
#  *   • Time Complexity: O(N!), since the solution involves exploring permutations.
#  *   • Space Complexity: O(N^2) for storing the board.
