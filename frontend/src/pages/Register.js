import {useState} from 'react'

import API from "../services/api"

function Register() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password:""
})
const  handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
};
const handleSubmit = async (e) => {
    e.preventDefault();
     try {
        const res = await API.post("/auth/register", form);
        localStorage.setItem("user", JSON.stringify(res.data));
        alert("Registered Successfully")
     } catch(error) {
        alert(error.response?.data?.message || "Register Failed")
     }
}
return (
    <form onSubmit = {handleSubmit}>
        <h1>Register</h1>
        <input name= "name" placeholder ="Name" onChange = {handleChange} />
        <br />

        <input name = "email" placholder = "Email" onChange = {handleChange} /> 
        <br /> 
        <input name = "password" placeholder = "Enter Your Password" onChange = {handleChange} />
        <br /> 
        <button type ="submit"> Rgeister</button>
    </form>
)
}

export default Register