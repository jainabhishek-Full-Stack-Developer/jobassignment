import React from 'react'
import "./index.css"
import { TiTick } from "react-icons/ti"


const Succesmesaage = () => {
    return (
        <>
            <div className="successContainer">
                <TiTick  className="successIcon" />
                <div className="successMessage">
                    <h3>Successfully Applied</h3>
                    <p>Your Application had been sent.</p>
                </div>
            </div>
        </>
    )
}

export default Succesmesaage
