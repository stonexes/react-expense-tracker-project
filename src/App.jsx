import { useState } from "react";

import "./App.css";
import expenses from "../expenses";
import "./Components/Expenses/CSS/Expense.css";

import Card from "./Components/ExpenseCard/Card";
import ExpensesList from "./Components/Expenses/ExpenseList";
import NewExpenseFormFunction from "./Components/NewExpenseForm/NewExpenseFormFunction";

function App() {
  const [count, setCount] = useState(0);
  const [formSwitch, setFormSwitch]= useState(false)
  const expenses_ = expenses;

  const getNewExpenseData = (data) =>{
        const NewExpenseDataObj = {...data};
        expenses_.push(NewExpenseDataObj);
        setCount((prev)=>prev+1)
        // console.log(expenses_);
  };
  const getFunctionFromAppForGettingYear = function(year){
    const Year = year 
    return (Year);
};

const expenseListComponent = <ExpensesList Expenses={expenses_} fState = {formSwitch}  setFormState = {setFormSwitch} getYear={getFunctionFromAppForGettingYear} ></ExpensesList>
  
const showForm = function (){ 
      return formSwitch ?
       <>
       <NewExpenseFormFunction getData = {getNewExpenseData} setFormState = {setFormSwitch} ></NewExpenseFormFunction>
       {expenseListComponent}
       </>
      : 
      <>
       {expenseListComponent} 
      </>
};       
 
  return (
    showForm()
  );
  
};

export default App;









// if (count===0){
//   console.log(getFunctionFromAppForGettingYear);
// }
//{count === 0 ? <ExpensesList Expenses={expenses_} formStateVariable = {formSwitch}  formStateFunction = {setFormSwitch} getYear={getFunctionFromAppForGettingYear}></ExpensesList>
// <h2>Expenses_Details_Blocks</h2>

// <>

//   <NewExpenseFormFunction getData = {getNewExpenseData} formState = {setFormSwitch} ></NewExpenseFormFunction>
//   <ExpensesList Expenses={expenses_}></ExpensesList>
// </>

// <Card className='expenses'>
// </Card>

//yani wo function jo kahi bhi hay jo return krta
//  hay jsx jab hum os ko kisi or component mein import krdein
// to hum os function ko yu samajh lo call kr rahay hein j
// esay koi bhi function kuch return krta hay number string another function
// wesay he yahan hum react walo nay aesa kia hay k hum yahan
//  sirf aesa he return jo koi bhi function krsakta hay aesay he kuch modified
//  functions react walo nay tyar kiay jo pooray html content ya elements aor
// beech mien currlybrackets {} jis k andar hum koi bhi
// javascript expression run krsaktay hein
//||// aor aesa function sirf react enviroment k andar
// kam krsakta hay q k at the end ye transform ho k jaraha hota hay javaSrcipt  jo k browser samajh sakta hay

// wesay he jesay hum yahan krray hein ExpensesList aik component hay jo aik function hay jo return krta
// hay jsx hum os ko yahan aik or jsx k andar call samjho kr rahay hein jo return karay wahi kuch jo return
// mein defined hay