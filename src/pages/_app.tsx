/* eslint-disable react/jsx-props-no-spreading */
import { AppProps, AppContext, AppInitialProps } from 'next/app';

const isMobile = (userAgent: NavigatorID['userAgent']) => (
    Boolean(/Android|iPhone|iPad|iPod|Opera Mini|IEMobile/i.exec(userAgent))
);

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
    <Component {...pageProps} />
);

MyApp.getInitialProps = async ({ Component, ctx }: AppContext): Promise<AppInitialProps> => {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

    return { pageProps: { ...pageProps, isMobile: isMobile(ctx.req.headers['user-agent']) } };
};

export default MyApp;
