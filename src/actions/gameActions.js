import {INIT_GAME, SET_GRID_CELL_TO_COMPARE, SET_GRID_EMPTY_CELLS, CLEAR_GRID_CELL_TO_COMPARE} from '../actionTypes';

export const initGrid = (rows, cols) => dispatch => {
    dispatch({
        type: INIT_GAME,
        payload: {
            grid: new Array(rows).fill(new Array(cols).fill(true))
        }
    })
};

export const setGridCell = (cellsToCompare, value) => dispatch => {
    dispatch({
        type: SET_GRID_CELL_TO_COMPARE,
        payload: {
            cellsToCompare,
            value
        }
    });
};

export const clearCellsToCompare = () => dispatch => {
    dispatch({
        type: CLEAR_GRID_CELL_TO_COMPARE,
        payload: {}
    });
};

export const setEmptyCellsToGrid = (cellsCoords, value) => dispatch => {
    dispatch({
        type: SET_GRID_EMPTY_CELLS,
        payload: {
            cellsCoords
        }
    })
};