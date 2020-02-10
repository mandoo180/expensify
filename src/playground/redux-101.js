import { createStore } from 'redux';

// action generator
const incrementCount = ({ incrementBy = 1 } = {}) => ({ type: 'INCREMENT', incrementBy });
const decrementCount = ({ decrementBy = 1 } = {}) => ({ type: 'DECREMENT', decrementBy });
const setCount = ({ count = 0 } = {}) => ({ type: 'SET', count });

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + action.incrementBy };
    case 'DECREMENT':
      return { count: state.count - action.decrementBy };
    case 'SET':
      return { count: action.count };
    default:
      return state;
  }
};

const store = createStore(countReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount({ incrementBy: 3 }));

store.dispatch(decrementCount({ decrementBy: 5 }));

store.dispatch(setCount({ count: 0 }));
store.dispatch(setCount({ count: 30 }));
