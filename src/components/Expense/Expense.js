import "./Expense.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
const Expense = (prop) => {
  return (
    <Card className="expenses">
      <ExpenseItem
        date={prop.item[0].date}
        title={prop.item[0].title}
        amount={prop.item[0].amount}
      ></ExpenseItem>
      <ExpenseItem
        date={prop.item[1].date}
        title={prop.item[1].title}
        amount={prop.item[1].amount}
      ></ExpenseItem>
      <ExpenseItem
        date={prop.item[2].date}
        title={prop.item[2].title}
        amount={prop.item[2].amount}
      ></ExpenseItem>
      <ExpenseItem
        date={prop.item[3].date}
        title={prop.item[3].title}
        amount={prop.item[3].amount}
      ></ExpenseItem>
    </Card>
  );
};
export default Expense;
