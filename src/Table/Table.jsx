import React, {Component} from 'react';
import {Table} from 'antd';

export default class Display extends Component {
    state = {};

    render() {
        return (
            <Table
                dataSource={[{classroom: '201', class: 'english', time: '2017-08-13'}]}
                columns={[
                    {
                        title: '教室',
                        dataIndex: 'classroom',
                        key: 'classroom',
                     },
                    {
                        title: '科目',
                        dataIndex: 'class',
                        key: 'class',
                    },
                    {
                        title: '時間',
                        dataIndex: 'time',
                        key: 'time',
                    },
                    {
                        title: '操作',
                        dataIndex: 'operation',
                        render: (text, record) => (
                            <a>删除{record.classroom}</a>
                        ),
                    }
                ]}

            />
        );
    }
}