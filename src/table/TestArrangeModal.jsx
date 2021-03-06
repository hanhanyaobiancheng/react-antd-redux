import React, {Component} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {Modal, Form, Input, DatePicker, Button} from 'antd';

const FormItem = Form.Item;

@Form.create()
export default class TestArrangeModal extends Component {
    static defaultProps = {
        visible: false,
        onSubmit: () => {},
        data: {},
        onCancel: () => {},
    };

    static propTypes = {
        visible: PropTypes.bool.isRequired,
        onSubmit: PropTypes.func.isRequired,
        data: PropTypes.object.isRequired,
        onCancel: PropTypes.func.isRequired,
        title: PropTypes.string,
    };

    state = {};

    componentWillReceiveProps(nextProps) {
        const {visible} = nextProps;
        if (!visible) {
            this.props.form.resetFields();
        }
    }

    handleModalSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                values.time = moment(values.time).format("YYYY-MM-DD HH:mm:ss");
                this.props.onSubmit(values);
            }
        })
    };

    render() {
        const {form: {getFieldDecorator}, data, visible, onCancel, title} = this.props;
        const isAdded = data.id;
        const layoutSpace = {
            wrapperCol: {span: 16},
            labelCol: {span: 4}
        };
        return (
            <Modal
                title={title}
                visible={visible}
                footer={false}
                onCancel={onCancel}
                {...this.props}
            >
                {isAdded ? getFieldDecorator('id', {initialValue: data.id})(<Input type="hidden"/>) : null}
                <Form
                    onSubmit={this.handleModalSubmit}
                >
                    <FormItem
                        label="教室"
                        {...layoutSpace}
                    >
                        {getFieldDecorator('classRoom', {
                            initialValue: data.classRoom,
                            rules: [],
                        })(
                            <Input placeholder="请输入教室"/>
                        )}
                    </FormItem>
                    <FormItem
                        label="教师"
                        {...layoutSpace}
                    >
                        {getFieldDecorator('teacher', {
                            initialValue: data.teacher,
                            rules: [],
                        })(
                            <Input placeholder="请输入教师"/>
                        )}
                    </FormItem>
                    <FormItem
                        label="科目"
                        {...layoutSpace}
                    >
                        {getFieldDecorator('course', {
                            initialValue: data.course,
                            rules: [],
                        })(
                            <Input placeholder="请输入科目"/>
                        )}
                    </FormItem>
                    <FormItem
                        label="时间"
                        {...layoutSpace}
                    >
                        {getFieldDecorator('time', {
                            initialValue: moment(data.time),
                            rules: [],
                        })(
                            <DatePicker placeholder="请选择时间"/>
                        )}
                    </FormItem>
                    <div style={{marginLeft: '81.33px'}}>
                        <Button
                            type="primary"
                            htmlType="submit"
                            onClick={this.handleModalSubmit}
                            style={{marginRight: '8px'}}
                        >
                            确定
                        </Button>
                        <Button
                            onClick={() => this.props.form.resetFields()}
                        >
                            重置
                        </Button>
                    </div>
                </Form>
            </Modal>
        );
    }
}