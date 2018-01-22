import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Card} from 'antd';
import {setCurrentUser} from '../commons/commonFunctions';
import styles from  './home.less';
import a from '../home/1514430994794.jpg';
import b from './1514431050389.jpg';
import c from './123123123.jpg';
import d from './efesfse.jpg';
import e from './sfggffg.jpg';
import f from './timg.jpg';
import g from './timg4.jpg';
import h from './timg5.jpg';
import i from './timg6.jpg';
import j from './timg7.jpg';
import k from './timg8.jpg';


export default class Home extends Component {
    state = {
        imgUrl: a,
    };

    pictureIndex = 0;

    componentDidMount() {
        const backPicUrl = [a, b, c, d, e, f, g, h, i, j, k];
        // const backPicUrl = ['../home/1514430994794.jpg', './1514431050389.jpg'];

        setInterval(() => {
            // const num = getRangeNum(0, 10);
            // console.log(this.pictureIndex);
            if (this.pictureIndex > 10) {
                this.pictureIndex = 0;
            }

            this.setState({imgUrl: backPicUrl[this.pictureIndex++]});
            }, 3000)
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