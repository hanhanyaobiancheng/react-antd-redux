import React, {Component} from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/app'
import todoApp from '../redux/reducers/reducers'

const store = createStore(todoApp);

export default class WhatTodo extends Component {
    render () {
        return (
            <Provider store={store}>
                <App/>
            </Provider>
        )
    }
}
