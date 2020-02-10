import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpense from '../selectors/expenses';

const ExpenseList = props => {
  const expenses = props.expenses.map(expense => (
    <ExpenseListItem {...expense} key={expense.id} />
  ));
  return (
    <div>
      <h1>Expense List</h1>
      {expenses}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    expenses: selectExpense(state.expenses, state.filters),
  };
};

export default connect(mapStateToProps)(ExpenseList);
