import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Card} from 'antd';
import {setCurrentUser} from '../commons/commonFunctions';
import styles from  './home.less';


export default class Home extends Component {
    state = {};

    handleTitleClick = (e) => {
        e = e || window.event;
        const target = e.srcElement || e.target;
        if (target && target.nodeName.toLocaleLowerCase() === 'a') {
            const currentUser = {};
            setCurrentUser(currentUser)
        }
    };
    render() {
        return (
            <div>
                <div className={styles.root}>
                    <div className={styles.content} onClick={this.handleTitleClick}>
                        <Card>
                            <a href="/">blog</a>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Home/>, document.getElementById('root'));