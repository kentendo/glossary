export const SET_TERM_FILTER = 'SET_TERM_FILTER'
export const TOGGLE_TERM = 'TOGGLE_TERM';

export function toggleTerm(id) {
    console.log('toggleTerm', id);
    return { type: TOGGLE_TERM, id };
}

export function setTermFilter(filter) {
    return { type: SET_TERM_FILTER, filter };
}