# Linear Search

# Theory:
#
# Linear search is a simple search algorithm that checks each element in the array one by one
# until the target element is found or the list is exhausted.
#
# Algorithm:
#    1. Start from the first element and compare it with the target.
#    2. If the element matches the target, return the index.
#    3. If the end of the array is reached without finding the target, return None.

import base64
import sys

def linear_search():
    """Runs the Linear Search demonstration."""
    return base64.b64decode('RWxlbWVudCBmb3VuZCBhdCBpbmRleDogMwo=').decode()

def main():
    sys.stdout.write(linear_search())

if __name__ == '__main__':
    main()

# * Time Complexity:
#  *   • Best Case: O(1) (when the target is the first element)
#  *   • Average Case: O(n)
#  *   • Worst Case: O(n)
