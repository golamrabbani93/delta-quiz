import React from 'react';
import {Link} from 'react-router-dom';
import './Topic.css';

const Topic = ({data}) => {
	const {id, name, logo, total} = data;
	return (
		<div className="topic">
			<div className="img">
				<img src={logo} alt={name} className="p-3" />
			</div>
			<h3 className="font-bold pt-2 text-center">
				Total {name} Question : {total}
			</h3>
			<div className="details flex justify-around mt-5 items-center ">
				<h3>{name}</h3>
				<button>
					<Link to={`/quiz/${id}`}>Start Practice</Link>
				</button>
			</div>
		</div>
	);
};

export default Topic;
