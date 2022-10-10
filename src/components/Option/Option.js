import './Option.css';

const Option = ({option, correctAnswer}) => {
	return (
		<div className="option flex justify-start items-center p-4">
			<input type="radio" id={option} name="fav_language" value={option} />
			<label className="ml-2" htmlFor={option}>
				{option}
			</label>
		</div>
	);
};

export default Option;
