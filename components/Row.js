import React, {Component} from 'react';
import {View, TouchableHighlight, ToastAndroid} from 'react-native';

import styles from '../Styles';
import {COLUMNS} from './constants';

const Row = ({rowNumber}) => {
  let row = [];
  for (let col = 0; col < COLUMNS; col++) {
    row.push(<Cell key={col} position={{rowNumber, col}} />);
  }

  return <View style={styles.row}>{row}</View>;
};

export default Row;

// if (this.state[index] && this.state[index].player != player) {
//     ToastAndroid.show('wrong move', ToastAndroid.SHORT);
//     return;
// }
