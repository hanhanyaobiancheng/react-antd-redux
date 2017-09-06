import React, {Component} from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import todoApp from '../redux/reducers/moke-reducers/index'

const store = createStore(todoApp);

export default class TodoList extends Component {
    state = {};

    render () {

        return (
            <Provider store={store}>
                <App/>
            </Provider>
        )
    }
}
