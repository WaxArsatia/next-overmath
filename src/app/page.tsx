'use client';

import {
  addEdge,
  Background,
  Connection,
  Controls,
  Edge,
  Node,
  ReactFlow,
  useEdgesState,
  useNodesState,
} from '@xyflow/react';

import '@xyflow/react/dist/style.css';
import OutputNode from '@/components/reactflow/OutputNode';
import InputNode from '@/components/reactflow/InputNode';
import PlusNode from '@/components/reactflow/PlusNode';
import { useCallback } from 'react';

const initialNodes: Node[] = [
  {
    id: 'input-1',
    position: { x: 0, y: 0 },
    data: { value: 5, output: 5 },
    type: 'inputNode',
  },
  {
    id: 'input-2',
    position: { x: 0, y: 300 },
    data: { value: 7, output: 7 },
    type: 'inputNode',
  },
  {
    id: 'plus-1',
    position: { x: 400, y: 150 },
    data: {},
    type: 'plusNode',
  },
  {
    id: 'output-1',
    position: { x: 700, y: 150 },
    data: {},
    type: 'outputNode',
  },
];

const initialEdges: Edge[] = [
  {
    id: 'input-1_plus-1',
    source: 'input-1',
    target: 'plus-1',
    targetHandle: 'plus',
  },
  {
    id: 'input-2_plus-1',
    source: 'input-2',
    target: 'plus-1',
    targetHandle: 'plus',
  },
  {
    id: 'plus-1_output-1',
    source: 'plus-1',
    target: 'output-1',
    targetHandle: 'output',
  },
];

const nodeTypes = {
  inputNode: InputNode,
  outputNode: OutputNode,
  plusNode: PlusNode,
};

export default function Home() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div className="h-screen">
      <ReactFlow
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: 1 }}
        colorMode="dark"
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}
