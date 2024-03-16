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
const App = () => {
	const [result, setResult] = useState({});

	return (
		<div>
			<BrowserRouter>
			<Navbar/>
				<Routes>
					<Route path='/' element={<Login/>} />
					<Route path='/s' element={<SignUp/>} />
					<Route path='/home' element={<Home setResult={setResult} />} />
					<Route path='/resume' element={<Resume result={result} />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
