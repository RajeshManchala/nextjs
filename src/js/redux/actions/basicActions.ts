/* eslint-disable @typescript-eslint/no-explicit-any */

// Import actual files
import api from '../../common/utils/apiClient';

// Import type definitions
import { BasicApiAction } from './types/basicActions';

export const GET_BASIC_TEST = 'GET_BASIC_TEST';
export const GET_BASIC_TEST_REQUEST = `${GET_BASIC_TEST}_REQUEST`;
export const GET_BASIC_TEST_FAILURE = `${GET_BASIC_TEST}_FAILURE`;
export const GET_BASIC_TEST_FINALLY = `${GET_BASIC_TEST}_FINALLY`;

export function getBasicApi(payload: any): BasicApiAction {
    return {
        type: GET_BASIC_TEST,
        promise: api.get('/api/hello', { ...payload }),
    };
}
