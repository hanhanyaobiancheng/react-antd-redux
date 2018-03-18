import React, {Component} from 'react';
import {Table, Popconfirm, Button, Card} from 'antd';
import {TablePro} from 'kaidiya-web/antd/Table';
import EditTableCell from './EditTableCell';
import {SimpleHoc} from '../form/SimpleHoc';
import TestArrangeModal from './TestArrangeModal';
import * as Pubsub from '../commons/EventEmiter';
import JsTable from './JsTable';
import {convertCurrency} from '../commons/transferNumToChinese';
import AccountDetail from './AccountDetail';
import ClassRoomModal from './ClassRoomModal';
import * as classRoomUsefulData from './classRoomUsefulData.json';

@SimpleHoc
export default class EditTable extends Component {
    state = {
        testArrangeModalVisible: false,
        testArrangeModalData: {},
        dataSource: [{classRoom: 'A201', teacher: '严蔚敏', course: '数据结构与算法', time: '20170819', key: '1', id: '1344'}],
        classRoomUsefulModalVisible: false,
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

        const $div = document.getElementById('header');
        console.log(8888888, $div.offsetTop);
        if ($div.offsetTop === 0) {
            $div.style.position = 'fixed';
        }
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
                    <a
                        style={{margin: '0 5px'}}
                        onClick={() => {
                            console.log(123);
                            this.setState({
                                classRoomUsefulModalVisible: true,
                            });
                        }}
                    >
                        查看教室可用性
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

    // 修改数据或添加数据后的提交
    handleTestArrangeModalSubmit = (values) => {
        console.log(values);
    };

    render() {
        // console.log(this.props.say); // 测试高阶组件@SimpleHOC中封装的方法
        const {testArrangeModalVisible, testArrangeModalData, dataSource, classRoomUsefulModalVisible} = this.state;
        const title = testArrangeModalData.id ? `修改${testArrangeModalData.classRoom}` : '添加';
        const num = 1234546.12;
        const text = convertCurrency(num);
        console.log(classRoomUsefulModalVisible, classRoomUsefulData.list);

        return (
            <div>
                <Card
                    title="antd中的表格"
                    extra={
                        <Popconfirm
                            title="非要点我吗？"
                            onConfirm={() => alert("点啥点，是不是闲的")}
                        >
                            <a
                                onClick={this.props.handleClick}
                            >高阶组件123</a>
                        </Popconfirm>
                    }
                >
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
                    <TestArrangeModal
                        title={title}
                        visible={testArrangeModalVisible}
                        data={testArrangeModalData}
                        onSubmit={this.handleTestArrangeModalSubmit}
                        onCancel={() => this.setState({testArrangeModalVisible: false})}
                    />
                    <ClassRoomModal
                        visible={classRoomUsefulModalVisible}
                        onCancel={() => this.setState({classRoomUsefulModalVisible: false})}
                        data={classRoomUsefulData.list}
                    />
                </Card>
                <Card
                    style={{marginTop: '20px'}}
                    title="原生html表格"
                    extra={
                        <b>{`试验下将数字${num}转成大写中文${text}`}</b>
                    }
                >
                    <JsTable/>
                </Card>
                <div id="header">
                    <h2>header</h2>
                </div>
                <Card
                    style={{marginTop: '20px'}}
                    title="antd中可折叠的表格"
                >
                    <AccountDetail/>
                </Card>
                <TablePro
                    columns={[
                        {title: '头部', dataIndex: 'head'},
                        {title: '头部', dataIndex: 'head1'},
                        {title: '头部', dataIndex: 'head2'},
                        {title: '头部', dataIndex: 'head3'},
                    ]}
                />
            </div>
        );
    }
}