import TransactionForm from "../TransactionForm/TransactionForm";
import './TransactionModal.css'

function TransactionModal(){

    return(
        <>
            <button type="button" className="btn btn-primary transaction-button mx-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Agregar Transacción
            </button>
            <div className="modal fade" id="exampleModal" >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" >Add Your Transaction</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body">
                            <TransactionForm transactionId=""/>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default TransactionModal;