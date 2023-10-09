import React, { useState } from 'react';
import Header from '../Header';
import "./index.css"
import { useNavigate } from 'react-router-dom';


const Home = () => {
    const navigate = useNavigate()
    const [search, setSearch] = useState('');
    const localEmail = sessionStorage.getItem('email');

    if (localEmail === "") {
        navigate('/login')
    }

    const handleSearchClick = (e) => {
        e.preventDefault()
        navigate(`/jobs-item/${search}`)
        if (search === "") {
            navigate("not-found")
        }

    }


    return (
        <>
            <Header />
            <div className="heroContainer">
                <div className="heroLeftContainer">
                    <h1 >
                        Find The Job That <br />
                        Fits Your Life
                    </h1>
                    <div className="inputContainer">
                        <input type="text" value={search} onChange={event => setSearch(event.target.value)} placeholder="Programming language" />
                        <button onClick={handleSearchClick}>Search</button>
                    </div>
                </div>
                <div className="heroRightContainer">
                    <img src="https://res.cloudinary.com/dei8sqhcu/image/upload/v1696768166/Job-Hunting-Illustration-removebg-preview_ccrsjz.png" alt="search jobs" />
                </div>
            </div>

        </>
    )
}

export default Home
