import React, { Component } from 'react';
// import Home from './home/Home';
import SideMenu from './menu/javaScript/menu';
import './App.css';

export default class App extends Component {
    render() {
        return (
            <div>
                {/*<div className="mask" style={{height: window.innerHeight, width: window.innerWidth}}>123</div>*/}
                <SideMenu/>
            </div>
        );
    }
}
