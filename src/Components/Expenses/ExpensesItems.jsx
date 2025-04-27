import './CSS/ExpensesItems.css'
import ExpenseDate from "./ExpensesDate";
import Card from '../ExpenseCard/Card';
import { useContext } from 'react';
import ExpensesStateVariablesAndFunctions from '../../Contexts/ExpensesAppContext';
import axios from 'axios';
import { NewExpenseFormContext } from '../../Contexts/NewExpenseFormContext';
import { useNavigate,useParams } from 'react-router-dom';

const ExpenseItem = (propsFrom_ExpenseList)=>{
  let count = 1
  console.log(`ExpenseItem Rendered ${count} time${count>1?`s`:null} `)
  count++;            //v=() alone single or each one u can say
  const navigate = useNavigate();
  // const {expenseid} = useParams();
  const {Expenses,setExpenses,setNewExpense,setFormSwitch}= useContext(ExpensesStateVariablesAndFunctions)
  // const {formObject,setFormObject} = useContext(NewExpenseFormContext)
        const id = propsFrom_ExpenseList.ExpenseElement.id;
        const title = propsFrom_ExpenseList.ExpenseElement.title;
        const amount = propsFrom_ExpenseList.ExpenseElement.amount;
        const convertedDate = new Date(propsFrom_ExpenseList.ExpenseElement.date);
             // making constants for every used prop or storing in variables u can say
            //  console.log(propsFrom_ExpenseList.ExpenseElement.id)
       const removeExpenseHandler = (e)=>{
            // console.log(`before`,Expenses)
             //  const removeExpenseTimeout=null;
            //  if(e.target.textContent===`Undo`){
              const newExp = Expenses.filter(e=>e.id !== id )
              setExpenses(newExp)
            const deletedExp = Expenses.find(e=>e.id === id )
            //  }
            axios.delete(`/api/expenses/${id}`,deletedExp)
            .then(response=>{
              setTimeout(()=>{

                setNewExpense(deletedExp)
                // console.log(`successfully deleted`,response.status)
              },2000,`2sec timout for delete`)
            })
            .catch(err=>{
              if(err) console.log(`error while deleting`,err)
            }) 
            
             /*e.target.textContent = `Undo`
             
             const removeExpenseTimeout =setTimeout((message)=>{
                const newExp = Expenses.filter(e=>e.id !== propsFrom_ExpenseList.ExpenseElement.id )
                setExpenses(newExp)
                console.log(message)
                },5000,`expense removed`)
               */
           
              // e.target.textContent = `Remove`
              // clearTimeout(removeExpenseTimeout)
            
            // setExpenses(prev=>prev.splice(propsFrom_ExpenseList.ExpenseElement.id,1))
            console.log(`after`,Expenses)
              // e.stopPropagation();
       };
      //  const editButtonHandler = ()=>{
        
      //       navigate(`/edit/${id}`)
      // //          setFormSwitch(true)
      // //  console.log(formObject)
      // //          setFormObject(prev=>(
      // //           {
                  
      // //             title: `${title}`,
      // //             amount: `${amount}`,
      // //           }
      // //          ) )
               
      //  };
    return (
    <Card className='expense-item'>
        <ExpenseDate date={convertedDate}></ExpenseDate>
        <div className='expense-item__description'>
          <h2 className='expense-item h2'>{title}</h2>
          <div className='expense-item__price'>{amount}$</div>
          <button onClick={removeExpenseHandler}>Remove</button>
          <button onClick={()=>navigate(`/edit/${id}`)}>Edit</button>
        </div>
      </Card> 
    );
}
// standard for loop for adding and removing cards 
export default ExpenseItem;