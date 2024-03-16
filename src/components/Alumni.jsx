import React from 'react';
import Navbar from './Navbar';
import './Alumni.css'; 
import img from "../Assets/profile.jpg"
import img1 from "../Assets/profile1.jpg"
import img2 from "../Assets/profile2.jpg"
import { Button } from 'primereact/button';
const Alumni = () => {
 
    const alumniData = [
        {
          id: 1,
          name: 'John Doe',
          graduationYear: '2010',
          occupation: 'Software Engineer',
          imageUrl: img, 
        },
        {
          id: 2,
          name: 'Jane Smith',
          graduationYear: '2012',
          occupation: 'Data Scientist',
          imageUrl: img1, 
        },
        {
          id: 3,
          name: 'Emily Johnson',
          graduationYear: '2014',
          occupation: 'UX Designer',
          imageUrl: img2, 
        },
        {
          id: 4,
          name: 'Michael Brown',
          graduationYear: '2015',
          occupation: 'Product Manager',
          imageUrl: img, 
        },
        {
          id: 5,
          name: 'Sarah Williams',
          graduationYear: '2016',
          occupation: 'Marketing Specialist',
          imageUrl: img1, 
        },
        {
          id: 6,
          name: 'David Wilson',
          graduationYear: '2017',
          occupation: 'Financial Analyst',
          imageUrl: img2, 
        },
        {
          id: 7,
          name: 'Jessica Lee',
          graduationYear: '2018',
          occupation: 'Human Resources Manager',
          imageUrl: img, 
        },
        {
          id: 8,
          name: 'Ryan Martinez',
          graduationYear: '2019',
          occupation: 'Software Developer',
          imageUrl: img1, 
        },
        {
          id: 9,
          name: 'Olivia Garcia',
          graduationYear: '2020',
          occupation: 'Data Analyst',
          imageUrl:img2, 
        },
        {
          id: 10,
          name: 'Daniel Taylor',
          graduationYear: '2021',
          occupation: 'Business Analyst',
          imageUrl: img, 
        },
        {
        id: 11,
        name: 'Olivia Garcia',
        graduationYear: '2020',
        occupation: 'Data Analyst',
        imageUrl: img, 
      },
      {
        id: 12,
        name: 'Daniel Taylor',
        graduationYear: '2021',
        occupation: 'Business Analyst',
        imageUrl: img2, 
      }
      ];
      



  return (
    <div className="alumni-container">
      <Navbar />
      <div className="alumni-content">
        <div className='al'>
        <h2>Welcome to the Calvin University Alumni Portal</h2>
        <p>
          As a Calvin University alumnus, you have access to exclusive
          resources and opportunities. Whether you're seeking career advice,
          looking for job opportunities, or hoping to connect with fellow
          alumni, you'll find everything you need right here.
        </p>

        <div className="surface-0 text-700 text-center">
      <div className="text-blue-600 font-bold mb-3"><i className="pi pi-users"></i>&nbsp;JOIN OUR ALUMNI COMMUNITY</div>
      <div className="text-900 font-bold text-5xl mb-3">Connect with Fellow Alumni</div>
      <div className="text-700 text-2xl mb-5">Stay updated with events, job opportunities, and more.</div>
      <Button label="Join Now" icon="pi pi-users" className="font-bold px-5 py-3 p-button-raised p-button-rounded white-space-nowrap" />
    </div>
        <h3>Featured Alumni</h3>
        </div>
        
        <div className="alumni-grid">
          {alumniData.map(alumnus => (
            <div key={alumnus.id} className="alumnus-card">
              <img src={alumnus.imageUrl} alt={alumnus.name} />
              <div className="alumnus-info">
                <h4>{alumnus.name}</h4>
                <p>Graduated: {alumnus.graduationYear}</p>
                <p>Occupation: {alumnus.occupation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Alumni;
