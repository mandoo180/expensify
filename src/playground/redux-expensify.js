store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

const expenseOne = store.dispatch(
  addExpense({ description: 'rent', amount: 300, createdAt: 300 })
);
const expenseTwo = store.dispatch(addExpense({ description: 'coffee', amount: 200 }));
const expenseThree = store.dispatch(
  addExpense({ description: 'food', amount: 500, createdAt: 100 })
);

// store.dispatch(removeExpense({ id: expenseThree.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

// store.dispatch(setTextFilter('en'));
// store.dispatch(setSortBy('amount'));
// store.dispatch(setDate(0, 2000));
