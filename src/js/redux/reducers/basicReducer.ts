/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    GET_BASIC_TEST,
    GET_BASIC_TEST_REQUEST,
    GET_BASIC_TEST_FAILURE,
    GET_BASIC_TEST_FINALLY,
} from '../actions/basicActions';

import { BasicReducerInterface } from './types/basicReducer';

export const initialState: BasicReducerInterface = {
    status: null,
    data: null,
    error: false,
    isLoading: false,
};

export default function basicReducer(state: BasicReducerInterface = initialState, action: any): BasicReducerInterface {
    switch (action.type) {
        case GET_BASIC_TEST_REQUEST: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case GET_BASIC_TEST: {
            return {
                ...state,
                status: action.status,
                data: action.transformed
            };
        }
        case GET_BASIC_TEST_FAILURE: {
            return {
                ...state,
                status: action.status,
            };
        }
        case GET_BASIC_TEST_FINALLY: {
            return {
                ...state,
                isLoading: false,
            };
        }
        default: {
            return {
                ...state,
            };
        }
    }
}
