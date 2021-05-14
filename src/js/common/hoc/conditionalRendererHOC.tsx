import { isMobile } from "../utils/deviceDetectionUtil";

interface Props {
    isMobile: boolean;
}

const ConditionalRendererHOC = (DesktopComponent, MobileComponent) => {
    const WrapperComponent = (props: Props) => {
        const { isMobile } = props;
        return (
            <>
                {isMobile ? <MobileComponent {...props} /> : <DesktopComponent {...props} />}
            </>
        );
    }
    WrapperComponent.getInitialProps = (ctx) => {
        const { req } = ctx;
        if (isMobile(req.headers['user-agent'])) {
            return MobileComponent.getInitialProps(ctx);
        }
        return DesktopComponent.getInitialProps(ctx);
    }
    return WrapperComponent;
};


export default ConditionalRendererHOC;
