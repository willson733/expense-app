import Expense from "./components/Expense/Expense";
import NewExpnese from "./components/NewExpense/NewExpense";
const App = () => {
  const expense = [
    {
      id: 1,
      title: "Toilet Paper",
      date: new Date(2023, 3, 22),
      amount: 300.33,
    },
    {
      id: 2,
      title: "Car Insurance",
      date: new Date(2021, 2, 12),
      amount: 500.32,
    },
    {
      id: 3,
      title: "Rent",
      date: new Date(2021, 4, 12),
      amount: 100.33,
    },
    {
      id: 4,
      title: "Gas",
      date: new Date(2023, 6, 20),
      amount: 45.13,
    },
  ];
  const addExpenseDataHandler = (addedExpenseData) => {
    console.log(addedExpenseData);
  };

  return (
    <div>
      <NewExpnese onAddExpenseData={addExpenseDataHandler} />
      <Expense item={expense}></Expense>
    </div>
  );
};

export default App;
