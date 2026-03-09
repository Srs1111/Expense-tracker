import {useState, useEffect} from 'react'
import API from "../services/api"

function Dashboard() {
    const [transaction, setTransaction] = useState([]);

    useEffect(() => {
        fetchTransactions();

    }, [])
    const fetchTransactions = async () => {
        try {
            const {data} = await API.get("/transactions");
            setTransaction(data)

        }catch(error) {
            alert("Please Login")
        }

    }
    return (
        <div>
            <h1>Your Transaction</h1>

            {transaction.length ===  0 ? (
                <p> No transaction yet</p>
            ): ( transaction.map((t) => (
                <div key = {t.id}>
                <h1>{t.title}</h1>
                <h1>{t.amount}</h1>
                <h1>{t.category}</h1>
                   

                </div>
            )))}
        </div>
    )
}
export default Dashboard