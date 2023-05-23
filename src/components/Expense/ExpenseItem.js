import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
const ExpenseItem = (prop) => {
  const [title, setTitle] = useState(prop.title);
  const clickHandler = () => {
    setTitle("update!");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={prop.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price">${prop.amount}</div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};
export default ExpenseItem;
