import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

export default class TodoList extends Component {
    static defaultProps = {
        todos: [],
    };

    state = {};

    static propTypes = {
        todos: PropTypes.array.isRequired,
        onTodoClick: PropTypes.func.isRequired,
    };

    render() {
        const {todos} = this.props;
        console.log(todos);
        return (
            <ul>
                {
                    todos.map(item =>
                        <Todo
                            key={item.id}
                            {...item}
                            onClick={() => this.props.onTodoClick(item.id)}
                        />
                    )
                }
            </ul>
        );
    }
}
