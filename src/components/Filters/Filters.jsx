import React, {useState, useEffect} from "react"


function Filters({transactions}){

    const [totalBalance, setTotalBalance ] = useState(0);
    const [totalIncome, setTotalIncome ] = useState(0);
    const [totalExpense, setTotalExpense ] = useState(0);


    useEffect(() =>{
        let balance = transactions.reduce((accumulator, currentValue) =>{
            return accumulator + parseFloat(currentValue.value)
        }, 0)

        let formatBalance = new Intl.NumberFormat('es-CO', {
            style: 'currency',
            currency: 'COP',
            maximumFractionDigits: 0
        }).format(balance);

        let income = transactions.reduce((acc, item) =>{
            if(item.value >= 0){
                return acc + parseFloat(item.value);
            }
            return acc;
        },0)

        let formatIncome = new Intl.NumberFormat('es-CO', {
            style: 'currency',
            currency: 'COP',
            maximumFractionDigits: 0
        }).format(income);

        let expense = transactions.reduce((acc, item) =>{
            if(item.value < 0){
                return acc + parseFloat(item.value);
            }
            return acc
        },0)

        let formatExpense = new Intl.NumberFormat('es-CO', {
            style: 'currency',
            currency: 'COP',
            maximumFractionDigits: 0
        }).format(expense);

        setTotalBalance(formatBalance);
        setTotalIncome(formatIncome);
        setTotalExpense(formatExpense);
    },  [transactions])


    return(
        <div>
            <h1>Cash Flow</h1>
            <form className="row">
                <div className="mb-3 col-12 col-md-4">
                    <label htmlFor="exampleInputEmail1" className="form-label">Start Date</label>
                    <input type="date" className="form-control" />
                </div>
                <div className="mb-3 col-12 col-md-4">
                    <label htmlFor="exampleInputEmail1" className="form-label">End Date</label>
                    <input type="date" className="form-control" />
                </div>
                <div className="mb-3 col-12 col-md-4 d-flex align-items-end"> 
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
                
            </form>
            <div className="row mb-3">
                <div className="col-12 col-md-4">
                    <span className="bold"><b>Balance:</b></span>
                    <span className="badge text-bg-primary mx-2">{totalBalance}</span>
                </div>
                <div className="col-12 col-md-4">
                    <span><b>Income:</b></span>
                    <span className="badge text-bg-success mx-2">{totalIncome}</span>
                </div>
                <div className="col-12 col-md-4">
                    <span><b>Expense:</b></span>
                    <span className="badge text-bg-danger mx-2">{totalExpense}</span>
                </div>
            </div>
        </div>
    )
}



export default Filters