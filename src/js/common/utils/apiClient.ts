/* eslint-disable @typescript-eslint/no-explicit-any */

import axios, { AxiosPromise } from 'axios';

import Debug from 'debug';
import { getHostName, isServer } from './server';
import config from '../../../../config/config';

// eslint-disable-next-line no-underscore-dangle
const debug = Debug('fr-ui:api');

const GET = 'get';
const POST = 'post';
const DELETE = 'delete';
const PUT = 'put';


export function apiClient(apiLib): any {
    const defaultOptions = {
        method: GET,
        url: '',
        params: {},
        data: null,
    };

    return (useCustom: boolean) => (apiEndpoint: string | any): any => ({
        get(url: string, params = {}): Promise<AxiosPromise> {
            const urlEndpoint = useCustom ? apiEndpoint : apiEndpoint();
            const absoluteUrl = urlEndpoint + url;
            debug('GET request to url: ', absoluteUrl);

            return apiLib({
                ...defaultOptions,
                method: GET,
                url: absoluteUrl,
                params,
                headers: {
                    // any custom headers go here
                },
            });
        },
        delete(url: string, params = {}): Promise<AxiosPromise> {
            const urlEndpoint = useCustom ? apiEndpoint : apiEndpoint();
            const absoluteUrl = urlEndpoint + url;
            debug('DELETE request to url: ', absoluteUrl);

            return apiLib({
                ...defaultOptions,
                method: DELETE,
                url: absoluteUrl,
                params,
                headers: {
                    // any custom headers go here
                },
                xsrfCookieName: 'add csrf cookie name here',
                xsrfHeaderName: 'add csrf header name',
            });
        },
        put(url: string, params = {}, data = {}): Promise<AxiosPromise> {
            const urlEndpoint = useCustom ? apiEndpoint : apiEndpoint();
            const absoluteUrl = urlEndpoint + url;

            return apiLib({
                ...defaultOptions,
                method: PUT,
                url: absoluteUrl,
                params,
                data,
                headers: {
                    // any custom headers go here
                },
                xsrfCookieName: 'add csrf cookie name here',
                xsrfHeaderName: 'add csrf header name',
            });
        },
        post(url: string, params = {}, data = {}): Promise<AxiosPromise> {
            const urlEndpoint = useCustom ? apiEndpoint : apiEndpoint();
            const absoluteUrl = urlEndpoint + url;
            debug('POST request to url:', absoluteUrl);

            return apiLib({
                ...defaultOptions,
                method: POST,
                url: absoluteUrl,
                params,
                data,
                headers: {
                    // any custom headers go here
                },
                xsrfCookieName: 'add csrf cookie name here',
                xsrfHeaderName: 'add csrf header name',
            });
        },
        multiPart(url: string, params = {}, data = {}): Promise<AxiosPromise> {
            const urlEndpoint = useCustom ? apiEndpoint : apiEndpoint();
            const absoluteUrl = urlEndpoint + url;
            debug('Attempting multi-part request to url:', absoluteUrl);

            return apiLib({
                ...defaultOptions,
                method: POST,
                url: absoluteUrl,
                params,
                data,
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                xsrfCookieName: 'add csrf cookie name here',
                xsrfHeaderName: 'add csrf header name',
            });
        },
        blob(url: string, params = {}): Promise<AxiosPromise> {
            const urlEndpoint = useCustom ? apiEndpoint : apiEndpoint();
            const absoluteUrl = urlEndpoint + url;
            debug('Attempting blob download of file:', absoluteUrl);

            return apiLib({
                ...defaultOptions,
                method: GET,
                url: absoluteUrl,
                params,
                headers: {
                    // any custom headers go here
                },
                responseType: 'blob', // this is what makes it go in download mode
            });
        },
    });
}

export const customApiCaller = apiClient(axios)(true);

const computeApiEndpoint = (): string => {
    if (config.USE_CUSTOM_API_ENDPOINT) {
        return config.API_ENDPOINT;
    }
    return getHostName(isServer);
};

const api = apiClient(axios)(false)(computeApiEndpoint);

export default api;
