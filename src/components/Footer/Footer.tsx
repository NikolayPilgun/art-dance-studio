import React from "react";
import IconFour from "../Icons/IconFour";
import IconOne from "../Icons/IconOne";
import IconThree from "../Icons/IconThree";
import IconTwo from "../Icons/IconTwo";
import Navigation from "../Navigation/Navigation";
import FooterArrow from "./../../assets/images/Footer/arrow-up-right.svg";
import FooterClock from "./../../assets/images/Footer/clock.svg";
import FooterMail from "./../../assets/images/Footer/mail.svg";
import FooterMap from "./../../assets/images/Footer/map-pin.svg";
import FooterPhone from "./../../assets/images/Footer/phone-call.svg";
import logoFooter from "./../../assets/images/Logo/logoFooter.svg";
import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
	const iconColor = { fillColor: "white", strokeColor: "white" };

	return (
		<footer className={styles.footer}>
			<div className={styles.left}>
				<div className={styles.logo}>
					<img src={logoFooter} alt="logoFooter" />
					<h5>Art & Dance Studio</h5>
				</div>
				<p>
					© 2024. Все права защищены <br />
					Политика конфиденциальности
				</p>
			</div>
			<div className={styles.center}>
				<Navigation orientation="column" />
			</div>
			<div className={styles.right}>
				<div className={styles.address}>
					<p>
						<img src={FooterMap} alt="FooterMap" />
						<span>г. Москва, Проспект Мира 68 ст2</span>
					</p>
					<p>
						<img src={FooterPhone} alt="FooterPhone" />
						<span> +7 495 120-18-19</span>
					</p>
					<p>
						<img src={FooterMail} alt="FooterMail" />
						<span>Icon-dance@yandex.ru</span>
					</p>
					<p>
						<img src={FooterClock} alt="FooterClock" />
						<span>c 9:00 - 21:00 (без входных)</span>
					</p>
				</div>
				<div className={styles.button}>
					<button>
						Записаться <img src={FooterArrow} alt="FooterArrow" />
					</button>
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
							<IconThree
								width={35}
								height={20}
								fillColor={iconColor.fillColor}
							/>
						</span>
						<span>
							<IconFour
								width={25}
								height={25}
								fillColor={iconColor.fillColor}
							/>
						</span>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
