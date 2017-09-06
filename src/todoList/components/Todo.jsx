import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Todo extends Component {

    static propTypes = {
        onClick: PropTypes.func.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string,
    };

    state = {};

    render() {
        const {completed, text} = this.props;
        console.log(text);
        return (
            <li
                onClick={this.props.onClick}
                style={{textDecoration: completed ? 'line-through' : 'none'}}
            >
                {text}
            </li>
        );
    }
}
