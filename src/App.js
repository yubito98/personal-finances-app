import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import React, {useState, useEffect} from "react";
import axios from "axios";
import Transactions from './components/Transactions/Transactions';
import TransactionModal from './components/TransactionModal/TransactionModal';
import Filters from './components/Filters/Filters';
import Header from './components/Header/Header';
import TotalCategories from './components/TotalCategories';

function App() {

  const [transactions, setTransactions] = useState([])

  const url = 'http://localhost:8080/api';

  const getTransactions = async () =>{
      const response = await axios.get(`${url}/transactions`);
      const data = response.data;
      setTransactions(data)
  }

  useEffect(() => {
    getTransactions();
}, [transactions]);

  return (
    <>
    <Header/>
    <main >
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-8 '>
            <Filters transactions={transactions} />
            <TransactionModal transactions={transactions}/>
            <Transactions transactions={transactions}/>
          </div>
          <div className='col-12 col-md-4' >
            <TotalCategories transactions={transactions} />
          </div>
        </div>

      </div>
    </main>
    </>
  );
}

export default App;
