import {
  Handle,
  Position,
  useHandleConnections,
  useNodesData,
} from '@xyflow/react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

function OutputNode({ data }: any) {
  const numberConnection = useHandleConnections({
    type: 'target',
    id: 'output',
  });

  const nodesData = useNodesData(numberConnection[0]?.source);

  const output = nodesData?.data.output ? String(nodesData.data.output) : 0;

  return (
    <Card>
      <Handle type="target" position={Position.Left} id="output" />
      <CardHeader>
        <CardTitle>Output Number</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-center">{output}</p>
      </CardContent>
    </Card>
  );
}

export default OutputNode;
