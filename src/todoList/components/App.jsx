import React, {Component} from 'react';
import AddTodoList from "../container/AddTodoList";
import VisibleTodoList from '../container/VisibleTodoList';
import Foot from './Foot';

export default class App extends Component {
    state = {};

    render() {
        return (
            <div>
                <AddTodoList/>
                <VisibleTodoList/>
                <Foot/>
            </div>
        );
    }
}
