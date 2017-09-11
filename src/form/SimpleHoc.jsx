import React, {Component} from 'react';

export const SimpleHoc = (WrappedComponent) => {
    console.log('HOC');
    return class extends Component {

        handleClick = () => {
            alert(123);
        };

        render() {
            console.log(this.props);
            return (
                <WrappedComponent {...this.props} handleClick={this.handleClick}/>
            );
        }
    }
};