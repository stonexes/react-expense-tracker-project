import './CSS/ExpensesItems.css'
import ExpenseDate from "./ExpensesDate";
import Card from '../ExpenseCard/Card';

const ExpenseItem = (propsFrom_ExpenseList)=>{
        
             // making constants for every used prop 
    return (
    <Card className='expense-item'>
        <ExpenseDate date={propsFrom_ExpenseList.ExpenseElement.date}></ExpenseDate>
        <div className='expense-item__description'>
          <h2 className='expense-item h2'>{propsFrom_ExpenseList.ExpenseElement.title}</h2>
          <div className='expense-item__price'>{propsFrom_ExpenseList.ExpenseElement.amount}$</div>
        </div>
      </Card> 
    );
}
// standard for loop for adding and removing cards 
export default ExpenseItem;