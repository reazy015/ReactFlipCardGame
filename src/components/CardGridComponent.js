import React from 'react';
import {connect} from 'react-redux';
import {initGrid, clearCellsToCompare, setEmptyCellsToGrid} from '../actions/gameActions';
import CardCellComponent from './CardCellComponent';

const CardGridComponent = ({grid, cellsToCompare, clearCellsToCompare, setEmptyCellsToGrid, dimensionSet, dimension}) => {

    if (cellsToCompare.length === 2) {
        if (cellsToCompare[0] === cellsToCompare[1]) {
            setEmptyCellsToGrid(cellsToCompare);
            clearCellsToCompare();
        } else {
            clearCellsToCompare();
        }
    }

    if(grid.length) {
        return (
            <div className='grid-wrapper' style={{maxWidth: dimension * 100}}>
                {grid.map((row, rowIndex) => row.map((col, colIndex) =>
                    (<CardCellComponent
                        key={`${col.id}${colIndex}`}
                        id={col.id}
                        display={col}
                        image={col.image}
                    />)))}
            </div>
        );
    }

    return null;
};

const mapStateToProps = state => ({
    grid: state.game.grid,
    cellsToCompare: state.game.cellsToCompare,
    dimensionSet: state.game.dimensionSet,
    dimension: state.game.dimension
});

export default connect(mapStateToProps, {initGrid, clearCellsToCompare, setEmptyCellsToGrid})(CardGridComponent);