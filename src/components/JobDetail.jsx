import React from 'react';
import { Route, Switch, useParams } from 'react-router-dom';
import { Button } from 'primereact/button';
import Navbar from './Navbar';

const JobDetail = ({ jobs }) => {
  const { jobId } = useParams();
  const job = jobs.find(job => job.id === parseInt(jobId));

  return (
    <>
    <Navbar/>

    <div>
      <h2>Job Detail</h2>
      {job ? (
        <div className="job-detail">
          <h3>{job.title}</h3>
          <p>{job.company}</p>
          <p>{job.location}</p>
          <p>{job.description}</p>
          <a href={job.applyLink} target="_blank" rel="noopener noreferrer">
            <Button label="Apply Now" className="p-button-raised p-button-text" />
          </a>
        </div>
      ) : (
        <p>Job not found</p>
      )}
    </div>
    </>
  );
}

export default JobDetail;
