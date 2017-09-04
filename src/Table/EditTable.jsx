import React, {Component} from 'react';
import {Table, Popconfirm} from 'antd';
import EditTableCell from './EditTableCell';
import {SimpleHoc} from '../form/SimpleHoc';

@SimpleHoc
export default class EditTable extends Component {
    state = {};

    componentDidMount() {
        document.addEventListener('mouseover', e => {
            e.preventDefault();
            const target = e.target || e.srcElement;
            const className = target.getAttribute('class');
            console.log(className);
        })
    }

    onCellChange = (index, key) => {
        return (value) => {}
    };

    columns = [
        {title:'教室', dataIndex: 'classRoom', key: 'classRoom'},
        {title:'教师', dataIndex: 'teacher', key: 'teacher'},
        {title:'科目', dataIndex: 'course', key: 'course'},
        {
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
        ];

    render() {
        console.log(this.props.say);
        return (
            <div>
                <Table
                    columns={this.columns}
                    dataSource={[{classRoom: 'A201', teacher: '严蔚敏', course: '数据结构与算法', time: '20170819', key: '1'}]}
                />
                <div>
                    <Popconfirm
                        title="非要点我吗？"
                        onConfirm={() => alert("点啥点，是不是闲的")}
                    >
                        <a
                            onClick={this.props.handleClick}
                        >123</a>
                    </Popconfirm>
                </div>
            </div>
        );
    }
}