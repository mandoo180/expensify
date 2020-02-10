import React from 'react';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

const AddExpense = props => (
  <div>
    <p>Page for adding expenses</p>
    <ExpenseForm
      onSubmit={expense => {
        props.dispatch(addExpense(expense));
        props.history.push('/');
        // browser history
      }}
    />
  </div>
);

export default connect()(AddExpense);
