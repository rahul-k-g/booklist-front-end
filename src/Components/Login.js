import React from "react";
import { useState } from "react";
import App from "../App";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')

    
    const loginUser = async (event) => {
        event.preventDefault();
        const response = await fetch('http://localhost:4000/login', {
            method: 'POST',
            headers: {
                  'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                password
            }),
        })

        const data = await response.json()

        if (data.user) {

            localStorage.setItem('token', data.user)
            localStorage.setItem('uid', data.id)

            window.location.href = '/booklist'
            
        } else {
            alert('Invalid login details')
        }

    }

    return (<>
        <div className="container" >
            <form onSubmit={loginUser} >
                <label htmlFor="username" >Username</label><br />
                <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.username)} /><br />
                <label htmlFor="password" >Password</label><br />
                <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.password)} /><br />
                <input type="submit" value="Login" />
            </form>
        </div>
    </>)
}

export default Login;