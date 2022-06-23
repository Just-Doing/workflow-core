import React, { useState, memo, useCallback } from 'react';
import { useDrop } from 'react-dnd';

const TargetBox = ({ onDrop, children }) => {
  const [{ isOver, draggingColor, canDrop }, drop] = useDrop(
    () => ({
      accept: ['box'],
      drop(_item, monitor) {
        onDrop(monitor);
        return undefined;
      },
      // 拖动时状态设置
      collect: monitor => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
        draggingColor: monitor.getItemType(),
      }),
    }),
    [onDrop]
  );

  return (
    <div ref={drop} style={{ height: '100%' }} role="TargetBox">
      {children}
    </div>
  );
};

export default props => {
  const { dragEnd } = props;
  const handleDrop = useCallback(item => {
    dragEnd(item);
  }, []);
  return <TargetBox {...props} onDrop={handleDrop} />;
};
