import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {initGrid, clearCellsToCompare, setEmptyCellsToGrid} from '../actions/gameActions';
import CardCellComponent from './CardCellComponent';

const CardGridComponent = ({grid, cellsToCompare, initGrid, rows, cols, clearCellsToCompare, setEmptyCellsToGrid}) => {
    useEffect(() => {
        initGrid(rows, cols);
    }, []);

    if (cellsToCompare.length === 2) {
        if (cellsToCompare[0][1] === cellsToCompare[1][1]) {
            setEmptyCellsToGrid(cellsToCompare);
            clearCellsToCompare();
        } else {
            clearCellsToCompare();
        }
    }
    // console.log(grid);
    return (
        <div className='grid-wrapper' style={{maxWidth: rows * 100}}>
            {grid.length && grid.map((row, rowIndex) => row.map((col, colIndex) =>
                (<CardCellComponent key={`${rowIndex},${colIndex}`} cellCoords={[rowIndex, colIndex]} display={col}/>)))}
        </div>
    );
};

const mapStateToProps = state => ({
    grid: state.game.grid,
    cellsToCompare: state.game.cellsToCompare,
    state: state.game
});

export default connect(mapStateToProps, {initGrid, clearCellsToCompare, setEmptyCellsToGrid})(CardGridComponent);