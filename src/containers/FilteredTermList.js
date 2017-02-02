import { connect } from 'react-redux';
import { setTermFilter, toggleTerm } from '../actions/index';
import TermList from '../components/TermList';

const getFiltereredTerms = (terms, filter) => {
    filter = filter.toLowerCase();
    return terms.filter((t) => {
        return (t.title.toLowerCase().indexOf(filter) >= 0
            || t.subtitle.toLowerCase().indexOf(filter) >= 0
            || t.definition.toLowerCase().indexOf(filter) >= 0
        )
    });
}

const mapStateToProps = (state) => {
    return {
        terms: getFiltereredTerms(state.terms, state.termFilter)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTermClick: (id) => {
            dispatch(toggleTerm(id))
        }
    }
}

const FilteredTermList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TermList)

export default FilteredTermList;