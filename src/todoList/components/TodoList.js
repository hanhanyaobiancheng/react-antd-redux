import Todo from './Todo';

const TodoList = ({todos, onTodoClick}) => (
    <ul>
        {
            todos.map(item => <Todo
                key={item.id}
                {...item}
                onClick={() => onTodoClick(item.id)}
            />)
        }
    </ul>
);

export default TodoList;