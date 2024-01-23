"use client";
import React, { useCallback, useRef } from "react";
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  useReactFlow,
  ReactFlowProvider,
  applyEdgeChanges,
  applyNodeChanges,
} from "reactflow";
import TextUpdaterNode from "../Nodes/TextUpdaterNode";

import "reactflow/dist/style.css";
import "@/app/assets/flow.module.css";

// const initialNodes = [
//   { id: "1", position: { x: 0, y: 0 }, data: { label: "1" } },
//   { id: "2", position: { x: 0, y: 100 }, data: { label: "2" } },
// ];

const initialNodes = [
  {
    id: "0",
    type: "",
    data: { label: "Node" },
    position: { x: 0, y: 50 },
  },
];

let id = 1;
const getId = () => `${id++}`;
const nodeTypes = {textUpdater: TextUpdaterNode}
const PageFlow = () => {
  const reactFlowWrapper = useRef(null);
  const connectingNodeId = useRef(null);
  const [nodes, setNodes] = useNodesState(initialNodes);
  const [edges, setEdges] = useEdgesState([]);
  const { screenToFlowPosition } = useReactFlow();

  // console.log( nodes)


const onNodeDoubleClick = useCallback(
(e, activeNode)=>{
  console.log("Active Id:", activeNode.id)
  const newNodes = nodes.map(node => {
    console.log("Node Id:", node.id)
    if(node.id == activeNode.id) {
       node.type = "textUpdater"
    }
    return node
  })


  console.log("newNodes", newNodes)
  setNodes(newNodes)
},[nodes, edges]
);
const onNodesChange = useCallback(
  (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
  [setNodes]
);

const onEdgesChange = useCallback(
  (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
  [setEdges]
)

  const onConnect = useCallback((params) => {
    // reset the start node on connections
    connectingNodeId.current = null;
    setEdges((eds) => addEdge(params, eds));
  }, []);

  const onConnectStart = useCallback((_, { nodeId }) => {
    connectingNodeId.current = nodeId;
  }, [nodes, edges]);

  const onConnectEnd = useCallback(
    (event) => {
      if (!connectingNodeId.current) return;

      const targetIsPane = event.target.classList.contains("react-flow__pane");

      if (targetIsPane) {
        // we need to remove the wrapper bounds, in order to get the correct position
        const id = getId();
        const newNode = {
          id,
          position: screenToFlowPosition({
            x: event.clientX,
            y: event.clientY,
          }),
          data: { label: `Node ${id}` },
          origin: [0.5, 0.0],
        };

        setNodes([...nodes, newNode]);
        setEdges((eds) =>
          eds.concat({ id, source: connectingNodeId.current, target: id })
        );
      }
    },
    [screenToFlowPosition, nodes, edges]
  );

  return (
    <div
      className="relative h-full"
      ref={reactFlowWrapper}
      style={{ height: "80vh" }}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onConnectStart={onConnectStart}
        onConnectEnd={onConnectEnd}
        nodeTypes={nodeTypes}
        onNodeDoubleClick={onNodeDoubleClick}
        fitView
        fitViewOptions={{ padding: 2 }}
        nodeOrigin={[0.5, 0]}
        deleteKeyCode="Delete"
      >
        <Controls />
        <MiniMap />
        <Background variant="dots" />
      </ReactFlow>
    </div>
  );
};

export default () => (
  <ReactFlowProvider>
    <PageFlow />
  </ReactFlowProvider>
);
