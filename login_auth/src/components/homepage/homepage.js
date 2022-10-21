import React from "react";
import "./homepage.css"

const Homepage = ({setLoginUser}) => {
    return (
        <div className="homepage">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEWOH3PZy7ZKQjrb0C6Y-TRetGX1YPCYAfxcB-RyFS&s" height="50" width="45" alt=''/><br/>
            <h1>Welcome, your're an OSOCian now!</h1><br/>
            <div className="button" onClick={() => setLoginUser({})}>Logout</div>
        </div>
    )
}

export default Homepage