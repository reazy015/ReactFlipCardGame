import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import './App.css';
import MainGameScreenComponent from './components/MainGameScreenComponent';

function App() {
    return (
        <Provider store={store}>
            <div>
                <MainGameScreenComponent />
            </div>
        </Provider>
    );
}

export default App;
