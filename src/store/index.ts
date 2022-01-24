import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import { Reducers } from '../reducers';

const Store = createStore(Reducers, applyMiddleware(ReduxPromise));

export default Store;