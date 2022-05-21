import React, { useState } from "react"
import "./login.css"
import axios from "axios"
import { useHistory } from "react-router-dom"

const Login = ({ setLoginUser }) => {

    const history = useHistory()

    const [user, setUser] = useState({
        email: "",
        password: "",

    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })

    }
    const login = () => {
        axios.post("http://localhost:9002/login", user)
            .then(res => {
                alert(res.data.message)
                localStorage.setItem("user_values", JSON.stringify(res.data.user))
                setLoginUser(res.data.user)
                history.push("/")
            })

    }

    return (
        <div className="Login">
            {/* {console.log(user)} */}
            <h1>Login</h1>
            <input type="text" name="email" value={user.email} placeholder="Enter your Email" onChange={handleChange} /><br></br>
            <input type="password" name="password" value={user.password} placeholder="Enter your Password" onChange={handleChange} /><br></br>
            <input type="button" value="Login" onClick={login} />
            {/* <div className="button" onClick={login} >Login</div> */}
            <div>or</div>
            <input type="button" value="Register" onClick={() => history.push("/register")} /> (New User First Register)
            {/* <div className="button" onClick={() => history.push("/register")}>Register</div> */}
        </div>
    )
}

export default Login