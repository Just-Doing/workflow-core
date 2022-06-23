import React from 'react';
import { Button, message } from 'antd';
import { useJsPlub } from '../Reducer/jsPlumbInstance';

export default () => {
  const [state] = useJsPlub();
  const { nodes } = state;
  const onGetFlowInfo = () => {
    message.info(JSON.stringify({ nodes }));
  };
  const onSave = () => {};

  return (
    <div>
      <Button onClick={onGetFlowInfo}>获取流程信息</Button>
      <Button onClick={onSave}>保存</Button>
    </div>
  );
};
