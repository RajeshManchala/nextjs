/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    GET_BASIC_TEST_D,
    GET_BASIC_TEST_D_REQUEST,
    GET_BASIC_TEST_D_FAILURE,
    GET_BASIC_TEST_D_FINALLY,
} from '../actions/basicActionsDesktop';
import { BasicReducerDesktopInterface } from './types/basicReducerDesktop';

export const initialState: BasicReducerDesktopInterface = {
    status: null,
    data: {
        name: null,
    },
    error: false,
    isLoading: false,
};

export default function basicReducer(state: BasicReducerDesktopInterface = initialState, action: any): BasicReducerDesktopInterface {
    switch (action.type) {
        case GET_BASIC_TEST_D_REQUEST: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case GET_BASIC_TEST_D: {
            return {
                ...state,
                status: action.status,
                data: action.transformed
            };
        }
        case GET_BASIC_TEST_D_FAILURE: {
            return {
                ...state,
                status: action.status,
            };
        }
        case GET_BASIC_TEST_D_FINALLY: {
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
