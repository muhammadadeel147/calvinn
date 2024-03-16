import React from 'react';
import job from "../Assets/jobs.jpg";
import { Button } from 'primereact/button';
import Navbar from './Navbar';
import JobListing from './JobListing';

const Hero = () => {
  return (
    <>
    <Navbar/>    
    <div className="hero-container">
      <div className="grid grid-nogutter surface-0 text-800">
        <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center">
          <section>
            <h1 className="text-4xl md:text-6xl font-bold mb-1">Welcome to Calvin  Job Portal</h1>
            <p className="text-xl md:text-2xl text-primary font-bold mb-3">Find your dream job here</p>
            <p className="mt-0 mb-4 text-lg md:text-xl text-700 line-height-3">Browse through our extensive list of job opportunities and take the next step towards your career growth.</p>

            <div className="flex justify-center md:justify-start">
              <Button label="Explore Jobs" type="button" className="mr-3 p-button-raised" />
              <Button label="Get Started" type="button" className="p-button-outlined" />
            </div>
          </section>
        </div>
        <div className="col-12 md:col-6 overflow-hidden">
          <img src={job} alt="hero-1" className="md:ml-auto block md:h-full" style={{ clipPath: 'polygon(8% 0, 100% 0%, 100% 100%, 0 100%)' }} />
        </div>
      </div>
    </div>

    
<div className="surface-0 text-center">
    <div className="mb-3 font-bold text-3xl mt-6">
    <span className="text-900">Discover Your Future with </span>
    <span className="text-blue-600">Calvin Job Portal</span>
    </div>
    <div className="text-700 mb-6">Explore diverse opportunities tailored for your success.</div>
    <div className="grid">
        <div className="col-12 md:col-4 mb-4 px-5">
            <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
                <i className="pi pi-compass  text-4xl text-blue-500"></i>
            </span>
            <div className="text-900 text-xl mb-3 font-medium">Explore</div>
          <span className="text-700 line-height-3">Discover a wide range of academic and professional pathways.</span>
        </div>
        <div className="col-12 md:col-4 mb-4 px-5">
            <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
                <i className="pi pi-lock text-4xl text-blue-500"></i>
            </span>
            <div className="text-900 text-xl mb-3 font-medium">Career Paths</div>
          <span className="text-700 line-height-3">Explore potential career paths and opportunities for growth.</span>
        </div>
        <div className="col-12 md:col-4 mb-4 px-5">
            <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
                <i className="pi pi-users text-4xl text-blue-500"></i>
            </span>
            <div className="text-900 text-xl mb-3 font-medium">Community</div>
          <span className="text-700 line-height-3">Join a diverse community committed to excellence and service.</span>
        </div>
        <div className="col-12 md:col-4 mb-4 px-5">
            <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
                <i className="pi pi-calendar text-4xl text-blue-500"></i>
            </span>
            <div className="text-900 text-xl mb-3 font-medium">Events</div>
          <span className="text-700 line-height-3">Stay updated on campus events and networking opportunities.</span>
        </div>
        <div className="col-12 md:col-4 mb-4 px-5">
            <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
                <i className="pi pi-book  text-4xl text-blue-500"></i>
            </span>
            <div className="text-900 text-xl mb-3 font-medium">Learning Resources</div>
          <span className="text-700 line-height-3">Access a wealth of resources to support your academic and professional development.</span>
        </div>
        <div className="col-12 md:col-4 md:mb-4 mb-0 px-3">
            <span className="p-3 shadow-2 mb-3 inline-block" style={{ borderRadius: '10px' }}>
                <i className="pi pi-circle  text-4xl text-blue-500"></i>
            </span>
            <div className="text-900 text-xl mb-3 font-medium">Guidance</div>
          <span className="text-700 line-height-3">Receive guidance and support from advisors and mentors.</span>
        </div>
    </div>
</div>
    
 
    </>

  );
}

export default Hero;
