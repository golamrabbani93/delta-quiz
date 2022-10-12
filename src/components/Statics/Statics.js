import React from 'react';
import {useLoaderData} from 'react-router-dom';
import {
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	Bar,
	BarChart,
	ResponsiveContainer,
} from 'recharts';
import './Statics.css';
const Statics = () => {
	const {data} = useLoaderData();

	return (
		<div className="m-auto chart-container">
			<h2 className="text-center text-3xl md:text-5xl m-4 mt-14  md:m-8">Total Quiz List</h2>
			<ResponsiveContainer width="100%" height={400}>
				<BarChart className="mx-auto chart" width={530} height={400} data={data}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="name" />
					<YAxis />
					<Tooltip />
					<Legend />
					<Bar dataKey="total" fill="#dc164a" />
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
};

export default Statics;
