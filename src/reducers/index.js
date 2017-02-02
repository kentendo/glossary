import { combineReducers } from 'redux'
import terms from './terms';
import termFilter from './termFilter';

const glossaryApp = combineReducers({
    termFilter,
    terms
})

export default glossaryApp
