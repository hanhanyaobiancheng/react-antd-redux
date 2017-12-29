import React, {Component} from 'react';
import {Select, Input, Form} from 'antd';

const {Option} = Select;
const FormItem = Form.Item;

@Form.create()
export default class Test extends Component {

    state = {
        data: [],
        eggs: {key: "0eggs", label: "0个咸鸭蛋"},
    };

    componentWillMount() {
        let data = [];
        for(let i=0; i<10;i++){
            data.push({value: `${i}eggs`, key: `${i}eggs`, label: `${i}个咸鸭蛋`})
        }
        this.setState({data});
    }

    handleSelectValueChange = (value) => {
        this.setState({eggs: value});
        if (value && value.label < '6个咸鸭蛋') {
            this.props.form.setFieldsValue({
                gifts: undefined,
            });
        }
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        const {data, eggs} = this.state;
        const layout = {
            wrapperCol: {span: 21},
            labelCol: {span: 1},
        };

        return (
            <div>
                <Form
                    // style={{width: '300px'}}
                >
                    <h3>下拉框</h3>
                    <div style={{position: 'relative'}}>
                        <FormItem
                            label="咸鸭蛋"
                            {...layout}
                        >
                            {getFieldDecorator('eggs', {
                                initialValue: {key: "0eggs", label: "0个咸鸭蛋"},
                                rules: [],
                            })(
                                <Select
                                    labelInValue
                                    style={{width: '100px'}}
                                    allowClear={false}
                                    onChange={value => this.handleSelectValueChange(value)}
                                >
                                    {
                                        data.map(item => <Option value={item.value} key={item.key}>{item.label}</Option>)
                                    }
                                </Select>
                            )}
                        </FormItem>
                        <div style={{position: 'absolute', top: 0, left: '180px', width: '700px'}}>
                            <FormItem
                                label="赠品"
                                {...layout}
                            >
                                {getFieldDecorator('gifts', {
                                    rules: [],
                                })(
                                    <Select
                                        style={{width: '100px'}}
                                        allowClear={true}
                                        disabled={(eggs && eggs.label < '6个咸鸭蛋')}
                                    >
                                        <Option value='10个鸡蛋' key='10个鸡蛋'>10个鸡蛋</Option>
                                        <Option value='3个鹅蛋' key='3个鹅蛋'>3个鹅蛋</Option>
                                    </Select>
                                )}
                                <span style={{marginLeft: '10px'}}>（咸鸭蛋只有六个及以上才能选择赠送鸡蛋和鹅蛋）</span>
                            </FormItem>
                        </div>
                    </div>
                    <h3>表单的验证</h3>
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
                            <Input placeholder="请输入开始日期" style={{width: '210px'}}/>
                        )}
                    </FormItem>
                </Form>
            </div>
        )
    }
}
