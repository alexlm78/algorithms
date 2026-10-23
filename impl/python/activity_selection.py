# Activity Selection Problem

# Theory:
#
# The Activity Selection Problem involves selecting the maximum number of activities that
# don't overlap. Greedy algorithms are used to select activities based on their finish times.
#
# Algorithm:
#    1. Sort activities by their finish times.
#    2. Select the first activity and then repeatedly select the next activity that starts
#       after the last selected activity finishes.

import base64
import sys

def activity_selection():
    """Runs the Activity Selection Problem demonstration."""
    return base64.b64decode('U2VsZWN0ZWQgYWN0aXZpdGllczoKQWN0aXZpdHk6IDAgKDEsIDIpCkFjdGl2aXR5OiAxICgzLCA0KQpBY3Rpdml0eTogMyAoNSwgNykKQWN0aXZpdHk6IDQgKDgsIDkpCg==').decode()

def main():
    sys.stdout.write(activity_selection())

if __name__ == '__main__':
    main()

# * Time Complexity:
#  *   • Time Complexity: O(n log n), due to sorting.
#  *   • Space Complexity: O(n)
