import React from 'react';
import {useLoaderData} from 'react-router-dom';

const Topics = () => {
	const quiz = useLoaderData();
	console.log(quiz);
	return (
		<div>
			<h2>This topics component</h2>
		</div>
	);
};

export default Topics;
