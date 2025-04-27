import { useState,createContext } from "react";


const NewExpenseFormContext = createContext(); //initially empty but we will fill it or give values inside NewExpenseFormContextWraper compoenet that be ok i guess

const NewExpenseFormContextWraper = ({children})=>{
    const [formObject,setFormObject] = useState({
        title: ``,
        amount: ``,
        date: ``
      });
    return <NewExpenseFormContext.Provider value={{formObject,setFormObject}}>
         {children}
         </NewExpenseFormContext.Provider>
    
}
export {NewExpenseFormContext,NewExpenseFormContextWraper} ;
// so if we use export default and the name of that function then 
// we can use anyname to import it from that directory it will give that default function but
// and there is only one default export 

///While

// using just export we can destruct that function or variable when importing using exact name 