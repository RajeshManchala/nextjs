import Button from '../../common/button';
import basicReducer from '../../redux/reducers/basicReducer';
import ReducerInjectorHOC from '../../common/hoc/ReducerInjectorHOC';
import { getBasicApi } from '../../redux/actions/basicActions';
import { connect } from 'react-redux';
import { BasicReducerInterface } from '../../redux/reducers/types/basicReducer';
import { useEffect } from 'react';
import { NextRouter, useRouter } from 'next/dist/client/router';
import { isServer } from '../../common/utils/server';

interface Props {
    basicAction: () => {};
    data: BasicReducerInterface;
}

const BuyUsedCar = (props: Props): JSX.Element => {
    const { basicAction, data } = props;
    const { query: { carMakeModel, city } }: NextRouter = useRouter();

    useEffect(() => {
        // basicAction();
    }, [])
    console.log(data);
    return (
        <div>
            {JSON.stringify(data.data)}
            {`Buy ${carMakeModel as string} Car in ${city as string} Msite`}
            <Button label="mobile" />
        </div>
    );
};

const mapStateToProps = (state) => {
    console.log(state, "isServer", isServer);
    return ({
        data: state.basicMobile
    });
}

const mapDispatchToProps = (dispatch) => ({
    basicAction: () => dispatch(getBasicApi({}))
})

export default ReducerInjectorHOC('basicMobile', basicReducer)(
    connect(mapStateToProps, mapDispatchToProps)(BuyUsedCar)
);
