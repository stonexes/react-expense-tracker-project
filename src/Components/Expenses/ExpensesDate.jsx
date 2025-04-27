import Card from '../ExpenseCard/Card';
import './CSS/ExpensesDate.css'
 const ExpensesDate = (propsFrom_ExpensesItems)=>{
    let count = 0
    console.log(`ExpenseItem Rendered ${count} time${count>1?`s`:null} `)
    count++;

     const month = propsFrom_ExpensesItems.date.toLocaleString('en-US',{month:'long'});
    //  console.log(propsFrom_ExpensesItems.date.toLocaleString('en-US',{month:'long'}))

     const day = propsFrom_ExpensesItems.date.toLocaleString('en-US',{day:'2-digit'});
    //  console.log(propsFrom_ExpensesItems.date.toLocaleString('en-US',{day:'2-digit'}))

     const year = propsFrom_ExpensesItems.date.getFullYear();
    //  console.log(propsFrom_ExpensesItems.date.getFullYear())

    // console.log(propsFrom_ExpensesItems.date.toLocaleString())
return(
  
    <Card className='expense-date'>
          <div>{month}</div>
          <div>{day}</div>
          <div>{year}</div>    
    </Card>
);

 }
 export default ExpensesDate;