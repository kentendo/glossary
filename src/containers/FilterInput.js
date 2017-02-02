import { connect } from 'react-redux'
import Input from '../components/Input';
import { setTermFilter } from '../actions/index';

const mapDispatchToProps = (dispatch) => {
    return {
        onChange: (event) => {
            dispatch(setTermFilter(event.target.value))
        }
    }
}

const FilterInput = connect(
    null,
    mapDispatchToProps
)(Input)

export default FilterInput;