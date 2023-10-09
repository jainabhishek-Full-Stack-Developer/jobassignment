import React from 'react'
import "./index.css";
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const handleLogout = (e) => {
        e.preventDefault();
        sessionStorage.removeItem('email');
        window.location.href = "/";
    }
    const localEmail = sessionStorage.getItem('email');
    if (localEmail === null) {
        navigate('/')
    }

    return (
        <>
            <div className="headerContainer">
                <div className="leftSide">
                    <Link to="/home"><h3 className="header-logo">JobApp</h3></Link>
                </div>
                <div className="rightSide">
                    <ul>
                        <li>
                            <Link to="/applied-jobs">Applied Jobs</Link>
                        </li>
                        <li>
                            <button type="button" onClick={handleLogout}>Logout</button>
                        </li>
                    </ul>
                </div>

            </div>
        </>
    )
}

export default Header
