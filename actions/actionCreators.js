import {
    TOGGLE_PLAYER,
    ADD_COLOR,
    INCREMENT_COLOR,
    BURST
} from './actions'


export const togglePlayer = () => {
    return { type: TOGGLE_PLAYER }
}

export const incrementColor = (position) => {
    return {
        type: INCREMENT_COLOR,
        position
    }
}

export const addColor = (position, colorGroup) => {
    return {
        type: ADD_COLOR,
        position,
        colorGroup
    }
}

export const burst = (position) => {
    return {
        type: BURST,
        position
    }
}