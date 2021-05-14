/* eslint-disable @typescript-eslint/no-explicit-any */
import iterateToCamelCase from '../../common/utils/iterateToCamelCase';

// This is just an example of a transformer,
const basicTransformer = (input: any): any => iterateToCamelCase(input);

export default basicTransformer;
