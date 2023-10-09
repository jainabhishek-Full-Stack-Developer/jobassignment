import React from 'react'
import Header from '../Header';
import "./index.css"
import { Link, useParams } from 'react-router-dom'
import data from '../../data.json';
import { MdLocationOn } from "react-icons/md"
import NotFound from '../NotFound';

const JobsItem = () => {
  const { searchInput } = useParams();

  const filteredJobsSearch = data.filter((el) => {
    if (typeof el.technologies === 'string' && typeof searchInput === 'string') {
      return el.technologies.toLowerCase().includes(searchInput.toLowerCase());
    }
    return <NotFound />;
  });


  return (

    <>
      <Header />
      <ul className="jobListContainer">
        {
          filteredJobsSearch.map(el => (
            <Link to={`/jobs-details/${el._id}`} className="linkItem" key={el._id}>
              <li className="jobItemContainer">
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
              </li>
            </Link>
          ))
        }
      </ul>


    </>
  )
}

export default JobsItem
