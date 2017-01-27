/**
 * @since 2016-10-22 10:39
 * @author vivaxy
 */

import { createStore, combineReducers } from 'redux';

import reducers from '../reducer';

const store = createStore(combineReducers(reducers), window.devToolsExtension ? window.devToolsExtension() : f => f);

if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducer', () => {
        const nextRootReducer = require('../reducer').default;
        store.replaceReducer(combineReducers(nextRootReducer));
    });
}

export default store;
