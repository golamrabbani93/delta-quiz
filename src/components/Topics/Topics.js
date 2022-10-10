import React from 'react';
import {Outlet} from 'react-router-dom';
import Navbar from '../NavBar/Navbar';

const Topics = () => {
	return (
		<div>
			<Navbar></Navbar>
			<h2>This topics component</h2>
			<Outlet></Outlet>
		</div>
	);
};

export default Topics;
