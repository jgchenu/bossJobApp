import React from 'react';
import ReactDOM from 'react-dom';
import {
    createStore,
    applyMiddleware
} from 'redux'
import thunk from 'redux-thunk'
import {
    counter,
    addGun,
    removeGun
} from './reduxs'
import App from './App.jsx';
const store = createStore(counter, applyMiddleware(thunk))

function render() {
    ReactDOM.render( < App store = {
            store
        }
        addGun = {
            addGun
        }
        removeGun = {
            removeGun
        }
        /> , document.getElementById('root'));
    }
    render();
    store.subscribe(render);