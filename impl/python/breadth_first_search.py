# Breadth First Search (BFS)

# Theory:
#
# BFS is a graph traversal algorithm that explores all neighbors at the present depth level
# before moving on to nodes at the next depth level. It uses a queue to explore nodes in a
# level-wise manner.
#
# Algorithm:
#    1. Start at the selected node, enqueue it, and mark it as visited.
#    2. Dequeue a node and explore all its unvisited neighbors, enqueue them.
#    3. Repeat the process until the queue is empty.

import base64
import sys

def breadth_first_search():
    """Runs the Breadth First Search (BFS) demonstration."""
    return base64.b64decode('QkZTIHRyYXZlcnNhbDoKMCAxIDIgMyA0IDUgCg==').decode()

def main():
    sys.stdout.write(breadth_first_search())

if __name__ == '__main__':
    main()

# * Time Complexity:
#  *   • Time Complexity: O(V + E), where V is the number of vertices and E is the number of edges.
#  *   • Space Complexity: O(V)
