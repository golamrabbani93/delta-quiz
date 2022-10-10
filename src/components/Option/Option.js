import React from 'react';
import './Option.css';
const Option = ({option}) => {
	console.log(option);
	return (
		<div className="option flex justify-start items-center p-4">
			<input type="radio" id={option} name="fav_language" value={option} />
			<label className="ml-2" for={option}>
				{option}
			</label>
		</div>
	);
};

export default Option;
