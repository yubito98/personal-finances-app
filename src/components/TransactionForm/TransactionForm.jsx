import axios from "axios";

function TransactionForm(){


    const handleSubmit = async (event) =>{
        event.preventDefault();
        const form = new FormData(event.target);
        const fromData = Object.fromEntries(form);
        const response = await axios.post("http://localhost:8080/transactions", fromData)
        const data = response.data;
        console.log(data)
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
                <select name="category" className="form-select">
                    <option selected value="">Category</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            <div className="mb-3">
                <select name="type" className="form-select">
                    <option selected value="" >Type</option>
                    <option value="Expense">Expense</option>
                    <option value="Income">Income</option>
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