/* eslint-disable @typescript-eslint/no-explicit-any */
import camelCase from 'lodash/camelCase';
import iterateArrayToCamelCase from './iterateArrayToCamelCase';
import iterateObjectToCamelCase from './iterateObjectToCamelCase';

const iterateToCamelCase = (data: any): any => {
    if (data !== null) {
        if (data.constructor === Object) {
            return iterateObjectToCamelCase(data);
        } if (data.constructor === Array) {
            return iterateArrayToCamelCase(data);
        } if (data.constructor === String) {
            return camelCase(data);
        }
        return data;
    }
    return data;
};

export default iterateToCamelCase;
