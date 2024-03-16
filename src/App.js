import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'primereact/resources/themes/saga-blue/theme.css'; 
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import 'primeflex/primeflex.css';
import Login from "./auth/Login";
import SignUp from "./auth/Signup";
import JobListing from "./components/JobListing";
import Hero from "./components/Hero";
import JobDetail from "./components/JobDetail";
import Alumni from "./components/Alumni";
import Pricing from "./components/Pricing";
const App = () => {
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
    {
      id: 5,
      title: "Software Engineer",
      company: "Innovative Solutions",
      location: "Seattle, WA",
      description: "Suspendisse nec lacus quis nulla convallis placerat. Cras nec dui ut urna mollis consequat.",
      applyLink: "#"
    },
    {
      id: 6,
      title: "Data Analyst",
      company: "Data Insights",
      location: "Boston, MA",
      description: "Proin sollicitudin semper lectus at ultricies. Nam non purus non ex volutpat tristique.",
      applyLink: "#"
    },
    {
      id: 7,
      title: "Product Manager",
      company: "Productive Solutions",
      location: "Austin, TX",
      description: "Vestibulum rutrum enim et dolor luctus interdum. Morbi at justo eget purus lacinia faucibus.",
      applyLink: "#"
    },
    {
      id: 8,
      title: "Marketing Specialist",
      company: "Marketing Pro",
      location: "Miami, FL",
      description: "Integer at eros eu metus interdum varius. Nullam auctor, enim id mollis sollicitudin.",
      applyLink: "#"
    },
    {
      id: 9,
      title: "Project Manager",
      company: "Project Partners",
      location: "Denver, CO",
      description: "Etiam eu nulla et nisi vehicula vestibulum vitae a turpis. Mauris in dictum enim.",
      applyLink: "#"
    },
    {
      id: 10,
      title: "Flutter Full Stack Developer",
      company: "HR Solutions",
      location: "Dallas, TX",
      description: "Flutter Developer needed to complete app and create website for app.Source code available Skills  Flutter  Payment Functionality In-App Advertising     API Integration    Social Media Account Integration    Chat & Messaging Software    User Authentication    Mobile App Development", 
       applyLink: "https://www.crackeddevs.com/job/106732"
    }
  ];
  
	return (
		<div>
			<BrowserRouter>
	
     
				<Routes>
					<Route path='/' element={<Hero/>} />
					<Route path='/signup' element={<SignUp/>} />
          <Route path='/login' element={ <Login/>} />
          <Route path='/alumni' element={ <Alumni/>} />
          <Route path='/pricing' element={ <Pricing/>} />
          <Route path='/jobs' element={<JobListing jobs={jobs}/>} />
          <Route path="/jobs/:jobId" element={<JobDetail jobs={jobs}/>} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
