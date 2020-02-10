import moment from 'moment';

// Filters Reducer
const filterReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month'),
};
const filterReducer = (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return { ...state, text: action.text };
    case 'SET_SORT_BY':
      return { ...state, sortBy: action.sortBy };
    case 'SET_DATE':
      return { ...state, startDate: action.startDate, endDate: action.endDate };
    default:
      return state;
  }
};

export default filterReducer;
