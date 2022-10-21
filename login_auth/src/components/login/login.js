import React, {useState} from "react";
import "./login.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Login  = ({setLoginUser}) => {

        const navigate = useNavigate()

        const [ user, setUser] = useState({
            email: "",
            password:"",
        })
    const handleChange = e => {
        const {name, value} = e.target
        // console.log(name, value)
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post("http://localhost:5000/login",  user)
        .then(res => {
            alert(res.data.message)
            setLoginUser(res.data.user )
            navigate("/")
        })
    }

    return (
        <div className="login">
        {/* {console.log(user)} */}
        <h1>Login to verify your OSOC membership!</h1>
        <input type="text" name="email" value={user.email} placeholder="Email" onChange={handleChange}/>
        <input type="password" name="password" value={user.password} placeholder="Password" onChange={handleChange}/>
        <div className="button" onClick={login}>Ready to Verify?</div>
        <div>or</div>
        <div className="button" onClick={() => navigate("/register")}>Register as Newbie</div>
        </div>

    )
}

export default Login