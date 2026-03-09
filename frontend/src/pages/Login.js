import { useState } from "react";

import {Link, useNavigate} from "react-router-dom"

import API from "../services/api"


function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("") 
    const navigate = useNavigate();

    const submitHandler =  async (e) => {
        e.preventDefault()

        try {
            const {data}  = await API.post("/auth/login",{email, password});

            localStorage.setitem("token",data.token);

            navigate("/dashboard")
        }catch(error) {
            alert(error.response?.data?.message || "Login Failed")

        }

    };

    return(
        <div>
            <h1>Login</h1>
            <form onSubmit = {submitHandler}>
                <input type = "email" placeholder ="Email" onChange = {(e) => setEmail(e.target.value)} required/>
                <input  type = "password" placeholder= "password" onChange = {(e) => setPassword(e.target.value)}/>
                <button type = "submit">Login</button>
            </form>
            <p>
                New User? <Link to = "/register">Register</Link>
            </p>
        </div>
    )

}

export default Login