import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from '../NavBar/Navbar';
import './NotFound.css';
const NotFound = () => {
	return (
		<div>
			<Navbar></Navbar>
			<div className="not-found flex justify-center items-center flex-col">
				<h2 className="text-7xl mb-3">OPPS!</h2>
				<h2 className="text-7xl">404 Not Found</h2>
				<Link className="mt-7" to="/">
					Go To Homepage
				</Link>
			</div>
		</div>
	);
};

export default NotFound;
