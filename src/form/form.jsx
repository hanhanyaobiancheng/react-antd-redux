import React, {Component} from 'react';
import {Form, DatePicker, TimePicker, Input, Row, Col} from 'antd';

const FormItem = Form.Item;

@Form.create()
export class MakeRoomCard extends Component {
    state = {};

    componentDidMount() {
        const {setFieldsValue} = this.props.form;
        setFieldsValue({
            roomNo: '123',
        })
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        const Layout = {
            wrapperCol: {span: 18},
            labelCol: {span: 6},
        };
        return (
            <Form>
                <Row>
                    <Col span={6}>
                        <FormItem
                            label="房间号"
                            wrapperCol={{span: 18}}
                            labelCol={{span: 6}}
                        >
                            {getFieldDecorator('roomNo', {
                            })(
                                <Input/>
                            )}
                        </FormItem>
                    </Col>
                    <Col span={6}>
                        <FormItem
                            wrapperCol={{span: 18}}
                            labelCol={{span: 6}}
                            label="入住时间"
                        >
                            <div>
                                <DatePicker
                                />
                            </div>
                        </FormItem>
                    </Col>
                    <Col span={12}>
                        <div style={{position: 'relative', width: '500px'}}>
                            <FormItem
                                labelCol={{span: 11}}
                                wrapperCol={{span: 13}}
                                label="退房时间"
                                style={{width: '230px'}}
                            >
                                <div>
                                    <DatePicker
                                        disabled
                                        format="YYYY-MM-DD"
                                    />
                                </div>
                            </FormItem>
                            <FormItem style={{position: 'absolute', top: 0, left: '230px'}}>
                                <div>
                                    <TimePicker
                                        format="HH:mm:ss"
                                    />
                                </div>
                            </FormItem>
                        </div>
                    </Col>
                    <Col span={6}>
                        <FormItem
                            {...Layout}
                            label="门锁房号"
                        >
                            <span>123</span>
                        </FormItem>
                    </Col>
                    <Col span={6}>
                        <FormItem
                            label="正数"
                            {...Layout}
                        >
                            {getFieldDecorator('number', {
                                rules: [
                                    {pattern: /^(([0]?)|([1-9]+))\.?\d+$/, message: '请输入正数'}
                                ]
                            })(
                                <Input placeholder="正数可以有小数"/>
                            )}
                        </FormItem>
                    </Col>
                    {/** 注意正则限制位数的时候必须要以^开头，以$结尾 */}
                    <Col span={6}>
                        <FormItem
                            label="位数限制"
                            {...Layout}
                        >
                            {getFieldDecorator('num', {
                                rules: [
                                    {pattern: /^([0-9a-z]){6}$/, message: '请输入六位字母与数字'}
                                ]
                            })(
                                <Input placeholder="正则控制位数六位字母数字"/>
                            )}
                        </FormItem>
                    </Col>
                    <Col span={6}>
                        <FormItem
                            label="名称"
                            {...Layout}
                        >
                            {getFieldDecorator('name', {
                                rules: [
                                    {pattern: /(^\s*)|(\s*$)/, message: '名称首尾不能有空格'},
                                ]
                            })(
                                <Input placeholder="名称首尾不能有空格"/>
                            )}
                        </FormItem>
                    </Col>
                </Row>
            </Form>
        );
    }
}
