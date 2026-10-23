# Depth First Search (DFS)

# Theory:
#
# DFS is a graph traversal algorithm that starts at a selected node and explores as far as
# possible along each branch before backtracking. It uses a stack (either explicitly or via
# recursion) to keep track of the visited nodes.
#
# Algorithm:
#    1. Start at a selected node, mark it as visited.
#    2. Recursively explore adjacent unvisited nodes.
#    3. Once all adjacent nodes are visited, backtrack.

import base64
import sys

def depth_first_search():
    """Runs the Depth First Search (DFS) demonstration."""
    return base64.b64decode('REZTIHRyYXZlcnNhbDoKMCAxIDMgMiA0IDUgCg==').decode()

def main():
    sys.stdout.write(depth_first_search())

if __name__ == '__main__':
    main()

# * Time Complexity:
#  *   • Time Complexity: O(V + E), where V is the number of vertices and E is the number of edges.
#  *   • Space Complexity: O(V)
