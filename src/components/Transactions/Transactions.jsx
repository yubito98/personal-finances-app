import React, {useState, useEffect} from "react";
import axios from "axios";
import EditTransactionModal from "../EditTransactionModal/EditTransactionModal";
import './Transactions.css'


function Transactions({transactions}){

    const [transactionId, setTransactionId] = useState("");
    const [transactionData, setTransactionData] = useState(false);

    const url = 'http://localhost:8080/api';


    const editTransactionId = (data) =>{
        setTransactionId(data.id)
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
                    <th scope="col">Fecha</th>
                    <th scope="col">Concepto</th>
                    <th scope="col">Categoría</th>
                    <th scope="col">Tipo</th>
                    <th scope="col">Valor</th>
                </tr>
            </thead>
            <tbody>
            {transactions.length > 0 ? (
                transactions.map((item, index) =>(
                    <tr key={index}>
                        <td style={{textAlign:'right'}} >{(() =>{
                            let date = new Date(item.date);
                            let day = date.getDate();
                            let month = date.getMonth() + 1;
                            let year = date.getFullYear()
                            return `${day}/${month}/${year}`
                        })()
                        }</td>
                        <td>{item.concept}</td>
                        <td>{item.category.name}</td>
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
                            editTransactionId({id: item.id, date:item.date, concept:item.concept, category_id:item.category.name, type: item.type, value:item.value})
                            }} 
                            type="button" 
                            className="btn btn-primary" 
                            data-bs-toggle="modal" 
                            data-bs-target="#editTransaction">
                            Edit
                            </button>
                            <div className="btn btn-danger" id={item.id} onClick={deleteTransaction}>X</div>
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