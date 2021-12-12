export const useDay = (days, id) => {
    if (days) {
        const findDay = days?.find((day) => day.day === id) || days[ 0 ];
        // eslint-disable-next-line
        console.log(findDay);

        return findDay;
    }
};
