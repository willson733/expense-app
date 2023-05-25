import React, { useState } from "react";
import "./Expense.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";
const Expense = (prop) => {
  const [filterYear, setFilterYear] = useState("2023");

  const onFilterChangedHandler = (changedYear) => {
    setFilterYear(changedYear);
  };

  const expenseFilter = prop.item.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onChangeFilter={onFilterChangedHandler}
        />
        <ExpenseChart expenses={expenseFilter} />
        <ExpenseList item={expenseFilter} />
      </Card>
    </li>
  );
};
export default Expense;
