import React, { memo } from 'react';
import { useDrag } from 'react-dnd';

// applyNode 拖动结束后  执行不同流程渲染
export default memo(({ nodeInfo, children }) => {
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: 'box',
      item: { ...nodeInfo },
      collect: monitor => ({
        // 拖动事件回调
        isDragging: monitor.isDragging(),
      }),
    }),
    []
  );
  return (
    <div ref={drag} style={{ opacity: isDragging ? '0.8' : '1' }} role="SourceBox">
      {children}
    </div>
  );
});
