import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './Components/App';
import reducer from './Reducers/Index';

const store=createStore(reducer);


render(

    <Provider store={store}>

    <App/>
    </Provider>,
    document.getElementById('root')

)