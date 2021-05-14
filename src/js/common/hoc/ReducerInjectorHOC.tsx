import { ReactReduxContext } from 'react-redux';

const ReducerInjectorHOC = (key, reducer) => (WrappedComponent) => {
    const ReducerInjector = (props) => (
        <ReactReduxContext.Consumer>
            {({ store }: any) => {
                store.injectReducer(key, reducer);
                return (
                    <WrappedComponent {...props} />
                );
            }}
        </ReactReduxContext.Consumer>
    );
    ReducerInjector.displayName = `ReducerInjected${key}`;
    ReducerInjector.getInitialProps = WrappedComponent.getInitialProps;
    return ReducerInjector;
};


export default ReducerInjectorHOC;
