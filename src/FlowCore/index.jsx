import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import NodeForm from './Components/nodeForm';
import NodePanel from './Components/nodePanel';
import Paint from './Components/paint';
import ToolBar from './Components/toolbar';
import JsPlubPriver from './Reducer/jsPlumbInstance';

import styles from './style.less';

export default () => {
  const [checkedNode, setCheckedNode] = useState({});
  return (
    <JsPlubPriver>
      <div className={styles.toolbar}>
        <ToolBar />
      </div>
      <div className={styles.mainContent}>
        <DndProvider backend={HTML5Backend}>
          <div className={styles.left}>
            <NodePanel />
          </div>
          <div className={styles.center} id="parent">
            <Paint checkNode={setCheckedNode} />
          </div>
          <div className={styles.right}>
            <NodeForm curNode={checkedNode} />
          </div>
        </DndProvider>
      </div>
    </JsPlubPriver>
  );
};
