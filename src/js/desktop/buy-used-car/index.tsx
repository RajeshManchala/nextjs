import Button from '../../common/button';

interface Props {
    carMakeModel: string | string[] | null;
    city: string | string[] | null;
}

const BuyUsedCar = (props: Props): JSX.Element => {
    const { carMakeModel, city } = props;

    return (
        <div>
            {`Buy ${carMakeModel as string} Car in ${city as string} desktop`}
            <Button label="Desktop" />
        </div>
    );
};

export default BuyUsedCar;
