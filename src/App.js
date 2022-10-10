import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './App.css';
import Topics from './components/Topics/Topics';
import Main from './layouts/Main';

function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Topics></Topics>,
		},
	]);
	return (
		<div className="App">
			<RouterProvider router={router}></RouterProvider>
		</div>
	);
}

export default App;
