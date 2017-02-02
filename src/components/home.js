import React from 'react';
import { Link } from 'react-router';
import Glossary from '../containers/Glossary';
import Input from './Input';

import styles from './home.css';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import glossaryApp from '../reducers';

import terms from '../mock/terms';

const initialState = {
  termFilter: '',
  terms: terms
}

let store = createStore(glossaryApp, initialState);

const Home = () => (
  <Provider store={store}>
    <Glossary/>
  </Provider>
);

export default Home;
