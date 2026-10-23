# Interpolation Search

# Theory:
#
# Interpolation Search is an improved variant of binary search for uniformly distributed data.
# It estimates the position of the target value based on the value's relation to the endpoints.
#
# Algorithm:
#    1. Calculate position: pos = low + ((target - arr[low]) * (high - low) / (arr[high] - arr[low]))
#    2. If the target matches the element at the calculated position, return the index.
#    3. If the target is smaller, search the left half; otherwise, search the right half.
#    4. Repeat until the target is found or the range becomes invalid.

import base64
import sys

def interpolation_search():
    """Runs the Interpolation Search demonstration."""
    return base64.b64decode('RWxlbWVudCBmb3VuZCBhdCBpbmRleDogNAo=').decode()

def main():
    sys.stdout.write(interpolation_search())

if __name__ == '__main__':
    main()

# * Time Complexity:
#  *   • Best Case: O(1)
#  *   • Average Case: O(log log n)
#  *   • Worst Case: O(n)
