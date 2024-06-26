import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Layout from "./components/layout/Layout";
import Error from "./routes/Error";

function App() {
	const router = createBrowserRouter(
		[
			{
				element: <Layout />,
				errorElement: <Error />,
				children: [
					{
						path: "/",
						element: <Home />,
					},
					{
						path: "/detail/:id",
						element: <Detail />,
					},
				],
			},
		],
		{
			basename: `${process.env.PUBLIC_URL}`,
		}
	);

	return <RouterProvider router={router} />;
}

export default App;
