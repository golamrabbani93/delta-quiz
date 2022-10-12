import React from 'react';
import './SingleBlog.css';

const SingleBlog = ({qt}) => {
	const {question, answer} = qt;
	return (
		<div className="Single-blog mx-3 md:w-4/6 md:mx-auto border-2">
			<h2 className="text-1xl md:text-4xl mb-5">
				<span className="mark">Question :</span> {question}
			</h2>
			<h2 className="text-1xl md:text-2xl">
				<span className="mark">Answer : </span>
				{answer}
			</h2>
		</div>
	);
};

export default SingleBlog;
