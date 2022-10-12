import React, {useState} from 'react';
import {Link, NavLink} from 'react-router-dom';
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/solid';
import './Navbar.css';

const Navbar = () => {
	const [open, setOpen] = useState(false);
	return (
		<header className="text-white ">
			<div className=" px-20 py-3 header-nav md:flex justify-between items-center w-full ">
				<div className="logo text-4xl text-center ">
					<Link to="/">DeltaQuiz</Link>
				</div>
				<div
					onClick={() => setOpen(!open)}
					className="mx-auto h-7 w-7 font-extrabold block md:hidden"
				>
					{open ? <XMarkIcon /> : <Bars3Icon />}
				</div>

				<nav
					className={`flex flex-col md:flex-row md:justify-end mx-auto md:pr-24 text-center w-full absolute md:static ${
						open ? 'left-0' : 'left-[-900px]'
					}`}
				>
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
