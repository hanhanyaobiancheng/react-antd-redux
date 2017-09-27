import {DateText} from '../react/test';
import WillDo from '../whatTodo/index'
import EditTable from '../table/EditTable';
import ReactDomEvent from '../react/react-ref'
import AntdForm from '../form/form';
import TodoList from '../todoList/TodoList';

export const menuData = [
    {
        key: '1',
        title: 'redux',
        icon: 'mail',
        children: [
            {
                key: '1-1',
                title: 'redux test',
                path: '/test',
                icon: 'setting',
                component: DateText,
            },
            {
                key: '1-2',
                title: 'What to do',
                path: '/todo',
                icon: 'setting',
                component: WillDo,
            },
            {
                key: '1-3',
                title: 'antd table',
                path: '/antd-table',
                icon: 'setting',
                component: EditTable,
            },
            {
                key: '1-4',
                title: 'react dom event',
                path: '/react-dom',
                icon: 'setting',
                component: ReactDomEvent,
            },
            {
                key: '1-5',
                title: 'antd form',
                path: '/antd-form',
                icon: 'setting',
                component: AntdForm,
            },
            {
                key: '1-6',
                title: 'Moke TodoList',
                path: '/moke-todolist',
                icon: 'setting',
                component: TodoList,
            },
        ]
    },
];