import { connect } from 'react-redux';
import { toggleTodo } from '../../redux/actions';
import TodoList from '../components/TodoList';

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_COMPLETED':
            return todos.filter(item => item.completed);

        case 'SHOW_ACTIVE':
            return todos.filter(item => !item.completed);
    }
};

const mapStateToProps = (state) => {
    return {
        todos: getVisibleTodos(state.todos, state.visiblityFilter),
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispach(toggleTodo(id));
        }
    }
};

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps,
)(TodoList);