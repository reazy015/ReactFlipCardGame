import React from 'react';
import GameStartConfigComponent from './GameStartConfigComponent';
import CardGridComponent from './CardGridComponent';

const MainGameScreenComponent = () => {
    return (
        <div className='main-game-screen'>
            <GameStartConfigComponent/>
            <CardGridComponent/>
        </div>
    );
};

export default MainGameScreenComponent;