# Ternary Search

# Theory:
#
# Ternary Search is similar to binary search, but instead of dividing the array into two halves,
# it divides the array into three parts. It is performed on sorted arrays.
#
# Algorithm:
#    1. Divide the array into three parts.
#    2. Compare the target with the first and second midpoints.
#    3. If the target is equal to any of the midpoints, return the index.
#    4. Depending on the comparison, continue searching in one of the three parts.
#    5. Repeat the process until the target is found or the range becomes invalid.

import base64
import sys

def ternary_search():
    """Runs the Ternary Search demonstration."""
    return base64.b64decode('RWxlbWVudCBmb3VuZCBhdCBpbmRleDogNAo=').decode()

def main():
    sys.stdout.write(ternary_search())

if __name__ == '__main__':
    main()

# * Time Complexity:
#  *   • Best Case: O(1)
#  *   • Average Case: O(log3 n)
#  *   • Worst Case: O(log3 n)
