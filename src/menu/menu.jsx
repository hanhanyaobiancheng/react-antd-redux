import React, {Component} from 'react';
import {Menu, Icon} from 'antd';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import {throttle} from 'lodash/function';
import {getWindowSize} from '../commons/GetWindowSize';
import 'antd/dist/antd.css';
import '../App.css';
import {menuData} from './menu-data';

const SubMenu = Menu.SubMenu;

export default class SideMenu extends Component {
    state = {
        windowHeight: '700px',
        openKeys: [], // 要打开的菜单
        selectedKeys: [],  // 当前选中的菜单
    };

    handleWindowResize = () => {
        this.setState({windowHeight: getWindowSize().height});
    };

    componentWillMount() {
        // 当浏览器控制台呼出以后，刷新页面左侧导航的高度会随着浏览器窗口高度的变化而变化
        this.handleWindowResize();

        /**
         * 此处引用lodash中封装的throttle方法，以减少获取浏览器窗口大小的调用次数，以减少操作DOM的次数
         * 翻看了throttle方法的实现原理，里边运用了setTimeout
         * 因此将监听浏览器窗口大小变化的函数从componentDidMount中提到了componentWillMount中使用，
         */
        window.addEventListener('resize', throttle(() => this.handleWindowResize()));
        // const windowSize = getWindowSize();
        // this.setState({windowHeight: windowSize.height});
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

    parentItemKeys = [];
    allParentKeys = []; // 所有的父级菜单
    renderMenuRoute = (data) => {
        return data.map((item) => {
            if (item.children) {
                // TODO 当有三级以上菜单时，只能选中相邻菜单的第一级父菜单
                // 先拿到所有的父级菜单
                if(!this.allParentKeys.find(pk => pk === item.key)) {
                    this.allParentKeys.push(item.key);
                }
                // 先拿到离被选中菜单最近的父级菜单
                if(item.children.find(re => re.key === this.state.selectedKeys.join(','))) {
                    if(!this.parentItemKeys.find(re => re === item.key)) {
                        this.parentItemKeys.push(item.key);
                    }
                }
                console.log('parentKeys', this.parentItemKeys);
                console.log('allparentKeys', this.parentItemKeys);

                // todo 再找出父级菜单的父级菜单
                return this.renderMenuRoute(item.children);
            }
            const openKeys = this.parentItemKeys;
            // console.log(openKeys);
            return (
                // 这里的match是看地址栏的url与当前选中的菜单的路由是否匹配，若匹配match为true
                <Route path={item.path} children={({match}) => {
                    if (match) {
                        if (!this.state.selectedKeys || !this.state.selectedKeys.find(key => key === item.key)) {
                            setTimeout(() => {
                                // console.log(123, openKeys);
                                this.setState({
                                        openKeys,
                                        selectedKeys: [item.key]
                                    },
                                );
                            });
                        }
                        // 这里拿到当前菜单数据后可以做面包屑导航
                        // console.log('current menu data ', item);
                        // actions.setCurrentMenu(item);
                    }
                    return null;
                }}/>
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
    };

    render() {
        const {windowHeight} = this.state;

        // console.log(985, this.state.selectedKeys);
        return (
            <Router>
                <div>
                    <div className="menu">
                        {this.renderMenuRoute(menuData)}
                        <Menu
                            openKeys={this.state.openKeys}
                            onOpenChange={openKeys => this.setState({openKeys})}
                            selectedKeys={this.state.selectedKeys}
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
