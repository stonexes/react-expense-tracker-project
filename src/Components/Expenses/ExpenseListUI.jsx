

import { NewExpenseFormContext } from "../../Contexts/NewExpenseFormContext";
import ExpenseItem from "./ExpensesItems";
import { useContext } from "react";



// console.log(Expenses[0].date.getFullYear());
const list = () => {
      const {expensesFilteredByYear} = useContext(NewExpenseFormContext)
    // let reversed = [...Expenses].reverse();
       let reversed = structuredClone(expensesFilteredByYear).reverse();
    return (
      // filteredListByYear
        // .slice(0,count)
        reversed
        .map((element) => <ExpenseItem key={element.id} ExpenseElement={element}></ExpenseItem>)
    ); // hum yahi say
    // bhi no elemnts found wala kaam krsaktay hein:<p>no elements found</p>
    //  console.log(list)
};

export {list};