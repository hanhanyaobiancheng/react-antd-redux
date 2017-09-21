import React, {Component} from 'react';
import {Menu, Icon} from 'antd';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import {getWindowSize} from '../commons/GetWindowSize';
import 'antd/dist/antd.css';
import '../App.css';
import {menuData} from './menu-data';

const SubMenu = Menu.SubMenu;

export default class SideMenu extends Component {
    state = {
        windowHeight: '700px',
    };

    handleWindowResize = () => {
        this.setState({windowHeight: getWindowSize().height});
    };

    componentDidMount() {
        // 当浏览器控制台呼出以后，刷新页面左侧导航的高度会随着浏览器窗口高度的变化而变化
        window.addEventListener('resize', this.handleWindowResize);
    }

    componentWillUnmount() {
        // 组件卸载的时候解除事件监听
        window.removeEventListener('resize', this.handleWindowResize);
    }

    renderTreeNodes = (data) => {
        return data.map((item) => {
            if (item.children) {
                return (
                    <SubMenu key={item.key} title={<span><Icon type={item.icon}/><span>{item.title}</span></span>}>
                        {this.renderTreeNodes(item.children)}
                    </SubMenu>
                );
            }
            return (
                <Menu.Item key={item.key}>
                    <Link to={item.path}><Icon type={item.icon}/>{item.title}</Link>
                </Menu.Item>
            );
        });
    };

    renderRoutes = (data) => {
        return data.map((item) => {
            if (item.children) {
                return this.renderRoutes(item.children);
            }
            return (
                <Route path={item.path} component={item.component}/>
            );
        });
    }

    render() {
        const {windowHeight} = this.state;

        return (
            <Router>
                <div>
                    <div className="menu">
                        <Menu
                            style={{width: 240, height: windowHeight}}
                            mode="inline"
                        >
                            {this.renderTreeNodes(menuData)}
                        </Menu>
                    </div>
                    <div className="content">
                        {this.renderRoutes(menuData)}
                    </div>
                </div>
            </Router>
        )
    }
}
