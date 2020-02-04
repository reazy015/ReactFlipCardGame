import React, {useState} from 'react';
import {connect} from 'react-redux';
import {setGridCell} from '../actions/gameActions';

const CardCellComponent = ({cellCoords, display, setGridCell}) => {
    const [opened, setOpened] = useState(false);

    const onClickHandle = () => {
        console.log(cellCoords);
        if(!opened) {
            setGridCell(cellCoords, 'test');
            return setOpened(!opened);
        }
        setGridCell(cellCoords, 0);
        setOpened(!opened);
    };

    if(display) {
        return (
            <div onClick={onClickHandle} style={{width: 100, height: 100}}>
                <img src="" alt="cell-img"/>
            </div>
        );
    } else {
        return (
            <div style={{width: 100, height: 100}}>Solved</div>
        )
    }
};

export default connect(null, {setGridCell})(CardCellComponent);