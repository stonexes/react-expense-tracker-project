import { useEffect, useState,useContext } from "react";
import axios from "axios";
import { Routes,Route } from "react-router-dom";

import "./App.css";
import expenses from "../expenses";
import "./Components/Expenses/CSS/Expense.css";
import ExpensesStateVariablesAndFunctions from "./Contexts/ExpensesAppContext";
import Card from "./Components/ExpenseCard/Card";
import ExpensesList from "./Components/Expenses/ExpenseList";
import NewExpenseFormFunction from "./Components/NewExpenseForm/NewExpenseFormFunction";
import { NewExpenseFormContextWraper } from "./Contexts/NewExpenseFormContext";
import ExpenseItem from "./Components/Expenses/ExpensesItems";
// import ExpenseListUI from "./Components/Expenses/ExpenseListUI";

function App() {
  let count = 0
  count++
  console.log(`App Rendered ${count} time${count>1?`s`:``} `)
  const [newExpense, setNewExpense] = useState(0);
  const [formSwitch, setFormSwitch]= useState(false)
  const [year, setYear] = useState(2025);
  const [Expenses , setExpenses] = useState([{
    id:Date.now(),
    title:'stock',
    amount:'20',
    date: "2025-04-02T00:00:00.000Z"
  }])
  const expensesFilteredByYear = Expenses.filter(
    (element, i) => new Date (element.date).getFullYear() === year
  );
  // const expenses_ =expenses;

  // console.log(newExpense)
  useEffect(()=>{
  //  let ExpenseCopy = [];
    axios.get('/api/expenses?param1=34&mock2=30')
    .then(response=>{
      // WE CAN ALSO USE forEach LOOP TO CONVER DATE FROM STRING TO ACTUAL DATE LIKE new Date(el.date)

      // const dataConvertedDate = response.data.map(el=>el.date = new Date(el.date))
      // console.log(dataConvertedDate)
      setExpenses([...response.data])
      // console.log(typeof response)
      //  console.log(response.data)

      // ExpensesFrombackend = [...ExpensesFrombackend,...response.data];
      // console.log(Expenses)
      // console.log(ExpensesFrombackend);
    });  
  },[newExpense]);
  
  // console.log(Expenses)// it wont show new expenses but rather the current expenses cuz setExpenses fucntion will run and set the expenses on next render where useeffect wont run again  i guess
  const getNewExpenseData = (data) =>{
        
        const NewExpenseDataObj = {...data};
        // expenses_.push(NewExpenseDataObj);
        // setCount((prev)=>prev+1)
        // console.log(expenses_);
        
  };
//   const getFunctionFromAppForGettingYear = function(year){
//     const Year = year 
//     return (Year);
// };

// const expenseListComponent = <ExpensesList Expenses={Expenses} fState = {formSwitch}  setFormState = {setFormSwitch} getYear={getFunctionFromAppForGettingYear} ></ExpensesList>
const expenseListComponent = <ExpensesList/>
// const AppUI = function (){ 
//       return <>
// {expenseListComponent}
//       </>
//       // formSwitch ?
       
//        {/* <NewExpenseFormFunction getData = {getNewExpenseData} setFormState = {setFormSwitch} setCount={setCount}></NewExpenseFormFunction> */}
//       {/* <NewExpenseFormFunction /> */}
       
       
//       // : 
//       // <>
//       //  {expenseListComponent} 
//       // </>
// };       
 
  return (

    <ExpensesStateVariablesAndFunctions.Provider  value={{newExpense,setNewExpense,formSwitch,setFormSwitch,Expenses,setExpenses,getNewExpenseData,year,setYear,expensesFilteredByYear}}>
        <NewExpenseFormContextWraper>
     <Routes>
        <Route path= '/edit/:expenseid' element={<NewExpenseFormFunction/>} />
        <Route path='/' element={<ExpensesList/>} />
     </Routes>
        </NewExpenseFormContextWraper>
    </ExpensesStateVariablesAndFunctions.Provider>
    
  )
  //making a view with number of buttons navigating to corresponding compoenent UI with back button for each UI

};//can these components in element prop have their own router and routes like which we doing here

export default App;

// {showForm()}

// {Expenses ? Expenses.map((ex,i)=>(
//   <div className="bg-amber-400 text-center"  >{ex.title}</div>
// )):
// <div> No expenses yet </div>
// }






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