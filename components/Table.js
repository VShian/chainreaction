import React from 'react';
import {View} from 'react-native';

import styles from '../Styles';
import Row from './Row';
import {ROWS} from './constants';

const Table = () => {
  const table = [];
  for (let row = 0; row < ROWS; row++) {
    table.push(<Row key={row} rowNumber={row} />);
  }

  return <View style={styles.column}>{table}</View>;
};

export default Table;
