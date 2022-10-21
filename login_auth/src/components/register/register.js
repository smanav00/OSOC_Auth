import React, {useState} from "react";
import "./register.css"
import axios from "axios"
import { useNavigate } from "react-router-dom";

const Register = () => {

    const navigate = useNavigate()

    const [ user, setUser] = useState({
        name: "",
        email: "",
        password:"",
        reEnterPassword: ""
    })

const handleChange = e => {
    const {name, value} = e.target
    // console.log(name, value)
    setUser({
        ...user,
        [name]: value
    })
}

// on submit, user detail parsing
const register = () => {
    const { name, email, password, reEnterPassword} = user
    if(name && email && password && (password===reEnterPassword)){
        // alert("Response Posted")
        axios.post("http://localhost:5000/register", user)
        .then(res=>{
            alert(res.data.message)
            navigate("/login")
        })
    } else {
        alert("Invalid Credentials")
    }
}

    return (
        <div className="register">
        {console.log(user)}
        <h1>Let's get you Registered in OSOC</h1>
        <input type="text" name="name" value={user.name} placeholder="Name" onChange={handleChange}/>
        <input type="text" name="email" value={user.email} placeholder="Email" onChange={handleChange}/>
        <input type="password" name="password" value={user.password} placeholder="Password" onChange={handleChange}/>
        <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={handleChange}/>
        
        <div className="button" onClick={register}>Let's Register</div>
        <div>or</div>
        <div className="button" onClick={() => navigate("/login")}>Already a Member!</div>
        </div>
    )
}

export default Register