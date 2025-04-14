import './CSS/ExpenseForm.css'

const ExpenseForm = ()=>{

return (<form onSubmit={submitHandler}>
    <div className="new-expense__controls">
    <div className="new-expense__control">
      <label htmlFor="title">Title</label>
      <input
        id="title"
        type="text"
        value={formState.title}
        onChange={titleHandler}
      />
    </div>
    <div className="new-expense__control">
    <label htmlFor="amount">Amount</label>
      <input
        id="amount"
        min='.01'
        step='.01'
        type="number"
        value={formState.amount}
        onChange={amountHandler}
      />
    </div>
    <div className="new-expense__control">
    <label htmlFor="date">Date</label>
      <input
        id="date"
        type="date"
        min='1998-01-01'
        max='2025-12-31'
        value={formState.date}
        onChange={dateHandler}
      />
    </div>
    <button type="submit">Submit</button>
    </div>
  </form>); 
};

export default ExpenseForm;