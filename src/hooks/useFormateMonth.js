export const useFormateMonth = (month) => {
    let formatedMonth = null;
    if (month === 'март'
        || month === 'август') {
        formatedMonth = `${month}а`;
    } else formatedMonth = `${month?.slice(0, -1)}я`;

    return formatedMonth;
};
