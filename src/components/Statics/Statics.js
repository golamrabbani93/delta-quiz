import React from 'react';
import {useLoaderData} from 'react-router-dom';

const Statics = () => {
	const {data} = useLoaderData();
	console.log('🚀 ~ file: Statics.js ~ line 6 ~ Statics ~ data', data);
	return (
		<div>
			<h2>this Statics page</h2>
		</div>
	);
};

export default Statics;
