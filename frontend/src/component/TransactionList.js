import TransactionItem from "./TransactionItem"


function TransactionList ({transaction, fetchTransactions}) {
    return (
        <div>
            <h1>Transactions</h1>

            {transaction.length === 0 ? (
                <p> No transaction yet</p>
            ): (
                transaction.map((t) => (
                    <TransactionItem key = {t._id}
                     transaction = {t}
                     fetchTransactions={fetchTransactions} />

                ))
            )}
        </div>
    )
}

export default TransactionList 