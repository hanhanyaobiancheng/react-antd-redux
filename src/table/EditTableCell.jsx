import React, {Component} from 'react';
import {Input, Icon} from 'antd';

export default class EditTableCell extends Component {
    state = {
        value: this.props.value,
        editable: false,
    };

    componentWillReceiveProps(nextProps) {

    }

    handleChange = (e) => {
        const value = e.target.value;
        this.setState({value});
    };

    check = () => {
        this.setState({editable: false});
        if(this.props.onChange) {
            this.props.onChange(this.state.value);
        }
    };

    edit = () => {
        this.setState({editable: true});
    };

    render() {
        const {value, editable} = this.state;
        return (
            <div>
                {
                    editable ?
                        <div>
                            <Input
                                style={{width: '200px'}}
                                value={value}
                                onChange={this.handleChange}
                                onPressEnter={this.check}
                            />
                            <Icon
                                type="check"
                                className="editable-cell-icon-check"
                                onClick={this.check}
                            />
                        </div>
                        :
                        <div>
                            {value || ''}
                            <Icon
                                type="edit"
                                className="editable-cell-icon"
                                onClick={this.edit}
                            />
                        </div>
                }
            </div>
        );
    }
}