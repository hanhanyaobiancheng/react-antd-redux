
const todo = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                completed: false,
            };
        case 'TOGGLE_TODO':
            if (state.id !== action.id) return state;
            return Object.assign({}, state, {
                completed: !state.completed,
            });
        default: return state;
    }
};
/**  注意此处default默认返回state，
 *   当页面没有li项的时候，state的值是undefined，
 *   需要给state默认值[],否则会报错
 */
const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                todo(undefined, action),
            ];
        case 'TOGGLE_TODO':
            return state.map(item => todo(item, action));
        default: return state;
    }
};

export default todos;