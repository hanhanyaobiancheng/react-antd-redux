import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './jsTable-style.less';

export default class JsTable extends Component {
    static defaultProps = {
        data: {},
    };

    static propTypes = {
        data: PropTypes.object.isRequired,
    };
    state = {};

    render() {
        const {data} = this.props;
        return (
            <table className="myTable">
                <tbody>
                    <tr>
                        <td>客人</td><td colSpan="2">{data.members}</td>
                        <td>客户名称</td><td colSpan="2">{data.customer}</td>
                    </tr>
                    <tr>
                        <td>入住时间</td><td colSpan="2">{data.arriveAt}</td>
                        <td rowSpan="2">房间</td><td colSpan="2" rowSpan="2">{data.roomNo}</td>
                    </tr>
                    <tr>
                        <td>预离时间</td>
                        <td
                            colSpan="2"
                            style={{borderRight: '1px solid rgba(0,0,0,.3)'}}
                        >
                            {data.leave}
                        </td>
                    </tr>
                    <tr>
                        <td>支付金额</td>
                        <td>{data.money}</td>
                        <td>付款方式</td>
                        <td>{data.payMethod}</td>
                        <td>大写金额</td>
                        <td>壹百元整</td>
                    </tr>
                    <tr>
                        <td>备注</td><td colSpan="3"/>
                    </tr>
                </tbody>
            </table>
        );
    }
}