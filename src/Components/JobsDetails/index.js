import React from 'react';
import Header from '../Header';
import './index.css';
import data from '../../data.json';
import { useParams } from 'react-router-dom';
import { MdLocationOn } from 'react-icons/md';
import { BiLinkExternal } from 'react-icons/bi';
import { Link } from 'react-router-dom'

const JobsDetails = () => {
    const { id } = useParams();
    const filteredJobs = data.filter((el) => el._id === id);

    return (
        <>
            <Header />
            {filteredJobs.map((el) => (
                <div className="jobItemContainer" key={el._id}>
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
                                <div className="employmentTypeIconEmploymentTypeContainer">
                                    <p className="jobType">{el.jobType}</p>
                                </div>
                            </div>
                            <div className="packageContainer">
                                <p className="package">₹ {el.annualSalaryTo}</p>
                            </div>
                        </div>
                    </div>
                    <hr className="itemHrLine" />

                    <h3>Skills</h3>
                    <ul className="ulJobDetailsContainer">
                        {el.technologies.map(eachItem => (
                            <li className="liJobDetailsContainer" key={eachItem}>
                                {eachItem}
                            </li>
                        ))}
                    </ul>
                    <div className="secondPartContainer">
                        <div className="descriptionVisitContainer">
                            <h3 className="descriptionJobHeading">Description</h3>
                            <a className="visitAnchor" href={el.redirectJobUrl} target='_blank' rel="noreferrer" >
                                Visit <BiLinkExternal />
                            </a>
                        </div>
                        <ul>
                            <li>Company Type: {el.companyType}</li>
                            <li>Company Size: {el.companySize}</li>
                            <li>Language: {el.language}</li>
                            <li>Level: {el.expLevel}</li>
                            <li>Tech Category: {el.techCategory}</li>
                        </ul>
                    </div>
                    <div className="applyContainer">
                        <Link to={`/apply-form/${el._id}`}>Apply</Link>
                    </div>
                </div>

            ))}
        </>
    );
};

export default JobsDetails;
