import React, {useState, useEffect} from "react";
import axios from "axios";

function TransactionForm({transactionId, transactionData, refreshTransactions}){

    const [categories, setCategories] = useState([]);

    const url = 'http://localhost:8080/api';

    const getCategories = async (type) =>{
        const response = await axios.get(`${url}/categories`);
        const data = response.data;
        setCategories(data.filter(category => category.type == type))
    }

    const selectType = (event) =>{
        console.log(event.target.value);
        getCategories(event.target.value);
    }



    const handleSubmit = async (event) =>{
        event.preventDefault();
        const form = new FormData(event.target);
        const formData = Object.fromEntries(form);
        if(transactionId){
            const response = await axios.put(`${url}/transactions/${transactionId}`, formData)
            const data = response.data;
            console.log("Update", data)
        }else{
            const response = await axios.post(`${url}/transactions`, formData)
            const data = response.data;
            console.log("post", data)
        }
        refreshTransactions()
    }


    
    return(
        <div>
        <form onSubmit={handleSubmit}>
        <div className="mb-3">
                <input placeholder='date' name="date" type="date" className="form-control" defaultValue={transactionData ? transactionData.date : ""} />
            </div>
            <div className="mb-3">
                <input placeholder='Concept' name="concept" type="text" className="form-control" defaultValue={transactionData ? transactionData.concept : ""} />
            </div>
            <div className="mb-3">
                <select onChange={selectType} name="type" className="form-select" defaultValue={transactionData ? transactionData.type : ""}>
                    <option value="">Tipo</option>
                    <option value="Gasto">Gasto</option>
                    <option value="Ingreso">Ingreso</option>
                </select>
            </div>
            <div className="mb-3">
                <select name="category_id" className="form-select" defaultValue={transactionData ? transactionData.category : ""}>
                    <option value="">Category</option>
                    { categories.map((category, index) =>(
                        <option key={index}  value={category.id}>{category.name}</option>
                    ))}
     
                </select>
            </div>
            <div className="mb-3">
                <input placeholder='Value' name="value" type="number" className="form-control" defaultValue={transactionData ? transactionData.value : ""} />
            </div>
            <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Enviar</button>
        </form>
        </div>
    )
    
}


export default TransactionForm;