import React from 'react';
import {useLoaderData} from 'react-router-dom';
import Questions from '../Questions/Questions';
import './Quiz.css';

const Quiz = () => {
	const {data} = useLoaderData();
	const {questions, name} = data;
	return (
		<div className="quiz">
			<h2 className="text-4xl mb-7">{name} Quiz</h2>
			<div className="">
				{questions.map((question, ind) => (
					<Questions key={ind} qt={question} ind={ind}></Questions>
				))}
			</div>
		</div>
	);
};

export default Quiz;
