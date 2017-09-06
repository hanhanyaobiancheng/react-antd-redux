import React, {Component} from 'react';
import {Form, Input, Button, Row, Col} from 'antd';
import {connect} from 'react-redux';
import {addTodo} from '../../redux/actions/mock-actions/index';

const FormItem = Form.Item;

@Form.create()
@connect()
export default class AddTodoList extends Component {
    state = {
        inputValue: '',
    };

    handleChange = (e) => {
        this.setState({inputValue: e.target.value});
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const {dispatch} = this.props;
        this.props.form.validateFields(err => {
            if(!err){
                dispatch(addTodo(this.state.inputValue));
            }
            this.setState({inputValue: ''})
        })
    };

    render() {
        const {inputValue} = this.state;
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Row>
                        <Col span={8}>
                            <FormItem>
                                <Input
                                    value={inputValue}
                                    onChange={this.handleChange}
                                />
                            </FormItem>
                        </Col>
                        <Col span={8}>
                            <FormItem>
                                <Button htmlType="submit" onClick={this.handleSubmit}>AddTodo</Button>
                            </FormItem>
                        </Col>
                    </Row>
                </Form>
            </div>
        );
    }
}



