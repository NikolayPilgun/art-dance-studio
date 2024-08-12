import React from "react";
import styles from "./BannerTitle.module.scss";

const BannerTitle: React.FC = () => {
	return (
		<div className={styles.bannerTitle}>
			<div className={styles.container}>
				<h1 className={styles.title}>
					<span>Pole Dance</span>
					<br />
					<span>Exotic Base</span>
				</h1>
				<p className={styles.subTitle}>
					Танцевальное пространство ICON — территория творчества,
					<br /> самовыражения, гармонии тела и духа!
				</p>
			</div>
		</div>
	);
};

export default BannerTitle;
