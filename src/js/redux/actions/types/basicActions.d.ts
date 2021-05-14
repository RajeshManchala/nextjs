import { AxiosPromise } from 'axios';

export interface BasicApiOptions {
    promise: Promise<AxiosPromise>;
    transformer?: (arg0: object) => object;
}

export interface BasicApiAction extends BasicApiOptions {
    type: string;
}
