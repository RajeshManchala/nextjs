
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { AnyAction } from 'redux';
import { NOOP_ACTION } from '../actions/defaults';

const defaultReducer = (state = {}, action: AnyAction) => {
    switch (action.type) {
        case NOOP_ACTION: {
            return state;
        }
        default: return state;
    }
};

const initReducers = {
    defaultReducer,
};

export default initReducers;
