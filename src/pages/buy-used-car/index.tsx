import dynamic from 'next/dynamic';
import ConditionalRendererHOC from '../../js/common/hoc/conditionalRendererHOC';
import { getBasicApi } from '../../js/redux/actions/basicActions';
import { getBasicApi as getDesktopApi } from '../../js/redux/actions/basicActionsDesktop';
import basicReducer from '../../js/redux/reducers/basicReducer';
import basicReducerDesktop from '../../js/redux/reducers/basicReducerDesktop';

const DsiteHome = dynamic(() => import('../../js/desktop/buy-used-car'));
const MsiteHome = dynamic(() => import('../../js/mobile/buy-used-car'));

const DesktopComponent = (props: any) => {
    return (
        <DsiteHome {...props} />
    )
}

DesktopComponent.getInitialProps = async ({ store }) => {
    store.injectReducer('basicDesktop', basicReducerDesktop);
    await store.dispatch(getDesktopApi({}));
}

const MobileComponent = (props: any) => {
    return (
        <MsiteHome {...props} />
    )
}

MobileComponent.getInitialProps = async ({ store }) => {
    store.injectReducer('basicMobile', basicReducer);
    await store.dispatch(getBasicApi({}));
}

export default ConditionalRendererHOC(DesktopComponent, MobileComponent);
