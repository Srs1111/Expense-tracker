import {useState} from "react"

import API from "../services/api"

function TransactionForm( {fetchTransaction}) {
    const [form, setForm] = useState({
        title: " ",
        amount: " ",
        type: "expense",
    })
    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await API.post("/transactions", from);
            fetchTransaction();
            setForm({ title: "", amount: "", type: "expense" })
        }catch (error) {
            alert ("Error adding Transaction")
        };
    }
    return (
        <form onSubmit={handleSubmit}>

            <h1>Add Transaction</h1>
            <input name= "title"
            placeholder = "Title"
            value = {from.title}
            onChange = {handleChange} />
             <br />

             <select name = "type" value = {form.type} onChange={ handleChange }>

                <option value = "expense">Expense</option>
                <option value = "income">Income</option>
             </select>
             <br />
             <button type = "submit">Add</button>
        </form>
    )
}

export default TransactionForm