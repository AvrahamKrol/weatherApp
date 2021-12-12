import * as yup from 'yup';

// eslint-disable-next-line no-template-curly-in-string
const tooLongMessage = 'максимальная длина - ${max} символов';

export const schema = yup.object().shape({
    minTemperature: yup
        .number()
        .max(2, tooLongMessage)
        .required('*'),
    maxTemperature: yup
        .number()
        .max(2, tooLongMessage)
        .required('*'),
});
