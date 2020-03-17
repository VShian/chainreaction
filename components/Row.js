import React, { Component } from 'react';
import { View, TouchableHighlight, ToastAndroid } from 'react-native';

import styles from '../Styles';


const Cell = ({ id, backgroundColor, onClick }) => {
    return (
        <TouchableHighlight onPress={() => onClick(id)}>
            <View style={[styles.cell, { backgroundColor: backgroundColor }]} />
        </TouchableHighlight>
    );
};

class Row extends Component {
    constructor(props) {
        super(props);
        this.colors = [
            ['powderblue', 'skyblue', 'steelblue'],
            ['lemonchiffon', 'gold', 'goldenrod'],
        ];
        this.state = {};
    }
    onClick = index => {
        const { player } = this.props;
        if (this.state[index] && this.state[index].player != player) {
            ToastAndroid.show('wrong move', ToastAndroid.SHORT);
            return;
        }
        this.setState(prevState => ({
            [index]: {
                player,
                color: prevState[index] ? (prevState[index].color + 1) % 3 : 0,
            },
        }));
        this.props.togglePlayer();
    };
    render() {
        let row = [];
        let backgroundColor;

        const { len } = this.props;

        for (let i = 0; i < len; i++) {
            if (this.state[i]) {
                const colors = this.colors[this.state[i].player];
                backgroundColor = colors[this.state[i].color];
            } else {
                backgroundColor = 'lightgrey';
            }

            row.push(
                <Cell
                    key={i}
                    id={i}
                    backgroundColor={backgroundColor}
                    onClick={this.onClick}
                />,
            );
        }

        return (
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'stretch',
                }}>
                {row}
            </View>
        );
    }
}

export default Row;
