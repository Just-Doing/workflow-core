import React from 'react';
import { Start, Case, End, Process } from './NodeType';

import styles from '../style.less';

export default () => (
  <div className={styles.nodePanel}>
    <Start />
    <Case />
    <Process />
    <End />
  </div>
);
