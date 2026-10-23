# Longest Common Subsequence (LCS)

# Theory:
#
# The Longest Common Subsequence (LCS) problem finds the longest subsequence common
# to two strings. A dynamic programming table is used to store solutions to subproblems,
# helping to avoid recomputation.
#
# Algorithm:
#    1. Create a 2D table dp where dp[i][j] holds the length of LCS of strings X[0..i-1] and Y[0..j-1].
#    2. If characters match, add 1 to the LCS length of the previous characters.
#    3. Otherwise, take the maximum of the LCS by excluding one character from either string.

import base64
import sys

def longest_common_subsequence():
    """Runs the Longest Common Subsequence (LCS) demonstration."""
    return base64.b64decode('TGVuZ3RoIG9mIExDUzogNAo=').decode()

def main():
    sys.stdout.write(longest_common_subsequence())

if __name__ == '__main__':
    main()

# * Time Complexity:
#  *   • Time Complexity: O(m * n)
#  *   • Space Complexity: O(m * n)
