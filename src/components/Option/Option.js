import './Option.css';
const testAnswer = (option) => {
	console.log(option);
};

const Option = ({option, correctAnswer}) => {
	return (
		<div className="option flex justify-start items-center p-4">
			<input type="radio" id={option} name="fav_language" value={option} />
			<label onClick={() => testAnswer(option)} className="ml-2" htmlFor={option}>
				{option}
			</label>
		</div>
	);
};

export default Option;
