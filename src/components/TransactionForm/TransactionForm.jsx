import React, {useState, useEffect} from "react";
import axios from "axios";

function TransactionForm({transactionId}){

    const [categories, setCategories] = useState([]);

    const getCategories = async (type) =>{
        const response = await axios.get("http://localhost:8080/categories");
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
        if(transactionId != ""){
            const response = await axios.put(`http://localhost:8080/transactions/${transactionId}`, formData)
            const data = response.data;
            console.log(data)
        }else{
            const response = await axios.post("http://localhost:8080/transactions", formData)
            const data = response.data;
            console.log(data)
        }
        console.log(transactionId)
    }


    
    return(
        <div>
        <form onSubmit={handleSubmit}>
        <div className="mb-3">
                <input placeholder='date' name="date" type="date" className="form-control" />
            </div>
            <div className="mb-3">
                <input placeholder='Concept' name="concept" type="text" className="form-control" />
            </div>
            <div className="mb-3">
                <select onChange={selectType} name="type" className="form-select">
                    <option selected value="">Type</option>
                    <option value="Expense">Expense</option>
                    <option value="Income">Income</option>
                </select>
            </div>
            <div className="mb-3">
                <select name="category" className="form-select">
                    <option selected value="">Category</option>
                    { categories.map((category, index) =>(
                        <option key={index} value={category.name}>{category.name}</option>
                    ))}
     
                </select>
            </div>
            <div className="mb-3">
                <input placeholder='Value' name="value" type="number" className="form-control" />
            </div>
            <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Submit</button>
        </form>
        </div>
    )
    
}


export default TransactionForm;