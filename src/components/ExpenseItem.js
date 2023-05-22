import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
function ExpenseItem(prop) {
  return (
    <div className="expense-item">
      <ExpenseDate date={prop.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{prop.title}</h2>
      </div>
      <div className="expense-item__price">${prop.amount}</div>
    </div>
  );
}
export default ExpenseItem;
