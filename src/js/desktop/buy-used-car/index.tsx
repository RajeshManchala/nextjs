import { NextRouter, useRouter } from 'next/dist/client/router';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import Button from '../../common/button';
import ReducerInjectorHOC from '../../common/hoc/ReducerInjectorHOC';
import { getBasicApi } from '../../redux/actions/basicActionsDesktop';
import basicReducer from '../../redux/reducers/basicReducerDesktop';
import { BasicReducerDesktopInterface } from '../../redux/reducers/types/basicReducerDesktop';

interface Props {
    basicAction: () => {},
    data: BasicReducerDesktopInterface,
}

const BuyUsedCar = (props: Props): JSX.Element => {
    const { data, basicAction } = props;
    const { query: { carMakeModel, city } }: NextRouter = useRouter();

    useEffect(() => {
        basicAction();
    }, [])

    return (
        <div>
            {data.data.name}
            {`Buy ${carMakeModel as string} Car in ${city as string} desktop`}
            <Button label="Desktop" />
        </div>
    );
};

const mapStateToProps = (state) => ({
    data: state.basicDesktop
});

const mapDispatchToProps = (dispatch) => ({
    basicAction: () => dispatch(getBasicApi({}))
})

export default ReducerInjectorHOC('basicDesktop', basicReducer)(
    connect(mapStateToProps, mapDispatchToProps)(BuyUsedCar)
);
