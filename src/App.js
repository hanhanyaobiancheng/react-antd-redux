import React, { Component } from 'react';
// import Home from './home/Home';
import {getCurrentUser, toHome} from './commons/commonFunctions';
import SideMenu from './menu/javaScript/menu';
import './App.css';

export default class App extends Component {

    componentWillMount() {
        const currentUser = getCurrentUser();
        if (!currentUser) {
            return toHome();
        }
    }

    render() {
        return (
            <div>
                {/*<div className="mask" style={{height: window.innerHeight, width: window.innerWidth}}>123</div>*/}
                <SideMenu/>
            </div>
        );
    }
}
