import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./index.css"

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');



    const onSubmitLoginForm = event => {
        event.preventDefault();
        if (email === '' || password === '') {
            setErrorMsg("* All field are required")
        }
        else {
            const loggedInEmail = localStorage.getItem('email');
            const loggedInPassword = localStorage.getItem('password');

            if (email !== loggedInEmail || password !== loggedInPassword) {
                setErrorMsg("* Invalid credential")

            }
            if (email === loggedInEmail && password === loggedInPassword) {
                sessionStorage.setItem('email', email);             
                // navigate('/home');
                window.location.href = "/home";

            }

        }



    };


    return (
        <>
            <div className="loginContainer">
                <form className="loginFormContainer" onSubmit={onSubmitLoginForm}>
                    <div className="formLogoContainer">
                    <h3 className="headerLogo">JobApp</h3>
                    </div>
                    <label className="formLabel" htmlFor="email">
                        Email<sup className="requiredSign">*</sup>
                    </label>
                    <br />
                    <input
                        type="email"
                        className="formInput"
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                        placeholder="Email"
                        id="email"
                    />
                    <br />
                    <br />

                    <label className="formLabel" htmlFor="password">
                        Password<sup className="requiredSign">*</sup>
                    </label>
                    <br />
                    <input
                        type="password"
                        className="formInput"
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                        placeholder="Password"
                        id="password"
                    />
                    <br />
                    <br />
                    <button type="submit" className="formSubmitButton">
                        Login
                    </button>
                    <p className="errorMessage">{errorMsg}</p>
                    <p className="loginPara">Don't have an account yet? <Link to="/signup">Sign Up </Link></p>
                </form>
            </div>
        </>
    )
}

export default LoginForm
