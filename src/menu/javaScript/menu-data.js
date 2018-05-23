import Text from '../../react/test';
import WillDo from '../../whatTodo/index'
import EditTable from '../../table/EditTable';
import ReactDomEvent from '../../react/react-ref'
import AntdForm from '../../form/form';
import TodoList from '../../todoList/TodoList';
import Container from '../../react-dnd/dustbin/Container';
import Sortable from '../../react-dnd/sortable/Container';

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
                component: Text,
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
            {
                key: '1-7',
                icon: 'setting',
                title: 'react-dnd',
                path: '/react-dnd',
                component: Container,
            },
            {
                key: '1-8',
                icon: 'setting',
                title: 'react-dnd-sortable',
                path: '/react-dnd-sortable',
                component: Sortable,
            },
        ]
    },
];