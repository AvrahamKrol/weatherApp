export const Input = (props) => {
    // eslint-disable-next-line
    // console.log(props);
    const input = (
        <input
            className = { props.className }
            type = { props.type }
            id = { props.id }
            value = { props.value }
            name = { props.name }
            { ...props.register } />);

    return (
        <>
            { input }
        </>
    );
};

Input.defaultProps = {
    type: 'text',
    tag:  'input',
};

