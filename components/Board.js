import React, { Component } from 'react';
import { View } from 'react-native';

import Table from './Table'
import styles from '../Styles'


const Board = () => {
    return (
        <View style={styles.sectionContainer}>
            <Table/>
        </View>
    )
}

export default Board;