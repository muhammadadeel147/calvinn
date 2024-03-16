import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import './JobListing.css';


const Job = ({ jobs }) => {
  const [filter, setFilter] = useState('');

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(filter.toLowerCase()) ||
    job.company.toLowerCase().includes(filter.toLowerCase()) ||
    job.location.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
    
      <div className="job-listing-container">
        <h2>Job Listings</h2>
        <div className="filter">
          <InputText
            placeholder="Search by title, company, or location"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
        <div className="job-listings">
          {filteredJobs.map(job => (
            <div className="job-card" key={job.id}>
              <h3>{job.title}</h3>
              <p className="company">{job.company}</p>
              <p className="location">{job.location}</p>
              <p className="description">{job.description}</p>
              <Link to={`/jobs/${job.id}`}>
                <Button label="View Details" className="p-button-raised p-button-text apply-btn" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Job;
