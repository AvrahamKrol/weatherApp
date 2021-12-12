export const useDay = (days, id) => {
    if (id) {
        const findDay = days?.find((day) => day.id === id);

        return findDay;
    }
    if (days) {
        // eslint-disable-next-line
    console.log(days[ 0 ]);

        return days[ 0 ];
    }
};
