/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/no-cycle */
import iterateObjectToCamelCase from './iterateObjectToCamelCase';

const iterateArrayToCamelCase = (input: Array<any>): Array<any> => {
    if (input.constructor === Array) {
        return input.map((data) => {
            if (data !== null) {
                if (data.constructor === Object) {
                    return iterateObjectToCamelCase(data);
                } if (data.constructor === Array) {
                    return iterateArrayToCamelCase(data);
                }
                return data;
            }
            return data;
        });
    }
    return input;
};

export default iterateArrayToCamelCase;
