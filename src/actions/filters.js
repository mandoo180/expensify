// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({ type: 'SET_TEXT_FILTER', text });

// SET_SORT_BY
const setSortBy = sortBy => ({ type: 'SET_SORT_BY', sortBy });

// SET_DATE
const setDate = (startDate, endDate) => ({ type: 'SET_DATE', startDate, endDate });

export { setTextFilter, setSortBy, setDate };
