import React from 'react';
import {useLoaderData} from 'react-router-dom';
import Topic from '../Topic/Topic';
import './Topics.css';

const Topics = () => {
	const {data} = useLoaderData();

	return (
		<div>
			<div
				className="header-bg flex items-center justify-center"
				style={{backgroundImage: "url('header.jpg')"}}
			>
				<h1 className="text-center text-4xl md:text-5xl text-white">
					Ready For a <span className="block text-center text-6xl md:text-8xl pt-3">QUIZ</span>
				</h1>
			</div>
			<div className="grid gap-4 m-4 md:grid-cols-2 lg:grid-cols-4  justify-center justify-items-center mt-12 mb-12">
				{data.map((data) => (
					<Topic key={data.id} data={data}></Topic>
				))}
			</div>
		</div>
	);
};

export default Topics;
