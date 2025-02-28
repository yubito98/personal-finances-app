import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import React, {useState, useEffect} from "react";
import axios from "axios";
import Transactions from './components/Transactions/Transactions';
import TransactionModal from './components/TransactionModal/TransactionModal';
import BalanceReport from './components/BalanceReport/BalancerReport';
import Header from './components/Header/Header';
import CategoriesReport from './components/CategoriesReport/CategoriesReport';
import DatePicker from './components/DatePicker/DatePicker';

function App() {

  const [transactions, setTransactions] = useState([]);
  const today = new Date();
  const currentDate = today.toISOString().split('T')[0];
  const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1)
    .toISOString()
    .split('T')[0];
  const [dateFilter, setDateFilter] = useState({startDate:firstDayOfMonth, endDate:currentDate});

  const url = 'http://localhost:8080/api';

  const handleDateFilter = (filterData)=>{
    setDateFilter(filterData)
  }

  const getTransactions = async () =>{
      const response = await axios.get(`${url}/transactions`,{
        params:{startDate: dateFilter.startDate, endDate:dateFilter.endDate}
      });
      const data = response.data;
      console.log(data)
      setTransactions(data)
  }

  function refreshTransactions(){
    getTransactions()
  }
  

 useEffect(() => {
  getTransactions()
  }, [dateFilter]);

  return (
    <>
    <Header/>
    <main >
      <div className='container'>
        <div className='pt-4 d-flex align-items-end'>
            <DatePicker datePickerData={handleDateFilter} dateFilter={dateFilter}/>
            <TransactionModal refreshTransactions={refreshTransactions} />
        </div>
        <div className='row'>
          <BalanceReport transactions={transactions} />
        </div>
        <div className='row'>
          <div className='col-12 col-md-8 '>
            <Transactions transactions={transactions} refreshTransactions={refreshTransactions}/>
          </div>
          <div className='col-12 col-md-4' >
            <CategoriesReport transactions={transactions} />
          </div>
        </div>
      </div>
    </main>
    </>
  );
}

export default App;
