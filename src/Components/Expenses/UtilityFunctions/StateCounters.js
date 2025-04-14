

export const ConfiguredStateDecrease = (count,setCount,length)=>{

    if(count>1 && count<length+1) 
    {

        setCount(count-1);
        // console.log(`i = ${i} count = ${count}`);
    };
   
};

export const ConfiguredStateIncrease = (count,setCount,length)=>{

    if(count>0 && count<length) 
    {
       
        setCount(count+1);
        // console.log(`i = ${i} count = ${count}`);
    };
    
};

export const showExpenseForm = ()=>{

    
    
}
//all functions are needed and we will access them one by one as they would be in objects like in nodejs?

 


// export const State= {ConfiguredStateDecrease,ConfiguredStateIncrease};