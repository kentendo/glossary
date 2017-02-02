import { SET_TERM_FILTER } from '../actions';

export default function termFilter(state = '', action) {
    switch(action.type) {
        case SET_TERM_FILTER:
            return action.filter;
        default:
            return state;
    }
}