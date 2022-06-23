import React, { useEffect } from 'react';
import { useJsPlub } from '../Reducer/jsPlumbInstance';
import Icon from './Icon';
import TargetContainer from '../Components/drag/targetContainer';

import styles from '../style.less';

export default ({ checkNode }) => {
  const [state, setState] = useJsPlub();

  const { jsPlumbInstance, nodes } = state;
  useEffect(() => {
    jsPlumbInstance.ready(() => {
      jsPlumbInstance.reset();
      jsPlumbInstance.setContainer('paint');
    });
  }, []);

  // 拖动后添加节点
  const appendNode = item => {
    const nodeInfo = item.getItem();
    const { x, y } = item.getClientOffset();
    const { nodeType, applyNode } = nodeInfo;
    const nodeId = `${nodeType}${nodes.length}`;
    const paintElement = document.getElementById('paint'); // 拖放元素左右边距 减去画布的左右边距， 留下相对于画布的绝对定位
    nodes.push({ top: y - paintElement.offsetTop - 15, left: x - paintElement.offsetLeft - 70, nodeId, ...nodeInfo });
    setState({ type: 'node-add', payload: [...nodes] });
    applyNode(nodeId);
  };

  return (
    <TargetContainer dragEnd={appendNode}>
      <div id="paint" className={styles.paint}>
        {nodes.map(n => (
          <div
            key={n.nodeId}
            id={n.nodeId}
            className={styles.flow_card}
            style={{
              top: n.top,
              left: n.left,
            }}
            onClick={() => checkNode(n)}
          >
            <div className={styles.icon}>{n.icon && <Icon type={n.icon} color="#ee7721" />}</div>
            <div className={styles.title}>{n.title}</div>
          </div>
        ))}
      </div>
    </TargetContainer>
  );
};
