import React, {Component} from 'react';
import {SimpleHoc} from '../form/SimpleHoc';
import * as Pubsub from '../commons/EventEmiter';


@SimpleHoc
export default class ReactEventDom extends Component {
    state = {
        showATab: false,
    };

    componentDidMount() {
        document.addEventListener('mouseover', e => {
            const target = e.target || e.srcElement;
            const className = target.getAttribute('class');
            if (className === 'p') {
                // this.text.classList.value = 'p-color';
            }
        });

        document.onkeydown = e => {
            e = window.event;
            // if(e) alert(`你按下了键盘上的${e.key}键`)
            console.log(e);
        };
        const data = (data) => {
            console.log(data);
        };

        const changeState = () => {
            console.log('我是publish发出消息以后被调用的');
        };
        Pubsub.subscribe('test', data);
        Pubsub.subscribe('test', data);
        Pubsub.subscribe('test', changeState);
    }

    handleClick = () => {
        this.text.style.background = this.text.style.background === 'red' ? 'green' : 'red' ;
        console.log(window.location);
    };

    render() {
        return (
            <div>
                <p
                    style={{width: '100px', height: "50px", border: "1px solid red"}}
                    onClick={this.handleClick}
                    ref={x => this.text = x}
                    className="p"
                >
                    hello
                </p>
                {/** 高阶组件方法测试 */}
                <a
                    onClick={this.props.handleClick}
                >
                    测试高阶组件
                </a>
            </div>
        )
    }
}