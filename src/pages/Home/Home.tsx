import React from "react";
import BannerTitle from "../../components/Home/BannerTitle/BannerTitle";
import Options from "../../components/Home/Options/Options";
import OtherDirections from "../../components/Home/OtherDirections/OtherDirections";
import Teachers from "../../components/Home/Teachers/Teachers";

const Home: React.FC = () => (
	<>
		<BannerTitle />
		<Options />
		<OtherDirections />
		<Teachers />
	</>
);

export default Home;
