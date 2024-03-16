import React from 'react';
import './InterviewPreparation.css'; 
const InterviewPreparation = () => {
  return (
    <div className="interview-preparation-container">
      <h2>Interview Preparation</h2>
      <p>Welcome to our interview preparation section! Here, you'll find resources and tips to help you ace your job interviews.</p>
      <div className="resources">
        <h3>Interview Tips</h3>
        <ul>
          <li>Research the company</li>
          <li>Practice common interview questions</li>
          <li>Dress appropriately</li>
          <li>Arrive early</li>
          <li>Ask questions</li>
        </ul>
      </div>
      <div className="resources">
        <h3>Resume Tips</h3>
        <ul>
          <li>Keep it concise and relevant</li>
          <li>Highlight your achievements</li>
          <li>Customize for each job application</li>
          <li>Proofread carefully</li>
        </ul>
      </div>
      <div className="resources">
        <h3>Additional Resources</h3>
        <ul>
          <li>Online interview practice platforms</li>
          <li>Books on interview techniques</li>
          <li>Mock interview services</li>
          <li>Networking events</li>
        </ul>
      </div>
    </div>
  );
}

export default InterviewPreparation;
