import React from 'react';
import { Collapse, Row, Col, Input, Button } from 'antd';
import { useJsPlub } from '../Reducer/jsPlumbInstance';

const { Panel } = Collapse;

export default ({ curNode }) => {
  const [state, setState] = useJsPlub();
  const { nodes } = state;

  const onSaveNode = () => {
    const editNodeInx = nodes.findIndex(n => n.nodeId === curNode.nodeId);
    nodes.splice(editNodeInx, 1, curNode);
    setState({ type: 'node-add', payload: [...nodes] });
  };

  return (
    <Collapse activeKey="1">
      <Panel header="编辑节点" key="1" showArrow={false}>
        <Row>
          <Col span={8}>节点类型：</Col>
          <Col span={16}>
            <Input value={curNode.nodeType} />
          </Col>
        </Row>
        <Row style={{ marginTop: 10 }}>
          <Col span={8}>图标：</Col>
          <Col span={16}>
            <Input value={curNode.icon} />
          </Col>
        </Row>
        <Row style={{ marginTop: 10 }}>
          <Col span={8}>节点名称：</Col>
          <Col span={16}>
            <Input onChange={v => (curNode.title = v.target.value)} key={curNode.nodeId} defaultValue={curNode.title} />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Button onClick={onSaveNode} type="primary">
              保存
            </Button>
          </Col>
        </Row>
      </Panel>
    </Collapse>
  );
};
