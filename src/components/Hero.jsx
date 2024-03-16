import React from 'react';
import job from "../Assets/jobs.jpg";
import { Button } from 'primereact/button';
import Navbar from './Navbar';
import InterviewPreparation from './InterviewPreparation';
import Job from './Jobs';
import ResumeBuilder from './ResumeBuilder';

const Hero = () => {
  const jobs = [
    {
      id: 1,
      title: "React Frontend Development",
      company: "ABC Company",
      location: "New York, NY",
      description: "Build responsive React ChatGPT frontend replica - Upwork We are seeking a skilled React developer with expertise in TailwindCSS to create a high-fidelity replica of the ChatGPT web frontend. This project requires a keen eye for design and detail, as the goal is to mimic the look and feel of the ChatGPT interface closely, without the need for backend integration.",
      applyLink: "https://www.crackeddevs.com/job/105076"
    },
    {
      id: 2,
      title: "Software Engineering Intern",
      company: "XYZ Inc.",
      location: "San Francisco, CA",
      description: "At Mysten Labs, we're on a mission to construct the pillars of the next-gen internet of value. We are passionate about developing open and decentralized protocols, leveraging blockchain technologies to push the frontier of what's possible. As part of our dynamic team, you'll contribute to the creation of cutting-edge infrastructure that propels the widespread adoption ",
      applyLink: "https://www.crackeddevs.com/job/100692"
    },
    {
      id: 3,
      title: "Senior Full-Stack Developer",
      company: "Tech Solutions",
      location: "Los Angeles, CA",
      description: "Collaborate with research and development engineering team and external collaborators Design and implement new features and fix bugs for platforms and web applications Contribute to overall architecture design Maintain scalability, code integrity, and usability of applications Participate in team's software quality assurance practices Work on multiple projects for a variety of customers Be an excellent communicator with local and remote teammates Translate scientific requirements into technical and architectural application requirements",
      applyLink: "https://www.crackeddevs.com/job/99351"
    },
    {
      id: 4,
      title: "DevSecOps Engineer",
      company: "Tech Innovations",
      location: "Chicago, IL",
      description: "Security Operations (SecOps): Lead security operations efforts, including threat detection, incident response, and vulnerability management, to safeguard infrastructure and data assets. Design security operations infrastructure specific to the organization’s AI and machine learning initiatives. Conduct security assessments, penetration testing, and audits to identify and mitigate security risks. Supporting DevOps Infrastructure and Automation: Assist DevOps team in designing, implementing, and maintaining scalable infrastructure.er access, authentication, and authorization.",
      applyLink: "https://www.crackeddevs.com/job/106191"
    },
    
  ];
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
<ResumeBuilder/>
<Job jobs={jobs} />
    <InterviewPreparation/>
 
    </>

  );
}

export default Hero;
