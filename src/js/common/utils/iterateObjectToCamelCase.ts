/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/no-cycle */

import camelCase from 'lodash/camelCase';
import iterateArrayToCamelCase from './iterateArrayToCamelCase';

const iterateObjectToCamelCase = (input: any): any => {
    if (input.constructor === Object) {
        const newObj = {};
        Object.keys(input).forEach((key) => {
            if (input[key] !== null) {
                if (input[key].constructor === Array) {
                    newObj[camelCase(key)] = iterateArrayToCamelCase(input[key]);
                } else if (input[key].constructor === Object) {
                    newObj[camelCase(key)] = iterateObjectToCamelCase(input[key]);
                } else {
                    newObj[camelCase(key)] = input[key];
                }
            } else {
                newObj[camelCase(key)] = input[key];
            }
        });
        return newObj;
    }
    return input;
};

export default iterateObjectToCamelCase;
