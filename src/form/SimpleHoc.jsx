import React, {Component} from 'react';

export const SimpleHoc = (WrappedComponent) => {
    console.log('HOC');
    return class extends Component {

        handleClick = () => {
            alert(123);
        };

        render() {
            return (
                <WrappedComponent {...this.props} handleClick={this.handleClick}/>
            );
        }
    }
};