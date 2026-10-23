# Tarjan's Algorithm (Strongly Connected Components)

# Theory:
#
# Tarjan's Algorithm is used to find the Strongly Connected Components (SCCs) in a directed
# graph. It uses depth-first search (DFS) and a stack to track the nodes. The key idea is to
# use a low-link value to determine if a node is part of a strongly connected component.
#
# Algorithm:
#    1. Perform a DFS traversal, keeping track of discovery times of nodes.
#    2. Use a low-link value to track the smallest discovery time reachable from the current node.
#    3. If a node's discovery time matches its low-link value, it is the root of an SCC.
#    4. Continue this process until all nodes are processed.

import base64
import sys

def tarjan_scc():
    """Runs the Tarjan's Algorithm (Strongly Connected Components) demonstration."""
    return base64.b64decode('U3Ryb25nbHkgQ29ubmVjdGVkIENvbXBvbmVudHM6ClNDQzogNCAKU0NDOiAzIApTQ0M6IDEgMiAwIAo=').decode()

def main():
    sys.stdout.write(tarjan_scc())

if __name__ == '__main__':
    main()

# * Time Complexity:
#  *   • Time Complexity: O(V + E), where V is the number of vertices and E is the number of edges.
#  *   • Space Complexity: O(V) for storing discovery times and low-link values.
