import React, {useState, useEffect} from "react";
import axios from "axios";
import './Transactions.css'


function Transactions({transactions}){

    const deleteTransaction = async (event) =>{
        const response = await axios.delete(`http://localhost:8080/transactions/${event.target.id}`);
        const data = response.data;
        console.log(data)
    }
    

    return(
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
                            <span className="btn btn-secondary">Edit</span>
                            <span className="btn btn-danger" style={{cursor: "pointer"}} id={index} onClick={deleteTransaction}>X</span>
                        </td>
                    </tr>
                    
                ))
            ): <span>There is no transactions</span>
            }
            </tbody>
        </table>
    )
}


export default Transactions;