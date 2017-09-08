import React, {Component} from 'react';
import {Select, Input, Form} from 'antd';
import './App.css'

const {Option} = Select;
const FormItem = Form.Item;


export class Test extends Component {

    state = {
        data: [],
    };

    componentWillMount() {
        let data = [];
        for(let i=0; i<10;i++){
            data.push({value: `${i}eggs`, key: `${i}eggs`, label: `${i}个咸鸭蛋`})
        }
        this.setState({data});
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        const {data} = this.state;
        // const layout = {
        //     wrapperCol: 14,
        //     labelCol: 10,
        // };

        return (
            <div>
                <h3>下拉框</h3>
                <Select style={{width: '100px'}} allowClear={true}>
                    {
                        data.map(item => <Option value={item.value} key={item.key}>{item.label}</Option>)
                    }
                </Select>
                <Select style={{width: '100px'}} allowClear={true}>
                    {
                        data.map(item => <Option value={item.value} key={item.key} disabled={item === '3个咸鸭蛋'}>{item.label}</Option>)
                    }
                </Select>
                <h3>表单的验证</h3>
                <Form
                    style={{width: '300px'}}
                >
                    <h4>日期校验</h4>
                    <FormItem
                        label="开始日期(MM-DD)"
                        wrapperCol={{span:14}}
                        labelCol={{span: 10}}
                    >
                        {getFieldDecorator('startDate', {
                            rules: [
                                {pattern: /^((0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9])|((0[13-9]|1[0-2])-30)|(0[13578]|1[02])-31)$/, message: '日期格式不正确'}
                            ],
                        })(
                            <Input placeholder="请输入开始日期"/>
                        )}
                    </FormItem>
                </Form>
            </div>
        )
    }
}

export const DateText = Form.create()(Test);
