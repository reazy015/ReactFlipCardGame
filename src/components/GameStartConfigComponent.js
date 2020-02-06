import React from 'react';
import {connect} from 'react-redux';
import {setGameGridDimension, initGrid} from '../actions/gameActions';

const GameStartConfigComponent = ({setGameGridDimension, dimensionSet, initGrid}) => {
    const possibleDimensions = [4,6,8];

    const onClickHandler = (e, dimension) => {
        e.preventDefault();
        setGameGridDimension(dimension);
        initGrid(dimension, dimension); //TODO refactor initGrid action to take one param
    };

    if(!dimensionSet) {
        return (
            <div style={{textAlign: 'center'}}>
                <p>Choose grid dimension please</p>
                <div>
                    {possibleDimensions.map(dimension => <button key={dimension} onClick={e => onClickHandler(e, dimension)}>{`${dimension} x ${dimension} grid`}</button>)}
                </div>
            </div>
        );
    }

    return null;
};

const mapStateToProps = state => ({
    dimensionSet: state.game.dimensionSet
});

export default connect(mapStateToProps, {setGameGridDimension, initGrid})(GameStartConfigComponent);