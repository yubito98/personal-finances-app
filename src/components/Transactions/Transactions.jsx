import axios from "axios";
import React, {useState, useEffect} from "react";


function Transactions(){

    const [transactions, setTransactions] = useState([])


    const getTransactions = async () =>{
        const response = await axios.get('http://localhost:8080/transactions');
        const data = response.data;
        setTransactions(data)
    }

    useEffect(() => {
        getTransactions();
    }, []); // Empty dependency array to run only once on mount


    return(
        <ul>
            {transactions.length > 0 ? (
                transactions.map(item =>(
                    <li key={item.concept}>{item.concept}</li>
                ))
            ): <span>There is no transactions</span>
            }
        </ul>
    )
}


export default Transactions;