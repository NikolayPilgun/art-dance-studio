import React from "react";
import { useLocation } from "react-router-dom";
import IconFour from "../Icons/IconFour";
import IconOne from "../Icons/IconOne";
import IconThree from "../Icons/IconThree";
import IconTwo from "../Icons/IconTwo";
import Navigation from "../Navigation/Navigation";
import logo from "./../../assets/images/Logo/logo.svg";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
	const location = useLocation();

	let headerClass;
	let iconColor = { fillColor: "white", strokeColor: "white" }; // белый цвет по умолчанию

	switch (location.pathname) {
		case "/":
			headerClass = styles.homeHeader;
			break;
		case "/about":
		case "/contact":
			headerClass = styles.aboutContactHeader;
			iconColor = { fillColor: "black", strokeColor: "black" }; // черный цвет для этих маршрутов
			break;
		case "/classes":
			headerClass = styles.classesHeader;
			break;
		default:
			headerClass = "";
			break;
	}

	return (
		<header className={`${styles.header} ${headerClass}`}>
			<div className={styles.logo}>
				<img src={logo} alt="LOGO" />
				<h5>Art & Dance Studio</h5>
			</div>
			<Navigation orientation="row" />
			<div className={styles.address}>
				<h4>+7 495 120-18-19</h4>
				<h5>Москва, пр-т Мира, д.68, стр. 2</h5>
			</div>
			<div className={styles.social}>
				<span>
					<IconOne
						width={30}
						height={30}
						fillColor={iconColor.fillColor}
						strokeColor={iconColor.strokeColor}
					/>
				</span>
				<span>
					<IconTwo width={30} height={25} fillColor={iconColor.fillColor} />
				</span>
				<span>
					<IconThree width={35} height={20} fillColor={iconColor.fillColor} />
				</span>
				<span>
					<IconFour width={25} height={25} fillColor={iconColor.fillColor} />
				</span>
			</div>
		</header>
	);
};

export default Header;
