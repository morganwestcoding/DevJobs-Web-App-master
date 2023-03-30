import React, {useState} from "react";

import jobs from '../../data/data';
import {Link} from "react-router-dom";

const JobLists = () => {

const [jobData, setJobData] = useState(jobs);

const [searchTerm, setSearchTerm] = useState('');
const [searchByLocation, setSearchByLocation] = useState('');

const searchTermValue = searchTerm.toLowerCase();

//Search data by location

const locationSearchHandler = () => {
  const filteredData = jobs.filter(job=> job.location.toLowerCase().includes(searchByLocation.toLowerCase()));

  setJobData(filteredData)
}

//Filter data by part-time, full-time, freelance ect

const filterJobData = e=>{
  const filterValue = e.target.value

  if(filterValue === 'full-time'){
    const filteredData = jobs.filter(job=> job.contract === 'Full Time' );
    setJobData(filteredData);
  }

  else if(filterValue === "part-time"){
    const filteredData = jobs.filter(job=> job.contract === 'Part Time' );
    setJobData(filteredData);
  }

  else if(filterValue === "freelance"){
    const filteredData = jobs.filter(job=> job.contract === 'Freelance' );
    setJobData(filteredData);
  }

  else if(filterValue === "contract"){
    const filteredData = jobs.filter(job=> job.contract === 'Contract' );
    setJobData(filteredData);
  } else {
    setJobData(jobs);
  }
};



  return <section className="job_list">
    <div className="container">
      <div className="job_list_wrapper">
        <div className="search_panel">
          <div className="search_panel-01">
            <span>
              <i class="ri-search-line"></i>
              </span>
            <input 
            type="text" 
            placeholder="Search by title, companies" 
            value={searchTerm} onChange={e=> setSearchTerm(e.target.value)} />
          </div>

          <div className="search_panel-02">
            <span>
              <i class="ri-map-pin-line"></i>
            </span>
            <input 
            type="text" 
            placeholder="Search by location" 
            value={searchByLocation} onChange={e=> setSearchByLocation(e.target.value)} />
            <button className="btn" onClick={locationSearchHandler}>Search</button>
          </div>

          <div className="search_panel-03">
            <select onChange={filterJobData}>
              <option>Filter job by</option>
              <option value="full-time">Full Time</option>
              <option value="part-time">Part Time</option>
              <option value="freelance">Freelance</option>
              <option value="contract">Contract</option>
            </select>
          </div>
        </div>


        <div className="jobs_wrapper">
          {jobData
          ?.filter(job=>{

            if(searchTerm === '') return job;
            if(
              job.position.toLowerCase().includes(searchTermValue) ||
              job.company.toLowerCase().includes(searchTermValue)
          )
            
            return job;
          })
          .map((item) => (
              <div className="job_item" key={item.id}>
                <img src={item.logo} alt=""/>
                <div className="job_content">
                  <h6>{item.postedAt} - {item.contract} </h6>
                  <h1><Link to={`/jobs/${item.position}`}>{item.position}</Link></h1>
                  <p>{item.company}</p>

                  <div className="location">
                    <p>Location: <span>{item.location}</span></p>
                  </div>

                </div>
              </div>
            ))}

        </div>
      </div>
    </div>
  </section>
};

export default JobLists;

