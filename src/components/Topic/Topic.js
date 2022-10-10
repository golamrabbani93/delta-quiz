import React from 'react';
import './Topic.css';

const Topic = ({data}) => {
	console.log(data);
	const {id, name, logo, total} = data;
	return (
		<div className="topic">
			<div className="img">
				<img src={logo} alt={name} />
			</div>
			<h3 className="font-bold pt-2 text-center">Total Quiz Question : {total}</h3>
			<div className="details flex justify-around mt-5 items-center ">
				<h3>{name}</h3>
				<button>
					<span>Strat Practice</span>
				</button>
			</div>
		</div>
	);
};

export default Topic;
