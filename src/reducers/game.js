import {INIT_GAME, SET_GRID_CELL_TO_COMPARE, CLEAR_GRID_CELL_TO_COMPARE, SET_GRID_EMPTY_CELLS} from '../actionTypes';
import {splice2DArray} from '../utils/utilFunctions';
const initialState = {
    grid: [],
    cellsToCompare: []
};

export default (state = initialState, action) => {
    const {type, payload} = action;
    // console.log(payload);
    switch (type) {
        case INIT_GAME:
            return {...state, grid: payload.grid};
        case SET_GRID_CELL_TO_COMPARE:
            return {...state, cellsToCompare: [...state.cellsToCompare, payload.cellsToCompare]};
        case CLEAR_GRID_CELL_TO_COMPARE:
            return {...state, cellsToCompare: []};
        case SET_GRID_EMPTY_CELLS:
            const {payload: {cellsCoords}} = action;
            return {...state, grid: splice2DArray(state.grid, cellsCoords)};
        default:
            return state;
    }
};