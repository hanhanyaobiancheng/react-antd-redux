import React, {Component} from 'react';
import {Menu,Icon} from 'antd';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';
import {DateText} from './test';
import WillDo from './whatTodo/index'
import EditTable from './Table/EditTable';
import ReactDomEvent from './react/react-ref'
import {MakeRoomCard} from './form/form';
import TodoList from './todoList/TodoList';
import 'antd/dist/antd.css';
import './App.css'

const SubMenu = Menu.SubMenu;

export default class SideMenu extends Component {
    render () {
        return (
        <Router>
            <div>
                <div className="menu">
                    <Menu
                        style={{width:240,height:window.innerHeight}}
                        mode="inline"
                    >
                        <SubMenu key="1" title={<sapn><Icon type="mail"/><span>redux</span></sapn>}>
                            <Menu.Item key="1-1">
                                redux test
                                <Link to="/test"/>
                            </Menu.Item>
                            <Menu.Item key="1-2">
                                What to do
                                <Link to="/todo"/>
                            </Menu.Item>
                            <Menu.Item key="1-3">
                                antd table
                                <Link to="/antd-table"/>
                            </Menu.Item>
                            <Menu.Item key="1-4">
                                react dom event
                                <Link to="/react-dom"/>
                            </Menu.Item>
                            <Menu.Item key="1-5">
                                antd form
                                <Link to="/antd-form"/>
                            </Menu.Item>
                            <Menu.Item key="1-6">
                                Moke TodoList
                                <Link to="/moke-todolist"/>
                            </Menu.Item>
                        </SubMenu>
                    </Menu>
                </div>
                <div className="content">
                    <Route path="/test" component={DateText}/>
                    <Route path="/todo" component={WillDo}/>
                    <Route path="/antd-table" component={EditTable}/>
                    <Route path="/react-dom" component={ReactDomEvent}/>
                    <Route path="/antd-form" component={MakeRoomCard}/>
                    <Route path="/moke-todolist" component={TodoList}/>
                </div>
            </div>
        </Router>
        )
    }
}
