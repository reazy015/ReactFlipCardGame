import React, {useState} from 'react';
import {connect} from 'react-redux';
import {setGridCell} from '../actions/gameActions';

const CardCellComponent = ({cellCoords, display, setGridCell, image, id}) => {
    const [opened, setOpened] = useState(false);

    const onClickHandle = () => {
        // console.log(id);
        if(!opened) {
            setGridCell(id);
            return setOpened(!opened);
        }
        setGridCell(id);
        setOpened(!opened);
    };

    if(display) {
        return <div onClick={onClickHandle} style={{width: 100, height: 100, backgroundImage: `url(${image})`}} />;

    } else {
        return <div style={{width: 100, height: 100}}>Solved</div>;
    }
};

export default connect(null, {setGridCell})(CardCellComponent);