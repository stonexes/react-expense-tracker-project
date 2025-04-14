import { useState } from "react";
import Card from "../ExpenseCard/Card";
import "./CSS/ExpenseForm.css";
import "./CSS/NewExpenseFormFunction.css";

const NewExpenseFormFunction = (propFunctionFromApp) => {
  const [formObject,setFormObject] = useState({
    title: ``,
    amount: ``,
    date: ``,
  });

  const titleHandler = (e) => {
  setFormObject((prev) => ({
      ...prev,
      title: e.target.value,
    }));
  };

  const amountHandler = (e) => {
  setFormObject((prev) => ({
      ...prev,
      amount: e.target.value,
    }));
  };

  const dateHandler = (e) => {
  setFormObject((prev) => ({
      ...prev,
      date: new Date(e.target.value),
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (
      formObject.title === `` ||
      formObject.amount === `` ||
      formObject.date === ``
    ) {
      alert(`please fill out all the fields`);
    } else {
      const formData = { ...formObject };
      console.log(formData);
    setFormObject({
        // to ye ab background mein chal rha tab tak neechay wala code akhir tak run hoga i think
        title: ``,
        amount: ``,
        date: ``,
      });
      console.log(formData);

      return propFunctionFromApp.getData(formData);
    }

    //setFormObject("");
    //setFormObject("");
    // console.log(formData);
  };

  const cancelButtonHandler = function () {

     propFunctionFromApp.setFormState(false);

  };
  return (
    <Card className="new-expense">
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label htmlFor="title">Title</label>
            <input
              id="title"
              type="text"
              value={formObject.title}
              onChange={titleHandler}
            />
          </div>
          <div className="new-expense__control">
            <label htmlFor="amount">Amount</label>
            <input
              id="amount"
              min=".01"
              step=".01"
              type="number"
              value={formObject.amount}
              onChange={amountHandler}
            />
          </div>
          <div className="new-expense__control">
            <label htmlFor="date">Date</label>
            <input
              id="date"
              type="date"
              min="1998-01-01"
              max="2025-12-31"
              value={formObject.date}
              onChange={dateHandler}
            />
          </div>
        </div>
        <div className="new-expense__controls">
        <button type="submit">Submit</button>
        <button onClick={cancelButtonHandler}>Cancel</button>
        </div>
      </form>
    </Card>
  );
};

export default NewExpenseFormFunction;
