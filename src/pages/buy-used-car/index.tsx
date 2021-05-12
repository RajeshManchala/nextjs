/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import dynamic from 'next/dynamic';
import { NextRouter, useRouter } from 'next/dist/client/router';

const DsiteHome = dynamic(() => import('../../js/desktop/buy-used-car'));
const MsiteHome = dynamic(() => import('../../js/mobile/buy-used-car'));

interface Props {
    isMobile: boolean;
}

const BuyUsedCar = (props: Props): JSX.Element => {
    console.log(props);
    const { isMobile } = props;
    const { query: { carMakeModel, city } }: NextRouter = useRouter();
    return (
        <>
            {isMobile
                ? (
                    <MsiteHome
                        carMakeModel={carMakeModel}
                        city={city}
                    />
                )
                : (
                    <DsiteHome
                        carMakeModel={carMakeModel}
                        city={city}
                    />
                )}
        </>
    );
};

export default BuyUsedCar;
