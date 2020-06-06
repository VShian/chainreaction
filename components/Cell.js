import React, {Component} from 'react';
import {View, TouchableHighlight, ToastAndroid} from 'react-native';

import styles from '../Styles';

const Cell = ({position, color, incrementColor, addColor}) => {
  const onClick = () => {
    color ? incrementColor(position) : addColor(position);
  };
  return (
    <TouchableHighlight onPress={onClick}>
      <View style={[styles.cell, {backgroundColor: color || 'lightgrey'}]} />
    </TouchableHighlight>
  );
};

const mapDispatchToProps = dispatch => ({
  incrementColor: position => dispatch(incrementColor(position)),
  addColor: position => dispatch(addColor(position)),
});

export default connect(Cell)(null, mapDispatchToProps);
