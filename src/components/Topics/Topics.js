import React from 'react';
import {useLoaderData} from 'react-router-dom';
import Topic from '../Topic/Topic';

const Topics = () => {
	const {data} = useLoaderData();

	return (
		<div>
			{data.map((data) => (
				<Topic key={data.id} data={data}></Topic>
			))}
		</div>
	);
};

export default Topics;
