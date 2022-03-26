# Graphs

Graphs are a way of representing relationships between objects.
This objects are called nodes or vertices and the relationships between them are called edges or lines.

## For what?

The imagination is limit.

- Social network.
- A search in labirint.
- Subway routes.

## Caracteristics

- Neighbor and underling nodes means that the nodes are connected by an edge.
- Some graphs are directed.
  - This means that the edges are directed to a specific node (unilateral).
  - The edges are ordered pairs of nodes.
  - The edge can be out from a node and connect to the same node (self-loop).
  - The vertice degree is the number of edges that out from the vertice + the number of edges that connect into the vertice.
    - We have the out degree and the in degree.
  - Strongly connected
    - A graph is strongly connected if there is a path between any two (pair) vertices. You can follow a path and return to the same node.
  - Connected
    - A graph is connected if there is a path between any two (pair) vertices. But you can't follow a path and not return to the same node.
  - Weakly connected
    - A graph is weakly connected if there is you don't have a path between some two (pair) vertices.
- Some graphs are not directed.
  - This means that connection between to nodes are bilateral.
  - The edges are unordered pairs of nodes.
  - The edge can be out from a node and connect to ONLY another node (not self-loop).
  - The neighbor relation is bidirectional.
  - The vertice degree is the number of edges that connect to the vertice.
  - A graph is said to be connected if there exist at least one path between every pair of vertices otherwise graph is said to be disconnected.
- The pathway of a vertice X to a vertice Y is a sequence of vertices that connect X and Y.
  - The size of a pathway is the number of edges that connect the vertices.
- Connected is when all nodes are connected.
- Disconnected is when only node are disconnected from the others
- Cycles happens when a node is connected to itself.
  - The cycle is a pathway that connect the node to itself.
  - The size of cycle is the number os edges between the nodes.
  - Graphs that have cycles are called cyclic.
  - The graph is called acyclic if it has no cycles.
