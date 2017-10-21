import React, {Component} from 'react';
import {Table, Row, Col} from 'antd';
import moment from 'moment';
import * as accountData from './Account.json';


export default class AccountDetail extends Component {
    state = {
        loading: false,
        data: {},
        dataSource: [],
        expandedRowKeys: [],
    };

    columns = [
        {title: '账务名称', width: 150, key: 'name', dataIndex: 'name'},
        {title: '房间号', width: 80, key: 'roomNo', dataIndex: 'roomNo'},
        {title: '费用金额', width: 80, key: 'consume', dataIndex: 'consume'},
        {title: '付款金额', width: 80, key: 'income', dataIndex: 'income'},
        {title: '退款', width: 80, key: 'pay', dataIndex: 'pay'},
        {
            title: '营业日',
            width: 80,
            key: 'buzDay',
            dataIndex: 'buzDay',
            render: (text) => {
                return text ? moment(text).format('YYYY-MM-DD') : null;
            },
        },
        {
            title: '发生时间',
            width: 130,
            key: 'tradeTime',
            dataIndex: 'tradeTime',
            render: (text) => {
                const year = text && text.slice(0, 4);
                const month = text && text.slice(4, 6);
                const day = text && text.slice(6, 8);
                const hour = text && text.slice(8, 10);
                const minutes = text && text.slice(10, 12);
                const date = `${year}-${month}-${day} ${hour}:${minutes}`;
                return text ? date : null;
            },
        },
        {title: '单据号', width: 200, key: 'paperNo', dataIndex: 'paperNo'},
        {title: '收银员', width: 70, key: 'tradeMan', dataIndex: 'tradeMan'},
        {title: '班次', width: 80, key: 'gradeNo', dataIndex: 'gradeNo'},
        {title: '备注', key: 'remark', dataIndex: 'remark'},
    ];

    componentWillMount() {
        // 获取账务数据
        this.fetchAccountDetail();
    }

    componentDidMount() {
    }

    // 获取账务详情数据
    fetchAccountDetail() {

        // id 登记单id type：1 发生日期 2 账务类型
        let dataSource = [];
        const expandedRowKeys = [];
        let res = accountData;

        if (res.list && res.list.length) {
            dataSource = res.list.map(item => {
                if (!item.id && item.children) {
                    // item.id = item.children.reduce((curr, next) => {
                    //     console.log(123, curr, next);
                    //     return `${curr}${next.id}`;
                    // }, '');
                    item.id = `${item.name}${item.code}`;
                    // console.log(234, item.id);
                }

                item.isTypeRow = true;
                expandedRowKeys.push(item.id);
                return item;
            });
        }
        this.setState({dataSource, expandedRowKeys});
    }

    render() {
        const {
            loading,
            dataSource,
            expandedRowKeys,
        } = this.state;

        return (
            <div>
                <Row>
                    <Col span={24}>
                        <div>
                            <Table
                                expandedRowKeys={expandedRowKeys}
                                onExpandedRowsChange={value => this.setState({expandedRowKeys: value})}
                                loading={loading}
                                columns={this.columns}
                                dataSource={dataSource}
                                pagination={false}
                                rowKey={record => record.id}
                                rowClassName={record => (record.isTypeRow ? 'type-row' : '')}
                                footer={() => {
                                    return (
                                        <div>
                                            <span>总消费：{dataSource.consume}</span>
                                            <span>总收款：{dataSource.income}</span>
                                            <span>总挂账：{dataSource.unpay}</span>
                                            <span>预授权：{dataSource.auth}</span>
                                            <span>应收客人：{dataSource.needpay}</span>
                                        </div>
                                    );
                                }}
                            />
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}
