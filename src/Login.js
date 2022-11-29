import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import "./Login.css";

function Login() {
    const navigate=useNavigate();
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const signIn=(e)=>{
        e.preventDefault()
        auth
        .signInWithEmailAndPassword(email,password)
        .then(auth=>{
            navigate('/')
        })
        .catch(error=>alert(error.message))
    }
    const register=(e)=>{
        e.preventDefault()
        auth
        .createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            if(auth){
                alert("Successfully Created!")
                navigate('/')
            }

        })
        .catch(error=>alert(error.message))

    }

	return (
		<div className="login">
			<Link to="/">
				<img
					className="login__logo"
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png"
					alt="amazon-logo"
				/>
			</Link>

            <div className="login__container">
            <h1>Sign-in</h1>
            <form>
                <h5>Email</h5>
                <input onChange={e=>setEmail(e.target.value)} type="text" value={email}/>
                <h5>Password</h5>
                <input onChange={e=>setPassword(e.target.value)} type="password" value={password}/>
                <button type="submit" onClick={signIn} className="login__signInButton">Sign In</button>
            </form>
            <p>
                   By signing-in you agree to Amazon Clone's Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
            </p>
            <button onClick={register} className="login__registerButton">Create your Amazon Account</button>
            </div>
		</div>
	);
}

export default Login;
