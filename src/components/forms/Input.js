import { useStore } from '../../hooks';

export const Input = (props) => {
    const input = (
        <input
            className = { props.className }
            disabled = { props.disabled }
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

