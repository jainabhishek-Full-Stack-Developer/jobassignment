import React from 'react'
import './index.css'

const notFoundImage =
  'https://assets.ccbp.in/frontend/react-js/jobby-app-not-found-img.png'

const NotFound = () => (
  <>

    <div className="notFoundContainer">
      <div className="notFoundImageContainer">
        <img src={notFoundImage} alt="not found" className="notFoundImage" />
      </div>
      <h1 className="notFoundHeading">Page Not Found</h1>
      <p className="notFoundPara">
        We are sorry, the page you requested could not be found
      </p>
     
    </div>
  </>
)

export default NotFound
