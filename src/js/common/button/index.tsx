interface Props {
    label: string;
}

const Button = (props: Props): JSX.Element => {
    const { label } = props;
    return (
        <button type="button">{label}</button>
    );
};

export default Button;
