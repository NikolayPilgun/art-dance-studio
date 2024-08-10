import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./pages/About/About";
import Classes from "./pages/Classes/Classes";
import Contact from "./pages/Contact/Contact";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Home from "./pages/Home/Home";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <Home /> },
			{ path: "/about", element: <About /> },
			{ path: "/classes", element: <Classes /> },
			{ path: "/contact", element: <Contact /> },
		],
	},
]);

export default router;
