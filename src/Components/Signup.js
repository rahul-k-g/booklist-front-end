import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Login from "./Login";
import App from "../App";


const Signup = () => {
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')

   
    const registerUser = async (event) => {
        event.preventDefault();
  
        const response = await fetch('http://localhost:4000/register', {
            method: 'POST',
            headers: {
                  'Content-Type': 'application/json',
            },
           
            body: JSON.stringify({
                username:username,
                password:password
            }),
        })

        const data = await response.json()

        if (data.status) {

          <Login/>
            
        } else {
            alert('Invalid login details')
        }

    }

    return (<>
        <div className="container" >
            <form onSubmit={(e)=>registerUser(e)} >
                <label htmlFor="username" >Username</label><br />
                <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} /><br />
                <label htmlFor="password" >Password</label><br />
                <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
                <label htmlFor="password" >Confirm Password</label><br />
                <input type="password" id="password" name="cpassword" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
                <input type="submit" value="Login" />
            </form>
        </div>
    </>)
}
export default Signup;