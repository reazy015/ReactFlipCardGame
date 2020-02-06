import {INIT_GAME, SET_GRID_CELL_TO_COMPARE, SET_GRID_EMPTY_CELLS, CLEAR_GRID_CELL_TO_COMPARE, SET_GAME_GRID_DIMENSION} from '../actionTypes';
import {getNoNRepeatingRandomNumbersArray, getArrayFilledWithRandomImages} from '../utils/utilFunctions';

export const initGrid = (rows, cols) => dispatch => {
    const requestNumber = getNoNRepeatingRandomNumbersArray((rows * cols) / 2);
    const randomImagesArray = [];

    requestNumber.forEach(number => {
        randomImagesArray.push({
            id: number,
            src: `https://i.picsum.photos/id/${number}/100/100.jpg`
        });
    });

    const gridArray = getArrayFilledWithRandomImages(randomImagesArray, new Array(rows).fill(new Array(cols).fill(true)));

    dispatch({
        type: INIT_GAME,
        payload: {
            grid: gridArray
        }
    })
};

export const setGridCell = (idToCompare) => dispatch => {
    // console.log(idToCompare);
    dispatch({
        type: SET_GRID_CELL_TO_COMPARE,
        payload: {
            idToCompare
        }
    });
};

export const clearCellsToCompare = () => dispatch => {
    dispatch({
        type: CLEAR_GRID_CELL_TO_COMPARE,
        payload: {}
    });
};

export const setEmptyCellsToGrid = (idToRemove) => dispatch => {
    dispatch({
        type: SET_GRID_EMPTY_CELLS,
        payload: {
            idToRemove
        }
    });
};

export const setGameGridDimension = (number) => dispatch => {
    dispatch({
        type: SET_GAME_GRID_DIMENSION,
        payload: {
            dimension: number
        }
    });
};
