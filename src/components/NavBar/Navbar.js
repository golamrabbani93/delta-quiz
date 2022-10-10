import React from 'react';
import {Link, NavLink} from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
	return (
		<header className="  text-white">
			<div className=" px-20 py-3 header-nav md:flex justify-between items-center">
				<div className="logo text-4xl ">
					<Link to="/">DeltaQuiz</Link>
				</div>
				<nav className="pr-24">
					<NavLink to="/" end>
						Topics
					</NavLink>
					<NavLink to="/statics">Statics</NavLink>
					<NavLink to="/blog">Blog</NavLink>
				</nav>
			</div>
		</header>
	);
};

export default Navbar;
