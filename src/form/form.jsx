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
            wrapperCol: {span: 6},
            labelCol: {span: 3},
        };
        return (
            <Form>
                <FormItem
                    label="房间号"
                    wrapperCol={{span: 6}}
                    labelCol={{span: 3}}
                >
                    {getFieldDecorator('roomNo', {
                    })(
                        <Input/>
                    )}
                </FormItem>
                <FormItem
                    wrapperCol={{span: 6}}
                    labelCol={{span: 3}}
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
                {/** 注意正则限制位数的时候必须要以^开头，以$结尾 */}
                <FormItem
                    label="位数限制"
                    {...Layout}
                >
                    {getFieldDecorator('num', {
                        rules: [
                            {pattern: /^([0-9a-z]){6}$/, message: '请输入六位字母与数字'}
                        ]
                    })(
                        <Input placeholder="通过正则控制位数"/>
                    )}
                </FormItem>
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
            </Form>
        );
    }
}
