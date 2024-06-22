import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Header from "./components/Header";

function App() {
	const router = createBrowserRouter(
		[
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/detail/:id",
				element: <Detail />,
			},
		],
		{
			basename: `${process.env.PUBLIC_URL}`,
		}
	);

	return (
		<RouterProvider router={router}>
			<Header />
		</RouterProvider>
	);
}

export default App;
