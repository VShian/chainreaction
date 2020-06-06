import React from 'react';
import { COLUMNS, ROWS } from '../components/constants';


const initialState = {
    player: 0,
    cells: new Array(ROWS).fill({}).map(() => new Array(COLUMNS).fill({})),
}
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_PLAYER:
            return { ...state, player: state.player === 0 ? 1 : 0 }
        case INCREMENT_COLOR:
            const { cells } = state;
            const { row, col } = action.position;
            const cellObj = cells[row][col];
            return {
                ...state,
                cells: [
                    ...cells.slice(0, row),
                    [
                        ...cells[row].slice(0, col),
                        { ...cellObj, color: cellObj.color + 1 },
                        ...cells[row].slice(col)
                    ],
                    ...cells.slice(row + 1)
                ]
            }
        case ADD_COLOR:
            const { cells } = state;
            const { row, col } = action.position;
            const { colorGroup } = action
            const cellObj = cells[row][col];
            return {
                ...state,
                cells: [
                    ...cells.slice(0, row),
                    [
                        ...cells[row].slice(0, col),
                        { ...cellObj, colorGroup, color: 0 },
                        ...cells[row].slice(col)
                    ],
                    ...cells.slice(row + 1)
                ]
            }
        case BURST:
            return state
        default:
            return state
    }
}

export default rootReducer;