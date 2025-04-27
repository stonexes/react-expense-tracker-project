import { useState,useContext, useEffect } from "react";
import Card from "../ExpenseCard/Card";
import "./CSS/ExpenseForm.css";
import "./CSS/NewExpenseFormFunction.css";
import axios from "axios";
import ExpensesStateVariablesAndFunctions from "../../Contexts/ExpensesAppContext";
import {NewExpenseFormContext} from "../../Contexts/NewExpenseFormContext";
import { useParams,useNavigate } from "react-router-dom";
// import NewExpenseFormContextWraper from "../../Contexts/NewExpenseFormContext";
let count = 1

const NewExpenseFormFunction = () => {
  console.log(`ExpenseForm Rendered ${count} time${count>1?`s`:null} `)
  count++;

  const {expenseid}= useParams();
  console.log(typeof Number(expenseid))
  const navigate = useNavigate();
  // console.log()
  const {setNewExpense,getNewExpenseData,setFormSwitch,Expenses}=useContext(ExpensesStateVariablesAndFunctions);
  const {formObject,setFormObject} = useContext(NewExpenseFormContext)
  useEffect(()=>{
    if (expenseid){
      const currentExpense = Expenses.find(ex=>ex.id===Number(expenseid));
      // console.log(`Current Expense Object`, Expenses[Number(expenseid)])
         console.log(`Current Expense Object`, currentExpense)
         setFormObject({
          // id:currentExpense.id,
          title:currentExpense.title,
          amount:currentExpense.amount,
          date:new Date(currentExpense.date)
        })
    }

  },[expenseid])
  // const [formObject,setFormObject] = useState({
  //   title: ``,
  //   amount: ``,
  //   date: ``,
  // });

  const titleHandler = (e) => {
  setFormObject((prev) => ({
      ...prev,
      title: e.target.value,
    }));
  };

  const amountHandler = (e) => {
  setFormObject((prev) => ({
      ...prev,
      amount: Number(e.target.value),
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
      // console.log(formData);
    
      if(!expenseid){

      formData.date = formData.date.toISOString();
      axios.post(`./api/expenses`,formData)
      .then(response=>{
        console.log(`successfully sent`,response.status)
        setTimeout((...args)=>{
          setNewExpense((prev)=>prev+1);
          console.log(args.join(` `))
        },3000,`3secs`,` TimeOutComplete`)
        // count +=1;
        setFormObject({
          // to ye ab background mein chal rha tab tak neechay wala code akhir tak run hoga i think
          title: ``,
          amount: ``,
          date: ``,
        });
      })
      .catch(err=>{
        // console.log(`Errooorr`,err)
      })
      

      // console.log(formData);
        // const formDataDateConvertedToString = formData.date.to
      return getNewExpenseData(formData);
    }else{
      const currentExpense = Expenses.find(ex=>ex.id===Number(expenseid));
      if(currentExpense){
        axios.patch(`/api/expenses/${expenseid}`,formObject)
        .then(response=>{
          console.log(`response from Backend`,response)
          setTimeout((...args)=>{
            setNewExpense((prev)=>prev+1);
            console.log(args.join(` `))
          },3000,`3secs`,` TimeOutComplete`)
          navigate(`/`)
        })
        .catch(err=>{
          console.log(`error while updating Patch methed `)
        })
        console.log(currentExpense)

      //   setFormObject({
      //    // id:currentExpense.id,
      //    title:currentExpense.title,
      //    amount:currentExpense.amount,
      //    date:new Date(currentExpense.date)
      //  })
       
      }
      
    }
  }
    //setFormObject("");
    //setFormObject("");
    // console.log(formData);
  };
const editExpensehandler = ()=>{
             
};
  const cancelButtonHandler = function () {

    setFormSwitch(false);

  };//!expenseid ? submitHandler: editExpensehandler
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
        <button type="submit">{!expenseid ? `Submit` : `SaveChanges`}</button>
        {!expenseid ? <button onClick={cancelButtonHandler}>Cancel</button>: null}
        </div>
      </form>
    </Card>
 
  );
};

export default NewExpenseFormFunction;
