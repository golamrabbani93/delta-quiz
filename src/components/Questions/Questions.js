import React from 'react';
import Option from '../Option/Option';

const Questions = ({qt, ind}) => {
	console.log(qt);
	ind++;
	// console.log(ind);
	const {question, options} = qt;
	return (
		<div>
			<div className="question">
				<div className="question-details">
					<h2 className="w-4/12 m-auto">
						Quiz No: {ind} {question}
					</h2>
					<h2>hello</h2>
				</div>
				{options.map((option) => (
					<Option></Option>
				))}
			</div>
		</div>
	);
};

export default Questions;
