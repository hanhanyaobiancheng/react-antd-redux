import React, {Component} from 'react';
import allStyles from './style.less';

export default class Index extends Component {
    state = {};

    render() {
        console.log(allStyles);
        return (
            <div>
                <div className={allStyles.wrap}>
                    <h2>这就是一个背景色渐变的页面，纯css效果!!!</h2>
                </div>
            </div>
        );
    }
}
