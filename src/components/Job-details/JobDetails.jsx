import React from "react";

import { useParams } from "react-router-dom";
import jobs from "../../data/data";

import { Link } from "react-router-dom";

const JobDetails = () => {
  const { position } = useParams();

  const job = jobs.find((job) => job.position === position);

  return (
    <section>
      <div className="container">
        <div className="details_wrapper">
          <div className="details_top">
            <div>
              <h1>{job.company}</h1>
            </div>

            <button>
              <Link to={job.companySite}>Company Site</Link>
            </button>
          </div>

          <div className="job_details">
            <div className="about_job">
              <div>
                <h6>
                  {job.postedAt} - {job.contract}
                </h6>
                <h1>{job.position}</h1>
                <span>{job.location}</span>
              </div>

              <button className="btn">Apply</button>
            </div>

            <p className="job_desc">{job.desc}</p>
            <div className="requirements">
              <h1>Requirements</h1>
              <p>{job.requirements.reqTitle}</p>

              <ul className="requirement_item">
                {job.requirements.reqItem.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="responsibility">
              <h1>What you will do?</h1>
              <p>{job.responsibility.resTitle}</p>

              <ol type="1" className="responsibility_item">
                {job.responsibility.resItem.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobDetails;
