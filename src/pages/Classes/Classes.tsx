import React from "react";
import BannerButton from "../../components/Classes/BannerButton/BannerButton";
import BannerClasses from "../../components/Classes/BannerClasses/BannerClasses";
import LittleAboutUs from "../../components/Classes/LittleAboutUs/LittleAboutUs";
import OurPrices from "../../components/Classes/OurPrices/OurPrices";
import TrainingCork from "../../components/Classes/TrainingCork/TrainingCork";
import ContactForm from "../../components/Home/ContactForm/ContactForm";

const Classes: React.FC = () => (
	<>
		<BannerClasses />
		<BannerButton />
		<TrainingCork />
		<OurPrices />
		<LittleAboutUs />
		<ContactForm />
	</>
);

export default Classes;
