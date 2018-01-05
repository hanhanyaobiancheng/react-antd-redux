import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Card} from 'antd';
import {setCurrentUser, getRangeNum} from '../commons/commonFunctions';
import styles from  './home.less';
import a from '../home/1514430994794.jpg';
import b from './1514431050389.jpg';


export default class Home extends Component {
    state = {};

    componentDidMount() {
        const backPicUrl = [a, b];
        // const backPicUrl = ['../home/1514430994794.jpg', './1514431050389.jpg'];

        setInterval(() => {
            const num = getRangeNum(0, 1);
            this.setState({imgUrl: backPicUrl[num]});
            }, 5000)
    }


    handleTitleClick = (e) => {
        e = e || window.event;
        const target = e.srcElement || e.target;
        if (target && target.nodeName.toLocaleLowerCase() === 'a') {
            const currentUser = {};
            setCurrentUser(currentUser)
        }
    };

    render() {
        const {imgUrl} = this.state;
        return (
            <div>
                <div className={styles.root} id="home" style={{backgroundImage: `url(${imgUrl})`}}>
                    {/*<img src={imgUrl} alt="" className={styles.backImg}/>*/}
                    <div className={styles.content} onClick={this.handleTitleClick}>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                        >
                            <a href="/">blog</a>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Home/>, document.getElementById('root'));