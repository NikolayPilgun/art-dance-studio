import React from "react";
import BannerContact from "../../components/Contact/BannerContact/BannerContact";
import ContactElements from "../../components/Contact/Elements/ContactElements";
import ContactForm from "../../components/Home/ContactForm/ContactForm";

const Contact: React.FC = () => (
	<>
		<BannerContact />
		<ContactElements />
		<ContactForm />
	</>
);

export default Contact;
