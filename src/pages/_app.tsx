/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { AppContext, AppInitialProps, AppProps } from 'next/app';
import { createLogger } from 'redux-logger';
import { createWrapper } from 'next-redux-wrapper';
import config from '../../config/config';
import { isServer } from '../js/common/utils/server';
import initAppStore from '../js/redux/initAppStore';
import { isMobile } from '../js/common/utils/deviceDetectionUtil';
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION__: any;
    }
}

let devTools = (x) => x;
const extraMiddlewares = [];

if (config.IS_DEV_ENV) {
    const loggerMiddleware = createLogger();
    extraMiddlewares.push(loggerMiddleware);
    // eslint-disable-next-line no-underscore-dangle
    if (!isServer) {
        devTools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (x) => x;
    }
}

const initialState = !isServer ? window.__NEXT_DATA__.props.initialState : {};

const nextAppStore = () => initAppStore(initialState, { devTools, extraMiddlewares });

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
    return (
        <Component {...pageProps} />
    );
}

MyApp.getInitialProps = async ({ Component, ctx }: AppContext): Promise<AppInitialProps> => {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

    return { pageProps: { ...pageProps, isMobile: isMobile(ctx.req.headers['user-agent']) } };
};

export default createWrapper(nextAppStore, { debug: false }).withRedux(MyApp);
