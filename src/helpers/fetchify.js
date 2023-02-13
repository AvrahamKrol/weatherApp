import CircularProgress from '@mui/material/CircularProgress';

export const fetchify = (isFetched, content) => {
    if (!isFetched && !content) {
        return 'Загрузка...';
    }

    if (content) {
        return content;
    }

    return null;
};
