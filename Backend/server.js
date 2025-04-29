const express = require(`express`);
const fs = require(`fs`);
const app = express();
const dotenv = require(`dotenv`);
dotenv.config({path:`./config.env`});
const env = process.env;
const expensesDataJson = JSON.parse(fs.readFileSync(`./expenses.json`)); // parse means 
// convert data which is in json format to javaScript object to work on it to use it to manipulate it etc 
// well that what we do with arrays objects  yes
const expensesArrayOfObjects = fs.readFileSync(`./expenses.js`);
const expensesFile = require(`./expenses`);
// const { count } = require("console");
// const { json } = require("stream/consumers");
// console.log(expensesDataJson)
// console.log(expensesArrayOfObjects)
// const data = `Expenses`
// console.log(typeof expensesArrayOfObjects)
// console.log(typeof expensesDataJson)
app.use(express.json());
// .idFromManualyAddedparamsFromFrontend
app.get(`/api/expenses`,(req,res)=>{
     console.log(`Get `,req.url)
     console.log(`parameter1:- `,req.query.param1)
     console.log(`parameters:- `,req.query)

     res.status(200).json(expensesDataJson)
});
app.post(`/api/expenses/`,(req,res)=>{
    
    let data = req.body;
    const id = expensesDataJson[expensesDataJson.length-1].id+1;
    data = {id:id,...data}
    let updatedData = [...expensesDataJson,data]
     updatedData = JSON.stringify(updatedData) // stringify means convert java script object in to json format 
     
    fs.writeFile(`./expenses.json`,updatedData,err=>{
        if(err){

             console.log(`Error while writing : ${err}`)
            return res.status(500).send({message:`file could be stored`})
        }
        console.log(`Posted At `,req.url,data)
        res.status(201).send({message:`file savd successfully`})
    });
     
});        ///////////////Kuch bhi rakh do is ka nam : k baad ye variable isi nam say req.params.(jo nam route mein dia hay)
           //////////////Parameters route adderess ya url bol do iss Symbol : k bad jitnay bhi variables hein wo request k parameters kehlayengay
           //////////////jab k yahan hum url ka hissa bana dia hay parameters ko aur yaad rahay ye saray values string hotay hein isiliay jesay neechay 
           // code mein hum na 1 k sath multiply kia id ko tak number type ban jai aou hum is ko use krsakein 
app.delete(`/api/expenses/:id`,(req,res)=>{
    console.log(`parameters:- `,req.params)
    console.log(req.params.id)
    const deletedItemId = req.params.id*1;
       let newExpenses = expensesDataJson.filter(exp=>exp.id!== deletedItemId)
       newExpenses = JSON.stringify(newExpenses)
       fs.writeFile(`./expenses.json`,newExpenses,err=>{
        if(err) return console.log(`Error while writing to file: `,err)
           
        // console.log(expensesDataJson)
        console.log(`Delete`,req.url,structuredClone(expensesDataJson).find(ex=>ex.id===deletedItemId))
         return res.status(201).send({message:`Item deleted with id${deletedItemId}`})
           
       })
 
})
app.patch(`/api/expenses/:id`,(req,res)=>{
 const id = req.params.id*1;
 console.log(id)
 const body = req.body;
 console.log(body)
//   let expenseToBeUpdated = expensesDataJson.find(ex=>ex.id===id);
//   let expensesDataJsonCopy = [...expensesDataJson];
//    expensesDataJsonCopy[id] = {...expensesDataJsonCopy[id],...body}
//    console.log(expensesDataJsonCopy)
//    console.log(expensesDataJsonCopy.filter(ex=>ex.id===id))///whole array with that element or content satisfying spacified logic
//    console.log(expensesDataJsonCopy.find(ex=>ex.id===id)) // just that element in that array 
//    expensesDataJsonCopy.forEach(ex => {
//             if(ex.id===id){
//                ex = {...ex,...body}
//                console.log(ex)
//             }

//    });
//    const updatedExpenseArray = structuredClone(expensesDataJson).reduce((acc,ex)=>{

//     if(ex.id===id){
//         ex = {id:ex.id,...body}
//         // console.log(ex)
//     }
//     acc.push(ex)
//         return acc // we must return acc or it wont be stored in [] we created fot that
//    },[])
   const updatedExpenseArrayMap = structuredClone(expensesDataJson).map((ex)=>{

    if(ex.id===id){
        ex = {id:ex.id,...body}
        console.log(ex)
    }
    
        return ex // we have to return that element in map other wise it will be remained as undefined 
   })
    
 
   fs.writeFile(`./expenses.json`,JSON.stringify(updatedExpenseArrayMap),(err)=>{
               if(err) return console.log(`error while writing to file`);
                 console.log(`Patched At `,req.url,body)
                return res.sendStatus(200);
   })
   
//   console.log(expensesDataJson);
//   res.sendStatus(200)
    //   expensesDataJson[id] = {...expensesDataJson[id],...req.body}

});

// console.log(expensesDataJson)
console.log(process.env.OWNER)
const port = process.env.PORT
app.listen( port || 3000, ()=>{
    console.log(`server is running at port ${port} `)
});