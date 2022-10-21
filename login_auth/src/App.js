
import './App.css';
import Homepage from './components/homepage/homepage';
import Login from './components/login/login';
import Register from './components/register/register';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import {useState} from "react"

function App() {
  
  const [ user, setLoginUser] =useState({})

  return (
    <div className='App'>
      <div className='img'>
        <img src="\img\osoc.png" alt=''></img>
      </div>
      <Router>
        <Routes>
          < Route exact path="/" 
            element={
              user && user._id ? (<Homepage setLoginUser={setLoginUser}/>):(<Login setLoginUser={setLoginUser}/>)
            }
          />
          <Route path="/login" element={<Login setLoginUser={setLoginUser}/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </Router>

    <div className='footer'>made with ❤️ by 043_Manvendra</div>
    </div>
  );
}

export default App;
