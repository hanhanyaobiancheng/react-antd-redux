import todos from './todos';
import visibilityFilter from './visibilityFilter';
import { combineReducers } from 'redux';

// 运用redux所提供的combineReducers将分散的reducers组合成一个
const todoApp = combineReducers({
    todos,
    visibilityFilter,
});

export default todoApp;
