/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import has from 'lodash/has';
import get from 'lodash/get';
import { AxiosPromise } from 'axios';
import { HTTP_OK, HTTP_NOT_FOUND } from '../../common/constants/httpStatusCodes';

interface ApiPromiseMiddlewareActioInterface {
    type: string;
    promise: Promise<AxiosPromise>;
    transformer: any;
    transformKey: string;
    transformParams: string;
    onAPISuccess: any;
    onAPIFailure: any;
}

export default function apiMiddleware() {
    return (next) => (action: ApiPromiseMiddlewareActioInterface): Promise<AxiosPromise> | void | Promise<void> => {
        const defaultTransformKey = 'data';
        const defaultTransformParams = {};
        const {
            promise,
            type,
            transformer = (x: any) => x,
            transformKey,
            transformParams,
            onAPISuccess = (x: any) => x,
            onAPIFailure = (x: any) => x,
            ...rest
        } = action;
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        if (!promise) return next(action);
        // if (!transformer || typeof transformer !== 'function') {
        //     throw new Error(`transformer function is required with api middleware.
        // Use function: x => x if no transformer function exists.`);
        // }

        const SUCCESS = type;
        const REQUEST = `${type}_REQUEST`;
        const FAILURE = `${type}_FAILURE`;
        const FINALLY = `${type}_FINALLY`;
        next({ ...rest, type: REQUEST });
        return promise
            .then((res) => {
                const keyToTransform = transformKey || defaultTransformKey;
                const paramsToTransformer = transformParams || defaultTransformParams;
                if (!Array.isArray(res) && !has(res, keyToTransform)) {
                    throw new Error('transformKey not found in response.');
                }
                const dataToTransform = Array.isArray(res) ? res : get(res, keyToTransform);
                const transformed = transformer(dataToTransform, paramsToTransformer);
                onAPISuccess({ action, transformed, response: res });
                next({
                    ...rest, status: HTTP_OK, transformed, type: SUCCESS,
                });
            })
            .catch((error: any) => {
                const errorResponse = error.response || {};
                const status = errorResponse.status || 'ERROR';
                if (status > HTTP_NOT_FOUND) {
                    console.log(error);
                }
                onAPIFailure({ action, error });
                next({
                    ...rest, errorData: errorResponse.data, status, type: FAILURE,
                });
            })
            .finally(() => {
                next({ ...rest, type: FINALLY });
            });
    };
}

// reference for Symbol implementation: https://github.com/reactjs/redux/blob/master/examples/real-world/src/middleware/api.js
