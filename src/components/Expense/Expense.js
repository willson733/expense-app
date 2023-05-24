import React, { useState } from "react";
import "./Expense.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
const Expense = (prop) => {
  const [filterChanged, setFilterChanged] = useState("2023");
  const onFilterChangedHandler = (changedYear) => {
    setFilterChanged(changedYear);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filterChanged}
        onChangeFilter={onFilterChangedHandler}
      />
      {prop.item.map((expense) => (
        <ExpenseItem
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        />
      ))}
    </Card>
  );
};
export default Expense;
