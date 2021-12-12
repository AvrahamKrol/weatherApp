export const useDay = (days, id) => {
    if (days) {
        const findDay = days?.find((day) => day.id === id) || days[ 0 ];

        return findDay;
    }
};
