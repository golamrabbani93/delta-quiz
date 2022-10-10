import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
	return (
		<header className="md:flex justify-between items-center px-20 py-3 text-white">
			<div className="logo text-4xl ">
				<Link to="/">DeltaQuiz</Link>
			</div>
			<nav className="pr-24">
				<NavLink to="/" end>
					Topic
				</NavLink>
				<NavLink to="/statics">Statics</NavLink>
			</nav>
		</header>
	);
};

export default Navbar;
