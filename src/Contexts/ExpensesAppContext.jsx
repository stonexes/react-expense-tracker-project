
import { createContext,useContext} from "react";


const ExpensesStateVariablesAndFunctions = createContext();//or({}) or // whole default variables and functions inside it //it can have nothing too cuz it always gonna be replaced by actual variable and functionse insie an object
//so we actualyy create a context name ExpensesStateVariablesAndFunctions and no default values 
//means we created an empty context we have to fill or populate it with some values and functions we might need
//in any component inside that context wraper   which are when needed 



export default ExpensesStateVariablesAndFunctions;