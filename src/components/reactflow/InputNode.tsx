import { Handle, Position, useReactFlow } from '@xyflow/react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { ChangeEvent, useCallback, useState } from 'react';
import { Label } from '@radix-ui/react-label';

function InputNode({ id, data }: any) {
  const { updateNodeData } = useReactFlow();
  const [number, setNumber] = useState(data.value);

  const onChange = useCallback(
    (evt: ChangeEvent<HTMLInputElement>) => {
      setNumber(Number(evt.target.value));
      updateNodeData(id, {
        value: Number(evt.target.value),
        output: Number(evt.target.value),
      });
    },
    [id, updateNodeData]
  );

  return (
    <Card>
      <Handle type="source" position={Position.Right} />
      <CardHeader>
        <CardTitle>Input Number</CardTitle>
      </CardHeader>
      <CardContent>
        <Label htmlFor={id}>Number</Label>
        <Input id={id} type="number" onChange={onChange} value={number} />
      </CardContent>
    </Card>
  );
}

export default InputNode;
