import React from "react";
import LogoClass from "./../../../assets/images/Classes/LogoClass.png";
import styles from "./BannerClasses.module.scss";

const BannerClasses: React.FC = () => {
	return (
		<div className={styles.bannerTitle}>
			<div className={styles.container}>
				<div className={styles.logo}>
					<img src={LogoClass} alt="LogoClass" />
					<h3>Art & Dance Studio</h3>
				</div>
				<div className={styles.subTitle}>
					<p>
						Танцевальное пространство ICON — территория творчества,
						самовыражения, гармонии тела и духа!
					</p>
				</div>
			</div>
		</div>
	);
};

export default BannerClasses;
