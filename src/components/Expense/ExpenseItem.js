import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
const ExpenseItem = (prop) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={prop.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{prop.title}</h2>
      </div>
      <div className="expense-item__price">${prop.amount}</div>
    </Card>
  );
};
export default ExpenseItem;
