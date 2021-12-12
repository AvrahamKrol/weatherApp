export const useDay = (days, id) => {
    if (days) {
        // eslint-disable-next-line
        console.log(days?.find((day) => day?.day === id), id);
        const findDay = days?.find((day) => day.day === id) || days[ 0 ];

        return findDay;
    }
};
