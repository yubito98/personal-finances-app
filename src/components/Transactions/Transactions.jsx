import React, {useState, useEffect} from "react";
import './Transactions.css'


function Transactions({transactions}){

    

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
                    </tr>
                    
                ))
            ): <span>There is no transactions</span>
            }
            </tbody>
        </table>
    )
}


export default Transactions;