import { TOGGLE_TERM } from '../actions/index';

const term = (state = {}, action) => {
    switch(action.type) {
        case TOGGLE_TERM:
            if (state.id !== action.id) {
                return state
            }
            return Object.assign({}, state, {
                expanded: !state.expanded
            })
        default:
            return state;
    }
}

const terms = (state = [], action) => {
    switch(action.type) {
        case TOGGLE_TERM:
            return state.map(t => 
                term(t, action)
            )
        default:
            return state
    }
}

export default terms