import React, {Component} from 'react';
import {Form, DatePicker, TimePicker, Input} from 'antd';

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
            wrapperCol: {span: 8},
            labelCol: {span: 1},
        };
        return (
            <Form>
                <FormItem
                    label="房间号"
                    wrapperCol={{span: 8}}
                    labelCol={{span: 1}}
                >
                    {getFieldDecorator('roomNo', {
                    })(
                        <Input/>
                    )}
                </FormItem>
                <FormItem
                    wrapperCol={{span: 5}}
                    labelCol={{span: 1}}
                    label="入住时间"
                >
                    <div>
                        <DatePicker
                        />
                    </div>
                </FormItem>
                <div style={{position: 'relative', width: '500px'}}>
                    <FormItem
                        labelCol={{span: 7}}
                        wrapperCol={{span: 17}}
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
                <FormItem
                    {...Layout}
                    label="门锁房号"
                >
                    <span>123</span>
                </FormItem>
            </Form>
        );
    }
}
