import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Link extends Component {

    static defaultProps = {
        onClick: () => {},
    };

    static propTypes = {
        onClick: PropTypes.func.isRequired,
        active: PropTypes.bool,
        children: PropTypes.string,
    };

    state = {};

    handleClick = (e) => {
        e.preventDefault();
        this.props.onClick();
    };

    render() {
        const {active, children} = this.props;
        return (
            <span>
                {
                    active ?
                        <span>{children}</span>
                        :
                        <a onClick={this.handleClick}>{children}</a>
                }
            </span>
        );
    }
}

