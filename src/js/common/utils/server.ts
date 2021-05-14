/* eslint-disable @typescript-eslint/no-explicit-any */
import config from '../../../../config/config';

export const isServer = !((typeof window !== 'undefined' && window.document && window.document.createElement));

export const getHostName = (onServer: boolean): string => {
    const defaultHost = '';
    if (onServer) {
        return config.HOSTNAME || defaultHost;
    }

    return `${window.location.protocol}//${window.location.hostname}`;
};

export const withHostGetUrl = (endpoint): string => {
    if (config.USE_CUSTOM_API_ENDPOINT) return config.API_ENDPOINT;
    const hostName = getHostName(isServer);
    return `${hostName}${endpoint}`;
};
