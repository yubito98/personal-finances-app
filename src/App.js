import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import Transactions from './components/Transactions/Transactions'
import TransactionModal from './components/TransactionModal/TransactionModal'
import React, {useState, useEffect} from "react";

function App() {

  const [transactions, setTransactions] = useState([]);

  useEffect(() =>{
      const storedTransactions = localStorage.getItem("transactions");
      if(storedTransactions){
          setTransactions(JSON.parse(storedTransactions))
      }else{
          localStorage.setItem("transactions", JSON.stringify([]))
      }
  }, [])



  return (
    <div className='container'>
      <div className='col-12 col-md-6'>
        <TransactionModal transactions={transactions}/>
        <Transactions transactions={transactions}/>
      </div>
    </div>
  );
}

export default App;
