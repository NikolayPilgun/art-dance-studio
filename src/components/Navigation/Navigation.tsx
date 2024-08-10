import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.scss";

interface Route {
	path: string;
	label: string;
}

interface NavigationProps {
	orientation: "row" | "column";
}

const Navigation: React.FC<NavigationProps> = ({ orientation }) => {
	const routes: Route[] = [
		{ path: "/", label: "Главная" },
		{ path: "about", label: "О нас" },
		{ path: "classes", label: "Классы" },
		{ path: "contact", label: "Контакты" },
	];

	return (
		<nav
			className={`${styles.nav} ${
				orientation === "row" ? styles.row : styles.column
			}`}
		>
			{routes.map((route) => (
				<NavLink
					key={route.path}
					to={route.path}
					className={({ isActive }) =>
						isActive ? styles.activeLink : styles.link
					}
				>
					{route.label}
				</NavLink>
			))}
		</nav>
	);
};

export default Navigation;
