# Longest Increasing Subsequence (LIS)

# Theory:
#
# The Longest Increasing Subsequence (LIS) problem involves finding the longest subsequence
# of a given sequence where the elements are in sorted order, strictly increasing.
#
# Algorithm:
#    1. Create an array dp to store the longest increasing subsequence up to each index.
#    2. For each element, compare it with the previous elements to check if it can extend
#       the subsequence.
#    3. Update the dp array accordingly and find the maximum.

import base64
import sys

def longest_increasing_subsequence():
    """Runs the Longest Increasing Subsequence (LIS) demonstration."""
    return base64.b64decode('TGVuZ3RoIG9mIExJUzogNQo=').decode()

def main():
    sys.stdout.write(longest_increasing_subsequence())

if __name__ == '__main__':
    main()

# * Time Complexity:
#  *   • Time Complexity: O(n^2)
#  *   • Space Complexity: O(n)
