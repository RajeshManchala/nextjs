/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

import {
    compose,
    createStore,
    applyMiddleware,
    combineReducers,
} from 'redux';
import thunk from 'redux-thunk';
import { HYDRATE } from 'next-redux-wrapper';
import apiMiddleware from './middlewares/apiPromiseHandler';
import initReducers from './reducers/rootReducer';

const middlewares = [
    thunk,
    apiMiddleware,
];

function createReducer(asyncReducers) {
    return combineReducers({
        ...initReducers,
        ...asyncReducers,
    });
}

const bootupReducer = (state, action) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state,
            ...action.payload,
        }
        return nextState
    } else {
        return createReducer({})
    }
}

const appStore = (initialState, { devTools = (x) => x, extraMiddlewares = [] }) => {
    const store: any = createStore(
        bootupReducer,
        initialState,
        compose(
            applyMiddleware(
                ...middlewares,
                ...extraMiddlewares,
            ),
            devTools,
        ),
    );

    store.asyncReducers = {};
    store.injectReducer = (key, asyncReducer) => {
        store.asyncReducers[key] = asyncReducer;
        store.replaceReducer(createReducer(store.asyncReducers));
        // eslint-disable-next-line no-console
        console.log(`${key} reducer injected successfully`);
    };

    return store;
};

export default appStore;
