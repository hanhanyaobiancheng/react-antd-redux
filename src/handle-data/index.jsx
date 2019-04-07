import React, {Component} from 'react';
import {Table, Input, Button, Form, Row, Col, message} from 'antd';

const FormItem = Form.Item;

@Form.create()
export default class HandleData extends Component {
    state = {};

    handleClick = () => {
        const data = this.props.form.getFieldValue('data');
        const dataSource = [];
        let allData = [];
        if (!data) {
            return message.warning('请先输入需要处理的数据');
        }
        allData = data.split(',');
        allData.map((item, index) => {
            const currentItem = item.split(' ');
            const T = currentItem[0];
            const Ta = currentItem[1];
            if (T * 1 >= 60) {
                dataSource.push({time: index + 1, t: T, r: 'r1=1', ta: Ta})
            }
            if (T * 1 >= 30 && T * 1 < 60) {
                dataSource.push({time: index + 1, t: T, r: 'r2=1', ta: Ta});
            }
            if (T * 1 > Ta && T * 1 < 30) {
                dataSource.push({time: index + 1, t: T, r: 'r3=1', ta: Ta});
            }
            if (T * 1 <= Ta) {
                dataSource.push({time: index + 1, t: T, ta: Ta, r: 'r4=1'});
            }
            return item;
        })
        this.setState({dataSource});
    };

    render() {
        const {form: {getFieldDecorator}} = this.props;
        const {dataSource} = this.state;
        const Layout = {
            wrapperCol: {span: 18},
            labelCol: {span: 5},
        };
        return (
            <div>
                <Row>
                    <Col span={18}>
                        <div>
                            <FormItem
                                {...Layout}
                                label="请输入需要处理的数据"
                            >
                                {getFieldDecorator('data', {
                                    rules: [],
                                })(
                                    <Input placeholder="请输入需要处理的数据"/>
                                )}
                            </FormItem>
                        </div>
                    </Col>
                    <Col>
                        <Button
                            type="primary"
                            style={{height: 36}}
                            onClick={this.handleClick}
                        >点此提交进行处理</Button>
                    </Col>
                </Row>
                <div style={{color: 'red', marginLeft: 160}}>
                    提示：处理的数据格式仅限于"T1 Tair2,T2 Tair2,......"，不要用其他的符号，
                    不要单位，空格或逗号均是英文符号半角，如果数据多，不要回车换行
                </div>
                <div style={{marginLeft: 30, marginTop: 20, marginRight: 10}}>
                    <h3>处理结果如下：</h3>
                    <div>
                        <Table
                            columns={[
                                {title: '时间', dataIndex: 'time'},
                                {title: '温度T', dataIndex: 't'},
                                {title: '温度Tair', dataIndex: 'ta'},
                                {title: '结果r', dataIndex: 'r'},
                            ]}
                            dataSource={dataSource}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
