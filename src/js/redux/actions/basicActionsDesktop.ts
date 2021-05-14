/* eslint-disable @typescript-eslint/no-explicit-any */

// Import actual files
import api from '../../common/utils/apiClient';

// Import type definitions
import { BasicApiAction } from './types/basicActions';

export const GET_BASIC_TEST_D = 'GET_BASIC_TEST_D';
export const GET_BASIC_TEST_D_REQUEST = `${GET_BASIC_TEST_D}_REQUEST`;
export const GET_BASIC_TEST_D_FAILURE = `${GET_BASIC_TEST_D}_FAILURE`;
export const GET_BASIC_TEST_D_FINALLY = `${GET_BASIC_TEST_D}_FINALLY`;

export function getBasicApi(payload: any): BasicApiAction {
    return {
        type: GET_BASIC_TEST_D,
        promise: api.get('/api/hello', { ...payload }),
    };
}
