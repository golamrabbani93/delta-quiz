import React from 'react';
import Option from '../Option/Option';
import './Questions.css';

const Questions = ({qt, ind}) => {
	ind++;
	console.log(qt);
	const {question, options, correctAnswer} = qt;
	return (
		<div>
			<div className="question">
				<div className="question-details">
					<h2 className="w-4/12 m-auto mt-7">
						Quiz No: {ind} {question}
					</h2>
					<h2>hello</h2>
				</div>
				<div className="options grid grid-cols-2 gap-3 w-6/12 m-auto">
					{options.map((option, ind) => (
						<Option option={option} key={ind} correctAnswer={correctAnswer}></Option>
					))}
				</div>
			</div>
		</div>
	);
};

export default Questions;