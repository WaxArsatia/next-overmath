import {
  Handle,
  Position,
  useHandleConnections,
  useNodesData,
  useReactFlow,
} from '@xyflow/react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { useEffect } from 'react';

function PlusNode({ id }: any) {
  const { updateNodeData } = useReactFlow();

  const numberConnection = useHandleConnections({
    type: 'target',
    id: 'plus',
  });

  const nodesData = useNodesData(numberConnection.map((conn) => conn.source));

  useEffect(() => {
    const sum = nodesData.reduce(
      (acc, data) => acc + Number(data.data.output),
      0
    );
    updateNodeData(id, { output: sum });
  }, [id, nodesData, updateNodeData]);

  return (
    <Card>
      <Handle type="source" position={Position.Right} />
      <Handle type="target" id="plus" position={Position.Left} />
      <CardHeader>
        <CardTitle>Plus Operator</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-center text-5xl">+</p>
      </CardContent>
    </Card>
  );
}

export default PlusNode;
