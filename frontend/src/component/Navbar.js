import {Link, useNavigate} from 'react-router-dom'

function Navbar() {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("user"));

    const logout = () => {
        localStorage.removeItem("user")
        navigate.("/login")
    }

    return (
        <nav>
            <h1>Expense Tracker</h1>

            {user ? (
                <button onClick = {logout}>Logout</button>
            ): (
                <>
                <Link to = "/login">Login</Link> | {""}
                <Link to = "/register">Register</Link>
                </>
            )}
        </nav>
    )
}

export default Navbar;