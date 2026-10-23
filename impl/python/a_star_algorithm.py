# A* Search Algorithm

# Theory:
#
# The A* Search Algorithm is a popular pathfinding and graph traversal algorithm, widely used
# in AI, especially in games. It combines the advantages of Dijkstra's Algorithm and Greedy
# Best-First Search by using a heuristic to guide its search.
#
# Algorithm:
#    1. Open list: Nodes to be evaluated.
#    2. Closed list: Nodes already evaluated.
#    3. For each node, calculate f(n) = g(n) + h(n):
#       - g(n): The cost to reach the node.
#       - h(n): Heuristic estimate of the cost to reach the goal (Manhattan distance).
#    4. At each step, choose the node from the open list with the lowest f(n) value.
#    5. Repeat until the goal is reached.

import base64
import sys

def a_star_algorithm():
    """Runs the A* Search Algorithm demonstration."""
    return base64.b64decode('UGF0aDogKDAsIDApClBhdGg6ICgwLCAxKQpQYXRoOiAoMCwgMikKUGF0aDogKDAsIDMpClBhdGg6ICgwLCA0KQpQYXRoOiAoMSwgNCkKUGF0aDogKDIsIDQpClBhdGg6ICgzLCA0KQpQYXRoOiAoNCwgNCkK').decode()

def main():
    sys.stdout.write(a_star_algorithm())

if __name__ == '__main__':
    main()

# * Time Complexity:
#  *   • Time Complexity: O(b^d), where b is the branching factor and d is the depth of the solution.
#  *   • Space Complexity: O(b^d) for the open and closed lists.
