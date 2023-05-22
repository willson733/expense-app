function ExpenseDate(prop) {
  const day = prop.date.toLocaleString("en-US", { day: "2-digit" });
  const month = prop.date.toLocaleString("en-US", { month: "long" });
  const year = prop.date.getFullYear();
  return (
    <div>
      <div>{day}</div>
      <div>{month}</div>
      <div>{year}</div>
    </div>
  );
}
export default ExpenseDate;
