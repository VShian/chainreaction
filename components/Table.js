import React, { Component } from 'react';
import { View } from 'react-native';

import Row from './Row'


class Table extends Component {
    constructor(props) {
        super(props);
        this.state = { player: 0 }
    }
    togglePlayer = () => {
        this.setState(prevState => ({
            player: (prevState.player + 1) % 2
        }));
    }
    render() {
        let table = [];
        const { player } = this.state;
        const { rows, cols } = this.props;

        for (let i = 0; i < rows; i++) {
            table.push(
                <Row
                    key={i}
                    len={cols}
                    player={player}
                    togglePlayer={this.togglePlayer}
                />
            )
        }

        return (
            <View style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'stretch',
            }}>
                {table}
            </View>
        );
    }
}

export default Table;