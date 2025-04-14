import ExpenseItem from "./ExpensesItems";
import { useState } from "react";
import Card from "../ExpenseCard/Card";
import {
  ConfiguredStateIncrease,
  ConfiguredStateDecrease,
} from "./UtilityFunctions/StateCounters";

const ExpensesList = (propsFromApp) => {
  const Expenses = propsFromApp.Expenses;
  const fState = propsFromApp.fState;
  const [year, setyear] = useState(2021);

  const filteredListByYear = Expenses.filter(
    (element, i) => element.date.getFullYear() === year
  );

  console.log(Expenses[0].date.getFullYear());
  const list = () => {
    // let reversed = [...Expenses].reverse();
    //    let reversed = structuredClone(filteredListByYear)
    return (
      filteredListByYear
        // .slice(0,count)
        // .reverse()
        .map((element) => <ExpenseItem ExpenseElement={element}></ExpenseItem>)
    ); // hum yahi say
    // bhi no elemnts found wala kaam krsaktay hein:<p>no elements found</p>
    //  console.log(list)
  };

  const addNewExpenseButtonHandler = function () {
    propsFromApp.setFormState(true);
  };

  const onChangeyearFilterHandler = function (e) {
    console.log(e.target.id);
    setyear(Number(e.target.value));
  };

  const ExpenseDateFilterUI = (
    <Card className="expenses">
      <select
      className="bg-grey"
        value={year}
        id={"year: " + year}
        onChange={onChangeyearFilterHandler}
      >
        <option className="text-purple-950 visited:outline-none bg-gray-300 " value="2020">2020</option>
        <option className="text-purple-950 visited:outline-none bg-gray-300 " value="2021">2021</option>
        <option className="text-purple-950 visited:outline-none bg-gray-300 " value="2025">2025</option>
      </select>
    </Card>
  );

  const Expense_Items_List =
    list().length === 0 ? <p> no expenses found</p> : list();
  const New_Expense_Button = fState ? null : (
    <button onClick={addNewExpenseButtonHandler}>Add New Expense</button>
  );
  const monthArray = [
    `jan`,
    `feb`,
    `mar`,
    `apr`,
    `may`,
    `jun`,
    `jul`,
    `aug`,
    `sep`,
    `oct`,
    `nov`,
    `dec`,
  ];
  const valueArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  // const heightarray = array.map(n=>`h-${n}`)
  filteredListByYear.forEach((n, i) => {
    const month = n.date.getMonth();
    valueArray[month] += 1;
  });
  console.log(valueArray);
  const maxValue = Math.max(...valueArray);
  let i = 0;
  const ChartBoxComponent = (array) => {
    return (
      <div className="flex justify-center border-1 p-2 mb-3 mt-3 rounded-t-2xl rounded-b-2xl space-x-8">
        {valueArray.map((n, i) => (
          <div className="flex flex-col space-y-2">
            <div className="flex flex-col-reverse items-center bg-blue-500 h-30 w-4 text-red-900 border-1 border-purple-950 rounded-t-2xl rounded-b-2xl">
              <div
                style={{ height: `${n===maxValue ? 100: (n*100)/maxValue}%` }}
                className={`bg-amber-500 text-[10px] w-full rounded-t-4xl rounded-b-4xl`}
              ></div>
            </div>
            <div>{array[i]}</div>
          </div>
        ))}
      </div>
    );
  };
  const showExpenseList = function () {
    return (
      <Card className="expenses">
        {New_Expense_Button}
        {ChartBoxComponent(monthArray)}
        {ExpenseDateFilterUI}
        {Expense_Items_List}
      </Card>
    );
  };
  return showExpenseList();
};
export default ExpensesList;
//but but but how can i store state of filtered items

// console.log(count);
// const getFunctionFromAppForGettingYear = function(){
//                return propsFromApp.getYear(year)
// };

//    const paragraph = <>Lorem ipsum dolor sit amet.</>;
//    const selectDiv= <select value={year} onChange={yearFilterHandler}>
//    <option >2020</option>
//    <option >2021</option>
//    <option >2025</option>
// </select>

// {filteredListByYear.length === 0 ? <p> no expenses found</p> : list()} we can also use this we cuz both have
// remember yahan curly brackets nahi lagayengay
// q k hum expression save kr rahay hein variable mein now ye variable use hosakta hay kisi bhi function k
// return mein as inside jsx like giving props to component as variable values there we can use curly brackets
//  cuz there wu woulld be inside jsx where giving value as a prop to another function we pass it to a fucnutiinon
// with a given name .|{NewExpenceFormUIForAddingnewEvent}|.
// <button onClick={()=>ConfiguredStateIncrease(count,setCount,Expenses.length)}>Add</button>
// if (fState === true) {
//   return (
//     <Card className="expenses">
//       {ExpenseDateFilterUI}
//       <Card className="expenses">
//       {Expense_Items_List}
//       </Card>
//     </Card>
//   );
// }
// lets create and display inshallah and filter them
//  {!propsFromApp.fState && <button onClick={addNewExpenseButtonHandler}>Add New Expense</button>}
/* <button onClick={()=>ConfiguredStateDecrease(count,setCount,Expenses.length)}>Remove</button>  */

//And no need for emty tags its already inside Card tag
//And 'on' Events expects function so either we pass
// anounamas function or create and function and pass just
// a name of that function inside curly brackets

// so list is being called well list will always being called
// we are calling it it will be called everytime the component rerenders
//  through useState where state is that count variable which on the
// onClick Event will be called by that event itself so here we will
// just points to that function which means we will pass function n
// ame or define an anoynamas function inside like
// onClick={function (){}}
// or
// onClick={configuredStateIncrease}
// here just the name of the function or pointing to that function
//  not calling it like () cuz it will call it instantly before we click
//

/// props rakhnay ki kya zaroorat jab hum import bhi to krsaktay hein q
// <ExpenseItems ExpenseItems={Expenses[0]}></ExpenseItems>
// removing item in an array on specific index

//    const mapingAndRenderinglist = ()=>{

//     for(let i = 0; i<Expenses.length; i++)

//    }

// why all of them are running and executing by self i just i didnt even called it once the count variable
// Because we called them in some other component or components multiple times so

// const ConfiguredStateIncrease = ()=>{

//     if(count>0 && count<Expenses.length) {
//         i++;
//         setCount(count+1);
//         // console.log(`i = ${i} count = ${count}`);
//     };

// };

//     if(count>1 && count<Expenses.length+1) {
//         i++;
//         setCount(count-1);
//         // console.log(`i = ${i} count = ${count}`);
//     };

//     }

// const handleIncrease = ConfiguredStateIncrease(count,setCount,Expenses.length);
// const handleDecrease = ConfiguredStateDecrease(count,setCount,Expenses.length);
