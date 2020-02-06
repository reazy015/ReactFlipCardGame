import React, {useState} from 'react';
import {connect} from 'react-redux';
import {setGridCell} from '../actions/gameActions';

const CardCellComponent = ({display, setGridCell, image, id}) => {
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

    const clearOpenedState = () => {
        setOpened(false);
    };

    if(display) {
        return (
            <div onClick={() => onClickHandle(id)} className={opened ? 'card is-flipped' : 'card'} style={{width: 100, height: 100}}>
                <div className='back' style={{backgroundImage: `url(${image})`}} />
                <div className='front' />
            </div>
        );

    } else {
        return <div style={{width: 100, height: 100}} className='card'>Solved</div>;
    }
};

export default connect(null, {setGridCell})(CardCellComponent);
