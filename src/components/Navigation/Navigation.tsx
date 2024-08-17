import React, { useState } from "react";
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
	const [isMenuOpen, setMenuOpen] = useState(false);

	const routes: Route[] = [
		{ path: "/", label: "Главная" },
		{ path: "about", label: "О нас" },
		{ path: "classes", label: "Классы" },
		{ path: "contact", label: "Контакты" },
	];

	const toggleMenu = () => {
		setMenuOpen(!isMenuOpen);
	};

	return (
		<div className={styles.navigationContainer}>
			<div
				className={`${styles.burger} ${isMenuOpen ? styles.burgerOpen : ""}`}
				onClick={toggleMenu}
			>
				<div className={styles.burgerLine}></div>
				<div className={styles.burgerLine}></div>
				<div className={styles.burgerLine}></div>
			</div>
			<nav
				className={`${styles.nav} ${
					orientation === "row" ? styles.row : styles.column
				} ${isMenuOpen ? styles.open : ""}`}
			>
				{routes.map((route) => (
					<NavLink
						key={route.path}
						to={route.path}
						className={({ isActive }) =>
							isActive ? styles.activeLink : styles.link
						}
						onClick={() => setMenuOpen(false)}
					>
						{route.label}
					</NavLink>
				))}
			</nav>
		</div>
	);
};

export default Navigation;
