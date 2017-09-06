import React, {Component} from 'react';
import {Form, Input, Button} from 'antd';
import {connect} from 'react-redux';
import {addTodo} from '../../redux/actions/index';

const FormItem = Form.Item;

@connect()
@Form.create()
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
            if(!err) {
                dispatch(addTodo(this.state.inputValue));
            }
            this.setState({inputValue: ''})
        });
    };

    render() {
        const {inputValue} = this.state;
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <FormItem>
                        <Input
                            value={inputValue}
                            onChange={this.handleChange}
                            ref={node => this.input = node}
                        />
                    </FormItem>
                    <FormItem>
                        <Button htmlType="submit" onClick={this.handleSubmit}>AddTodo</Button>
                    </FormItem>
                </Form>
            </div>
        );
    }
}

