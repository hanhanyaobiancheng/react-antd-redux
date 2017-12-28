import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Card} from 'antd';
// import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import './home.less';


export default class Home extends Component {
    state = {};

    render() {
        return (
            <div>
                <div className="root">
                    <div className="content">
                        <Card>
                            <a href="Home.html">blog</a>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Home/>, document.getElementById('root'));