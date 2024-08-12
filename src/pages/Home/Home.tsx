import React from "react";
import BannerTitle from "../../components/Home/BannerTitle/BannerTitle";
import Options from "../../components/Home/Options/Options";
import styles from "./Home.module.scss";

const Home: React.FC = () => (
	<div className={styles.home}>
		<BannerTitle />
		<Options />
	</div>
);

export default Home;
