import React from 'react';
import './Option.css';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Option = ({option, correctAnswer}) => {
	const testAnswer = (option, e) => {
		if (option === correctAnswer) {
			success();
		} else {
			failed();
		}
		e.target.parentNode.parentNode.classList.add('complete');
	};
	const success = () => {
		toast.success('Wow! Your Answer is Right', {
			position: 'top-center',
			autoClose: 1500,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'colored',
		});
	};

	const failed = () => {
		toast.error('Opps! Your Answer is Wrong ', {
			position: 'top-center',
			autoClose: 1500,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'colored',
		});
	};

	return (
		<div className="option flex justify-start items-center p-4">
			<input type="radio" id={option} name="fav_language" value={option} />
			<label onClick={(e) => testAnswer(option, e)} className="ml-2" htmlFor={option}>
				{option}
			</label>
			<ToastContainer></ToastContainer>
		</div>
	);
};

export default Option;
