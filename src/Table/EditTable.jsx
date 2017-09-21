import React, {Component} from 'react';
import {Table, Popconfirm, Button} from 'antd';
import EditTableCell from './EditTableCell';
import {SimpleHoc} from '../form/SimpleHoc';
import TestArrangeModal from './TestArrangeModal';
import * as Pubsub from '../commons/PubSub';

@SimpleHoc
export default class EditTable extends Component {
    state = {
        testArrangeModalVisible: false,
        testArrangeModalData: {},
        dataSource: [{classRoom: 'A201', teacher: '严蔚敏', course: '数据结构与算法', time: '20170819', key: '1', id: '1344'}],
    };

    componentDidMount() {
        let classNameArr = [];
        document.addEventListener('mouseover', e => {
            e.preventDefault();
            const target = e.target || e.srcElement;
            const className = target.getAttribute('class');
            classNameArr.push(className);
        });
        Pubsub.publish('test',{name: '我是Pubsub.publish发布的消息'});
    }

    onCellChange = (index, key) => {
        return (value) => {}
    };

    columns = [
        {title:'教室', dataIndex: 'classRoom', key: 'classRoom'},
        {title:'教师', dataIndex: 'teacher', key: 'teacher'},
        {title:'科目', dataIndex: 'course', key: 'course'},
        {
            width: '30%',
            title:'时间',
            dataIndex: 'time',
            key: 'time',
            render: (text, record, index) => (
                <EditTableCell
                    value={text}
                    onChange={this.onCellChange(index, 'time')}
                />
            )
        },
        {
            title: '操作',
            key: 'operator',
            render: (text, record) => (
                <span>
                    <a
                        onClick={() => this.setState({
                            testArrangeModalVisible: true,
                            testArrangeModalData: record,
                        })}
                    >
                        编辑
                    </a>
                    <Popconfirm
                        title={`确定要删除${record.classRoom}教室吗`}
                        onConfirm={() => {this.setState({dataSource: []})}}
                    >
                        <a
                            style={{marginLeft: '5px', color: 'red'}}
                        >
                            删除
                        </a>
                    </Popconfirm>
                </span>
            )
        },
    ];

    handleTestArrangeModalSubmit = (values) => {
        console.log(values);
    };

    render() {
        // console.log(this.props.say); // 测试高阶组件@SimpleHOC中封装的方法
        const {testArrangeModalVisible, testArrangeModalData, dataSource} = this.state;
        const title = testArrangeModalData.id ? `修改${testArrangeModalData.classRoom}` : '添加';
        return (
            <div>
                <Button
                    type="primary"
                    onClick={() => {this.setState({
                        testArrangeModalVisible: true,
                        testArrangeModalData: {},
                    })}}
                >
                    添加
                </Button>
                <Table
                    columns={this.columns}
                    dataSource={dataSource}
                />
                <div>
                    <Popconfirm
                        title="非要点我吗？"
                        onConfirm={() => alert("点啥点，是不是闲的")}
                    >
                        <a
                            onClick={this.props.handleClick}
                        >高阶组件123</a>
                    </Popconfirm>
                </div>
                <TestArrangeModal
                    title={title}
                    visible={testArrangeModalVisible}
                    data={testArrangeModalData}
                    onSubmit={this.handleTestArrangeModalSubmit}
                    onCancel={() => this.setState({testArrangeModalVisible: false})}
                />
            </div>
        );
    }
}