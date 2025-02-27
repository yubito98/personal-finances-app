import React, {useState, useEffect} from "react"
import './BalanceReport.css'

function BalanceReport({transactions}){

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
        <div className="pt-4">
            <div className="row mb-3">
                <div className="col-12 col-md-4">
                    <div className="balance-report-item">
                        <h4 className="balance-title">Saldo</h4>
                        <span className="balance-value balance">{totalBalance}</span>
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <div className="balance-report-item">
                        <h4 className="balance-title">Ingresos</h4>
                        <span className="balance-value income">{totalIncome}</span>
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <div className="balance-report-item">
                    <h4 className="balance-title">Gastos</h4>
                        <span className="balance-value expense">{totalExpense}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default BalanceReport