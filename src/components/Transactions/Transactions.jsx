import React, {useState, useEffect} from "react";
import axios from "axios";
import EditTransactionModal from "../EditTransactionModal/EditTransactionModal";
import './Transactions.css'


function Transactions({transactions}){

    const [transactionId, setTransactionId] = useState("");
    const [transactionData, setTransactionData] = useState(false);

    const url = 'https://personal-finances-app-backend.vercel.app/api';


    const editTransactionId = (data) =>{
        setTransactionId(data.index)
        setTransactionData(data)
    }

    const deleteTransaction = async (event) =>{
        const response = await axios.delete(`${url}/transactions/${event.target.id}`);
        const data = response.data;
        console.log(data)
    }

    useEffect(() =>{}, [transactions])

    return(
        <>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Concept</th>
                    <th scope="col">Category</th>
                    <th scope="col">Type</th>
                    <th scope="col">Value</th>
                </tr>
            </thead>
            <tbody>
            {transactions.length > 0 ? (
                transactions.map((item, index) =>(
                    <tr key={index}>
                        <td>{item.date}</td>
                        <td>{item.concept}</td>
                        <td>{item.category}</td>
                        <td className={item.type}>{item.type}</td>
                        <td>
                        {
                            new Intl.NumberFormat('es-CO', {
                                style: 'currency',
                                currency: 'COP',
                                maximumFractionDigits: 0
                            }).format(item.value)
                        }
                        </td>
                        <td>
                            <button  onClick={() =>{
                                editTransactionId({index: index + 1, date:item.date, concept:item.concept, category:item.category, type: item.type, value:item.value})
                            }} id={index} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editTransaction">Edit</button>
                            <div className="btn btn-danger" id={index} onClick={deleteTransaction}>X</div>
                        </td>
                    </tr>
                    
                ))
            ): <tr><td>There is no transactions</td></tr>
            }
            </tbody>
        </table>
        <EditTransactionModal transactionData={transactionData} transactionId={transactionId}/>
        </>
    )
}


export default Transactions;