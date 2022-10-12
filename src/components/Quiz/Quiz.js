import React, {useState} from 'react';
import {Link, useLoaderData} from 'react-router-dom';
import Questions from '../Questions/Questions';
import './Quiz.css';

const Quiz = () => {
	const [right, setRight] = useState(0);
	const [wrong, setWrong] = useState(0);
	console.log('right', right);
	console.log('Wrong', wrong);
	const {data} = useLoaderData();
	const {questions, name} = data;
	return (
		<div className="quiz-container">
			<div className="quiz">
				<h2 className="text-4xl mb-7">{name} Quiz</h2>
				<div className="">
					{questions.map((question, ind) => (
						<Questions
							key={ind}
							qt={question}
							ind={ind}
							right={right}
							setRight={setRight}
							wrong={wrong}
							setWrong={setWrong}
						></Questions>
					))}
				</div>
			</div>
			<div className="count">
				<h2 className="text-3xl text-white font-bold">Right Answer : {right}</h2>
				<h2 className="text-3xl text-white font-bold mt-3 mb-5">Wrong Answer : {wrong}</h2>
				<Link className="mt-9 " to="/">
					Go To Homepage
				</Link>
			</div>
		</div>
	);
};

export default Quiz;
