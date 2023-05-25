import React from "react";
import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";
const ExpenseList = (prop) => {
  if (prop.item.length === 0) {
    return <h2 className="expenses-list__fallback"> Found no expenses</h2>;
  }

  return (
    <ul className="expenses-list">
      {prop.item.map((expense) => (
        <ExpenseItem
          key={expense.id}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        />
      ))}
    </ul>
  );
};
export default ExpenseList;
