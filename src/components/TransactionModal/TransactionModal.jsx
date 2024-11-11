import TransactionForm from "../TransactionForm/TransactionForm";

function TransactionModal({transactions}){
    return(
        <div>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Add Transaction
            </button>
            <div className="modal fade" id="exampleModal" >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" >Add Your Transaction</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body">
                            <TransactionForm transactions={transactions}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default TransactionModal;