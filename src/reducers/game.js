import {
    INIT_GAME,
    SET_GRID_CELL_TO_COMPARE,
    CLEAR_GRID_CELL_TO_COMPARE,
    SET_GRID_EMPTY_CELLS,
    SET_GAME_GRID_DIMENSION
} from '../actionTypes';
import {splice2DArray} from '../utils/utilFunctions';
const initialState = {
    grid: [],
    cellsToCompare: [],
    dimensionSet: false
};

export default (state = initialState, action) => {
    const {type, payload} = action;
    // console.log(payload);
    switch (type) {
        case INIT_GAME:
            return {...state, grid: payload.grid};
        case SET_GRID_CELL_TO_COMPARE:
            return {...state, cellsToCompare: [...state.cellsToCompare, payload.idToCompare]};
        case CLEAR_GRID_CELL_TO_COMPARE:
            return {...state, cellsToCompare: []};
        case SET_GRID_EMPTY_CELLS:
            const {payload: {idToRemove}} = action;
            console.log(idToRemove);
            return {...state, grid: splice2DArray(state.grid, idToRemove[0])};
        case SET_GAME_GRID_DIMENSION:
            const {payload: {dimension}} = action;
            console.log(dimension);
            return {...state, dimension, dimensionSet: true};
        default:
            return state;
    }
};