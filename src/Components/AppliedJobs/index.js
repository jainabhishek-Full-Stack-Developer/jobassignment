import React from 'react'
import data from '../../data.json';
import { MdLocationOn } from "react-icons/md"
import NotFound from '../NotFound';
import Header from "../Header"
import "./index.css"

const AppliedJobs = () => {
    const formDataArrayJSON = localStorage.getItem('formData');
    const formDataArray = JSON.parse(formDataArrayJSON);
  
    if (!formDataArray || !Array.isArray(formDataArray)) {
     
      return <NotFound />;
    }
  
    const filteredJobsSearch = data.filter((el) => formDataArray.some((formData) => formData.id === el._id));
  

    return (
        <>
            <Header />
            <ul className="jobListContainer">
                {
                    filteredJobsSearch.map(el => (

                        <li className="jobItemContainer" key={el._id}>
                            <div className="firstPartContainer">
                                <div className="imgTitleContainer">
                                    <img
                                        className="companyLogo"
                                        src={el.logoImg}
                                        alt={el.company}
                                    />
                                    <div className="titleRatingContainer">
                                        <h1 className="titleHeading">{el.name}</h1>

                                    </div>
                                </div>
                                <div className="locationPackageContainer">
                                    <div className="locationJobTypeContainer">
                                        <div className="locationIconLocationContainer">
                                            <MdLocationOn className="locationIcon" />
                                            <p className="location">{el.stateCategory}</p>
                                        </div>
                                        <div className="employmentTypeIcon">
                                            <p className="jobType">Type: {el.jobType}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="package">₹ {el.annualSalaryTo}</p>
                                    </div>
                                </div>
                            </div>
                            <hr className="itemHrLine" />
                            <div className="secondPartContainer">
                                <h1 className="descriptionHeading">Specification</h1>

                                <ul>
                                    <li>Company Type: {el.companyType}</li>
                                    <li>Company Size: {el.companySize}</li>
                                    <li>Language: {el.language}</li>
                                    <li>Level: {el.expLevel}</li>
                                    <li>Tech Category: {el.techCategory}</li>
                                </ul>
                            </div>
                            <div className="appliedContainer">
                                <span>Applied</span>
                            </div>
                        </li>

                    ))
                }
            </ul>
        </>
    )
}

export default AppliedJobs
