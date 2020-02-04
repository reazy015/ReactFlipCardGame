import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import './App.css';
import CardGridComponent from './components/CardGridComponent';

function App() {
    return (
        <Provider store={store}>
            <div>
                <CardGridComponent rows={5} cols={5}/>
            </div>
        </Provider>
    );
}

export default App;
