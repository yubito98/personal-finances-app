import TransactionForm from "../TransactionForm/TransactionForm"


function EditTransactionModal ({transactionId}){
    return(
        <div className="mt-5 row">
        <div className="modal fade" id="editTransaction" >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" >Edit Your Transaction</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div className="modal-body">
                        <TransactionForm transactionId={transactionId} />
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}


export default EditTransactionModal