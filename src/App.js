import React, { Component } from 'react';
import SideMenu from './menu';
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
