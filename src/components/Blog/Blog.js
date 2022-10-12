import React from 'react';
import {useLoaderData} from 'react-router-dom';

const Blog = () => {
	const questions = useLoaderData();

	return (
		<div>
			<h2 className="text-3xl md:text-5xl text-center my-4 md:my-7 ">
				All {questions.length} Questions
			</h2>
		</div>
	);
};

export default Blog;
