import React, { Component } from 'react';
import { View } from 'react-native';

import Table from './Table'
import styles from '../Styles'


const Board = () => {
    const board = <Table rows={15} cols={7} />
    return (
        <View style={styles.sectionContainer}>
            {board}
        </View>
    )
}

export default Board;