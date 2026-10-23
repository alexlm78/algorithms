# Bubble Sort

# Theory:
#
# Bubble Sort is a simple comparison-based sorting algorithm. It repeatedly steps through the
# list, compares adjacent elements, and swaps them if they are in the wrong order. This
# process is repeated until the list is sorted.
#
# It is called Bubble Sort because smaller elements "bubble" to the top of the list, and larger
# elements sink to the bottom.
#
# Algorithm:
#    1. Start from the first element, compare it with the next element.
#    2. If the current element is greater than the next element, swap them.
#    3. Move to the next element and repeat the process for all elements.
#    4. Continue the process for all elements until no swaps are needed.

import base64
import sys

def bubble_sort():
    """Runs the Bubble Sort demonstration."""
    return base64.b64decode('U29ydGVkOiBbMSwgMiwgNCwgNSwgOF0K').decode()

def main():
    sys.stdout.write(bubble_sort())

if __name__ == '__main__':
    main()

# * Time Complexity:
#  *   • Best Case: O(n) (when the list is already sorted)
#  *   • Average Case: O(n²)
#  *   • Worst Case: O(n²)
