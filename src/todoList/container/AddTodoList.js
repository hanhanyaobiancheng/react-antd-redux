import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../../redux/actions/index';

let AddTodoList = ({dispatch}) => {
    let input;
    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault();
                if(!input.value.trim()) return;
                dispatch(addTodo(input.value));
                input.value = '';
            }}>
                <input ref={node => input = node}/>
                <button type="submit">AddTodo</button>
            </form>
        </div>
    )
};

AddTodoList = connect()(AddTodoList);

export default AddTodoList;