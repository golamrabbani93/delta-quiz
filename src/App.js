import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Quiz from './components/Quiz/Quiz';
import Statics from './components/Statics/Statics';
import Topics from './components/Topics/Topics';
import Main from './layouts/Main';
import {getData} from './utilities/common';

function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Main></Main>,
			children: [
				{
					path: '/',
					loader: getData,
					element: <Topics></Topics>,
				},
				{
					path: '/quiz/:quizid',
					loader: async ({params}) => {
						return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizid}`);
					},
					element: <Quiz></Quiz>,
				},
				{
					path: 'statics',
					element: <Statics></Statics>,
				},
				{
					path: 'blog',
					element: <Blog></Blog>,
				},
			],
		},
	]);
	return (
		<div className="App">
			<RouterProvider router={router}></RouterProvider>
		</div>
	);
}

export default App;
