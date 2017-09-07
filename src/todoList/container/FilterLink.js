import {connect} from 'react-redux';
import Link from '../components/Link';
import {setVisibility} from '../../redux/actions/mock-actions/index'

/** mapStateToProps 一共有两个参数
 * @param state 第一个参数总是state
 * @param ownProps 第二个参数代表 容器组件的props对象
 * @returns {{active: boolean}}
 */

const mapStateToProps = (state, ownProps) => {
    console.log(ownProps);
    return {
        active: ownProps.filter === state.visibilityFilter,
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
                dispatch(setVisibility(ownProps.filter))
        }
    }
};

const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Link);

export default FilterLink;