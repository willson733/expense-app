import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (prop) => {
  const [enteredTitle, setEnterTitle] = useState("");
  const [enteredAmount, setEnterAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const titleChangeHandler = (event) => {
    setEnterTitle(event.target.value);
  };
  const amountChangedHandler = (event) => {
    setEnterAmount(event.target.value);
  };
  const dateChangedHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    prop.onSaveExpenseData(expenseData);
    setEnterAmount("");
    setEnterTitle("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.1"
            step="0.1"
            value={enteredAmount}
            onChange={amountChangedHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-01-12"
            value={enteredDate}
            onChange={dateChangedHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
