import React from 'react';
import DragItem from '../drag/dragItem';
import { useJsPlub } from '../../Reducer/jsPlumbInstance';
import Icon from '../Icon';

import styles from '../../style.less';

export default () => {
  const [state] = useJsPlub();
  const { jsPlumbInstance } = state;

  const applyNode = nodeId => {
    // 流程中渲染节点 需要页面加载完后才能执行， 所以将流程节点渲染放入下一次宏任务中
    setTimeout(() => {
      const common = {
        isSource: false,
        isTarget: true,
        connector: ['Bezier'],
        endpoint: ['Dot', { radius: 5 }],
        paintStyle: { fill: 'lightgray' },
        connectorStyle: { stroke: 'lightgray' },
        connectorOverlays: [['Arrow', { width: 12, length: 12, location: 1 }]],
      };
      jsPlumbInstance.draggable(nodeId, { containment: 'parent' });
      jsPlumbInstance.addEndpoint(
        nodeId,
        {
          anchors: ['Top', 'Bottom', 'Left', 'Right'],
        },
        common
      );
    }, 0);
  };
  const nodeInfo = {
    nodeType: 'end',
    title: '流程结束',
    applyNode,
    icon: 'end',
  };
  return (
    <DragItem nodeInfo={nodeInfo}>
      <div className={styles.flow_card}>
        <div className={styles.icon}>
          <Icon type="end" color="#ee7721" />
        </div>
        <div className={styles.title}>流程结束</div>
      </div>
    </DragItem>
  );
};
