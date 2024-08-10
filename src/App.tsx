import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./components/Header/Navigation/Navigation";

const App: React.FC = () => {
	return (
		<div>
			<Navigation />
			<Outlet />
		</div>
	);
};

export default App;
