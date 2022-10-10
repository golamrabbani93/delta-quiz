import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './App.css';
import Statics from './components/Statics/Statics';
import Topics from './components/Topics/Topics';
import Main from './layouts/Main';

function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Main></Main>,
			children: [
				{
					path: '/',
					element: <Topics></Topics>,
				},
				{
					path: 'statics',
					element: <Statics></Statics>,
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
