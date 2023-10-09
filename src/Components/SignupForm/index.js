import React, { useState } from 'react';
import "./index.css"
import { Link, useNavigate } from 'react-router-dom';

const SignupForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const navigate = useNavigate();


    const onSubmitLoginForm = (e) => {
        e.preventDefault()
        if (name === '' || email === '' || password === '') {
            setErrorMsg('* All field are Required')
        }
        else {
            localStorage.setItem('name', name);
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);
            navigate("/");
        }
    }

    return (
        <>
            <div className="signupContainer">
                <form className="signupFormContainer" onSubmit={onSubmitLoginForm}>
                    <div className="signupLogoContainer">
                        <h3 className="headerLogo">JobApp</h3>
                    </div>
                    <label className="signupLabel" htmlFor="name">
                        Name<sup className="requiredSign">*</sup>
                    </label>
                    <br />
                    <input
                        type="text"
                        className="signupInput"
                        value={name}
                        onChange={event => setName(event.target.value)}
                        placeholder="Name"
                        id="name"
                    />
                    <br />
                    <br />
                    <label className="signupLabel" htmlFor="email">
                        Email<sup className="requiredSign">*</sup>
                    </label>
                    <br />
                    <input
                        type="email"
                        className="signupInput"
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                        placeholder="Email"
                        id="email"
                    />
                    <br />
                    <br />
                    <label className="signupLabel" htmlFor="password">
                        Password<sup className="requiredSign">*</sup>
                    </label>
                    <br />
                    <input
                        type="password"
                        className="signupInput"
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                        placeholder="password"
                        id="password"
                    />
                    <br />
                    <br />
                    <button type="submit" className="signupSubmitButton">
                        Signup
                    </button>
                    <p className="errorMessage">{errorMsg}</p>
                    <div className="signupPara">Already have account <Link to="/" className="login-link" >Login</Link> </div>
                </form>

            </div>
        </>
    )
}

export default SignupForm
