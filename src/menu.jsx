import React, {Component} from 'react';
import {Menu,Icon} from 'antd';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';
import Test from './test';
import WillDo from './whatTodo/index'
import Display from './Table/Table'
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
                                Antd Table
                                <Link to="/antd/table"/>
                            </Menu.Item>
                        </SubMenu>
                    </Menu>
                </div>
                <div className="content">
                    <Route path="/test" component={Test}/>
                    <Route path="/todo" component={WillDo}/>
                    <Route path="/antd/table" component={Display}/>
                </div>
            </div>
        </Router>
        )
    }
}
