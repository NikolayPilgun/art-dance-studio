import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

const App: React.FC = () => {
	return (
		<div className="container">
			<Header />
			<main className="body">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};

export default App;
