import React, {Component} from 'react';
import './jsTable-style.less';

export default class JsTable extends Component {
    state = {};

    render() {
        return (
            <table className="myTable">
                <tbody>
                    <tr>
                        <td>客人</td><td colSpan="2">唐久、唐七</td>
                        <td>客户名称</td><td colSpan="2">中国太阳很大集团</td>
                    </tr>
                    <tr>
                        <td>入住时间</td><td colSpan="2">2017-10-17 12:00</td>
                        <td rowSpan="2">房间</td><td colSpan="2" rowSpan="2">A201</td>
                    </tr>
                    <tr>
                        <td>预离时间</td>
                        <td
                            colSpan="2"
                            style={{borderRight: '1px solid rgba(0,0,0,.3)'}}
                        >
                            2017-10-18
                        </td>
                    </tr>
                    <tr>
                        <td>支付金额</td>
                        <td>100.00</td>
                        <td>付款方式</td>
                        <td>预授权</td>
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