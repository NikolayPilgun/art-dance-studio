import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import styles from "./BannerButton.module.scss";

const BannerButton: React.FC = () => {
	return (
		<div className={styles.container}>
			<button type="submit" className={styles.submitButton}>
				Записаться на пробное занятие
				<ArrowIcon strokeColor="white" width={30} height={30} />
			</button>
		</div>
	);
};

export default BannerButton;
