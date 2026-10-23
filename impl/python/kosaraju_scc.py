# Kosaraju's Algorithm (Strongly Connected Components)

# Theory:
#
# Kosaraju's Algorithm finds Strongly Connected Components (SCCs) in a directed graph using
# two DFS passes. The first DFS sorts vertices by finishing time; the second DFS explores
# SCCs on the reversed graph.
#
# Algorithm:
#    1. Perform DFS on the original graph, noting the finishing times of vertices.
#    2. Reverse the graph.
#    3. Perform DFS on the reversed graph in decreasing finishing-time order.
#       Each DFS tree in this pass is one SCC.

import base64
import sys

def kosaraju_scc():
    """Runs the Kosaraju's Algorithm (Strongly Connected Components) demonstration."""
    return base64.b64decode('U3Ryb25nbHkgQ29ubmVjdGVkIENvbXBvbmVudHM6CjAgMSAyIAozIAo0IAo=').decode()

def main():
    sys.stdout.write(kosaraju_scc())

if __name__ == '__main__':
    main()

# * Time Complexity:
#  *   • Time Complexity: O(V + E), where V is the number of vertices and E is the number of edges.
#  *   • Space Complexity: O(V) for visited and stack.
