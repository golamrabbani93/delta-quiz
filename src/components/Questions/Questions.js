import React, {useState} from 'react';
import Option from '../Option/Option';
import './Questions.css';

import {EyeIcon} from '@heroicons/react/24/solid';
const Questions = ({qt, ind, setRight, right, wrong, setWrong}) => {
	const [show, showAnswer] = useState(false);
	ind++;
	const {question, options, correctAnswer} = qt;
	return (
		<div>
			<div className="question mb-10">
				<div className="question-details">
					<h2 className="md:w-4/12 m-auto mt-7 ">
						Quiz No: {ind} {question}
					</h2>
					<EyeIcon
						title="See Correct Answer"
						onClick={() => showAnswer(!show)}
						className="eye h-7 w-7 mx-auto my-3 cursor-pointer"
					/>
					<h2 className={`md:w-4/12 m-auto mt-4 ${show ? 'block' : 'hidden'}`}>
						Correct Answer : {correctAnswer}
					</h2>
				</div>
				<div className="options grid md:grid-cols-2 gap-3 md:w-4/5 m-5 md:m-auto">
					{options.map((option, ind) => (
						<Option
							right={right}
							setRight={setRight}
							wrong={wrong}
							setWrong={setWrong}
							option={option}
							key={ind}
							correctAnswer={correctAnswer}
						></Option>
					))}
				</div>
			</div>
		</div>
	);
};

export default Questions;
