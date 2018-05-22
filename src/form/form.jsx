import React, {Component} from 'react';
import moment from 'moment';
import {Form, DatePicker, TimePicker, Input, Row, Col, Tabs, Button} from 'antd';
import './style.less';
import FormItemLayout from 'pms-tookit/antd/form-item-layout/FormItemLayout';
const FormItem = Form.Item;
const {TabPane} = Tabs;

@Form.create()
export default class AntdForm extends Component {
    state = {
        loading: false,
        activeKey: '1',
    };

    componentDidMount() {
        const {setFieldsValue} = this.props.form;
        setFieldsValue({
            roomNo: '123',
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {loading} = this.state;
        const tab1 = ['roomNo', 'liveInTime', 'leaveDate', 'detailTime', 'integer', 'number', 'num', 'name'];
        if(loading) return;
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.onSubmit(values);
            } else {
                const errArray = Object.keys(err);
                const errInTab1 = tab1 && tab1.find(item => errArray.find(i => i === item));
                if (errInTab1) {
                    this.setState({activeKey: '1'});
                } else {
                    this.setState({activeKey: '2'});
                }
            }
        });
    };

    disabledDate = (current) => {
        const now = moment().format('YYYYMMDD');
        if (current) {
            const selectedDate = current.format('YYYYMMDD');
            return selectedDate < now;
        }
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        const {loading, activeKey} = this.state;
        const Layout = {
            wrapperCol: {span: 18},
            labelCol: {span: 6},
        };
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Tabs
                        type="card"
                        activeKey={activeKey}
                        onChange={key => this.setState({activeKey: key})}
                    >
                        <TabPane tab="墙角数枝梅" key="1">
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
                                    {getFieldDecorator('liveInTime', {
                                        rules: [
                                            {required: true, message: '请选择入住时间'},
                                        ],
                                    })(
                                        <DatePicker disabledDate={this.disabledDate}/>
                                    )}
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
                                        {getFieldDecorator('leaveDate', {
                                            rules: [],
                                        })(
                                            <DatePicker
                                                disabled
                                                format="YYYY-MM-DD"
                                            />
                                        )}
                                    </FormItem>
                                    <FormItem style={{position: 'absolute', top: 0, left: '230px'}}>
                                        {getFieldDecorator('detailTime', {
                                            rules: [],
                                        })(
                                            <TimePicker
                                                format="HH:mm:ss"
                                            />
                                        )}
                                    </FormItem>
                                </div>
                            </Col>
                            <Col span={6}>
                                <FormItem
                                    {...Layout}
                                    label="正整数"
                                >
                                    {getFieldDecorator('integer', {
                                        rules: [
                                            {pattern: /^[1-9]\d*$|^0?$/, message: '请输入正整数'},
                                        ],
                                    })(
                                        <Input placeholder="请输入正整数"/>
                                    )}
                                </FormItem>
                            </Col>
                            <Col span={6}>
                                <FormItem
                                    label="正数"
                                    {...Layout}
                                >
                                    {getFieldDecorator('number', {
                                        rules: [
                                            {max: 12, message: '不能超过12位'},
                                            {pattern: /^0?$|^[1-9]+(\.\d+)?\d*$/, message: '请输入正数'}
                                        ]
                                    })(
                                        <Input placeholder="请输入正数，可以有小数，不超过12位"/>
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
                                            {required: true, message: '亲，名称你忘填了哦亲'},
                                            {pattern: /(^\s*)|(\s*$)/, message: '名称首尾不能有空格'},
                                        ]
                                    })(
                                        <Input placeholder="名称首尾不能有空格"/>
                                    )}
                                </FormItem>
                            </Col>
                        </Row>
                        </TabPane>
                        <TabPane tab="凌寒独自开" key="2">
                            <Row>
                                <Col span={8}>
                                    <FormItem
                                        label="这个必填"
                                        {...Layout}
                                    >
                                        {getFieldDecorator('handsome', {
                                            rules: [
                                                {required: true, message: '你需要填写下这个'}
                                            ],
                                        })(
                                            <Input/>
                                        )}
                                    </FormItem>
                                </Col>
                            </Row>
                        </TabPane>
                    </Tabs>
                </Form>
                <div>
                    <FormItemLayout
                        label="试试"
                        labelTextAlign="right"
                    >
                        <Input placeholder="填一个试试"/>
                    </FormItemLayout>
                </div>
                <div className="button">
                    <Button
                        loading={loading}
                        type="primary"
                        size="large"
                        onClick={this.handleSubmit}
                    >
                        确认
                    </Button>
                    <div className="reset-button">
                        <Button
                            type="ghost"
                            size="large"
                            onClick={() => this.props.form.resetFields()}
                        >
                            重置
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}
