import ExpenseItem from "./components/ExpenseItem";
function App() {
  const item = [
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
      amount: 500.33,
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

  return (
    <div>
      <ExpenseItem
        date={item[0].date}
        title={item[0].title}
        amount={item[0].amount}
      ></ExpenseItem>
      <ExpenseItem
        date={item[1].date}
        title={item[1].title}
        amount={item[1].amount}
      ></ExpenseItem>
      <ExpenseItem
        date={item[2].date}
        title={item[2].title}
        amount={item[2].amount}
      ></ExpenseItem>
      <ExpenseItem
        date={item[3].date}
        title={item[3].title}
        amount={item[3].amount}
      ></ExpenseItem>
    </div>
  );
}

export default App;
