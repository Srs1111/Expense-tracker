import API from "../services/api"

function TransactionItem({transaction, fetchTransactions}) {

    const deleteHandler = async () => {
        try {
            await API.delete(`/transactions/${transaction._id}`);
            fetchTransactions();
        } catch (error) {
            alert("Error deleting transaction")
        }
    };

    return (
        <div>
            <p>
                <strong>{transaction.title}</strong> - {transaction.amount} ({transaction.type})
            </p>
            <button onClick = {deleteHandler}>Delete</button>
        </div>
    )
    
}
export default TransactionItem;