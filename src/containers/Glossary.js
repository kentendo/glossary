import React, { PropTypes }  from 'react';
import FilteredTermList from './FilteredTermList';
import FilterInput from './FilterInput';

const Glossary = () => (
    <div>
        <h1 style={{marginLeft: '20px'}}>Web Development Glossary of Terms<small style={{fontWeight:'normal'}}><FilterInput label="Filter: " /></small></h1>
        <FilteredTermList />
    </div>
);

export default Glossary;
