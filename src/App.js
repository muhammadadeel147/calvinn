import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Resume from "./components/Resume";
import 'primereact/resources/themes/saga-blue/theme.css'; 
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import 'primeflex/primeflex.css';
// import 'primeflex/primeflex.scss';

import Login from "./auth/Login";
import Navbar from "./components/Navbar";
import SignUp from "./auth/Signup";
import JobListing from "./components/JobListing";
import Hero from "./components/Hero";
import JobDetail from "./components/JobDetail";
import Alumni from "./components/Alumni";
import Pricing from "./components/Pricing";
const App = () => {
	const [result, setResult] = useState({});
  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "ABC Company",
      location: "New York, NY",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      applyLink: "#"
    },
    {
      id: 2,
      title: "Backend Developer",
      company: "XYZ Inc.",
      location: "San Francisco, CA",
      description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      applyLink: "#"
    },
    {
      id: 3,
      title: "UI/UX Designer",
      company: "Tech Solutions",
      location: "Los Angeles, CA",
      description: "Nulla facilisi. Nullam vehicula libero vel turpis facilisis, sit amet varius odio condimentum.",
      applyLink: "#"
    },
    {
      id: 4,
      title: "Full Stack Developer",
      company: "Tech Innovations",
      location: "Chicago, IL",
      description: "Fusce id justo vitae magna consequat pellentesque quis vel odio.",
      applyLink: "#"
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
      title: "HR Coordinator",
      company: "HR Solutions",
      location: "Dallas, TX",
      description: "Morbi non urna vitae dui malesuada ultrices. Ut commodo pharetra libero, eget ullamcorper urna eleifend quis.",
      applyLink: "#"
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
					<Route path='/home' element={<Home setResult={setResult} />} />
					<Route path='/resume' element={<Resume result={result} />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
