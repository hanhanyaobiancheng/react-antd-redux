import React, {Component} from 'react';
import FilterLink from '../container/FilterLink';

export default class Foot extends Component {
    state = {};

    render() {
        return (
            <p>
                Show:
                {' '}
                <FilterLink filter="SHOW_ALL">
                    All
                </FilterLink>
                {', '}
                <FilterLink filter="SHOW_ACTIVE">
                    Active
                </FilterLink>
                {', '}
                <FilterLink filter="SHOW_COMPLETED">
                    Completed
                </FilterLink>
            </p>
        );
    }
}
