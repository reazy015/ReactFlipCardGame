import {INIT_GAME, SET_GRID_CELL_TO_COMPARE, SET_GRID_EMPTY_CELLS, CLEAR_GRID_CELL_TO_COMPARE} from '../actionTypes';
import {getNoNRepeatingRandomNumbersArray} from '../utils/utilFunctions';
import axios from 'axios';

export const initGrid = (rows, cols) => dispatch => {
    const requestNumber = getNoNRepeatingRandomNumbersArray(8);
    console.log(requestNumber);
    try {
        requestNumber.forEach(number => {
            axios.get(`https://i.picsum.photos/id/${number}/100/100.jpg`)
                .then((data) => console.log(data));
        })
    } catch (e) {
        console.log(e.message);
    }
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