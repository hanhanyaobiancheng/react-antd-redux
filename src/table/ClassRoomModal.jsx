import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Modal, Table} from 'antd';

export default class ClassRoomModal extends Component {
    static defaultProps = {
        title: '教室可用性列表',
        data: [],
    };

    static propTypes = {
        title: PropTypes.string,
        data: PropTypes.array.isRequired,
        onCancel: PropTypes.func,
        visible: PropTypes.bool,
    };

    state = {
        dataSource: [],
    };

    columns = [
        {title: '日期', dataIndex: 'index', key: 'index'},
    ];

    componentWillMount() {
        const {data} = this.props;
        const {dataSource} = this.state;
        data && data.map(item => {
            this.columns.push({title: item.date, dataIndex: item.date, key: item.date});
            return item;
        });
        const columns = this.columns;
        dataSource.push({index: '可用性', key: 'usable'}, {index: data[0].classRoomName, key: 'classRoomName'});
        // 这一块的处理费了半天劲，好好的表格把行跟列颠倒以后处理起来确实有些小麻烦，万恶的需求啊
        for (let i = 0; i < columns.length; i++) {
            for (let j = 0; j < data.length; j++) {
                if (columns[i].dataIndex === data[j].date) {
                    let availableValue = data[j].available;
                    let time = data[j].time;
                    Object.assign(dataSource[0], {[columns[i].dataIndex]: availableValue});
                    Object.assign(dataSource[1], {[columns[i].dataIndex]: time});
                }
            }
        }
    }

    render() {
        const {visible, onCancel, title} = this.props;
        const {dataSource} = this.state;
        return (
            <Modal
                title={title}
                visible={visible}
                onCancel={onCancel}
            >
                <Table
                    dataSource={dataSource}
                    columns={this.columns}
                    pagination={false}
                />
            </Modal>
        )
    }
}