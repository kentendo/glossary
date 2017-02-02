import React, { PropTypes } from 'React';
import Term from './Term';

const TermList = ({terms, onTermClick}) => (
    <div>
        {terms.map(term => 
            <Term key={term.id} {...term} onClick={() => onTermClick(term.id)} />
        )}
    </div>
);

TermList.PropTypes = {
    terms: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        definition: PropTypes.string.isRequired
    }).isRequired).isRequired,
    onTermClick: PropTypes.func.isRequired
}

export default TermList;