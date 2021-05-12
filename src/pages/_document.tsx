import Document, {
    Head, Html, Main, NextScript,
} from 'next/document';

class MyDocument extends Document {
    render(): JSX.Element {
        return (
            <Html>
                <Head>
                    <title>Next JS</title>
                    <meta name="description" content="Next JS" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
