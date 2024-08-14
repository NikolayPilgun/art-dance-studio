import React from "react";
import ArrowIcon from "../Icons/ArrowIcon";
import ContactPicture from "./../../assets/images/Home/HomeBG.png";
import styles from "./HeaderContact.module.scss";

const HeaderContact: React.FC = () => (
	<div className={styles.container}>
		<div className={styles.title}>
			<h2>
				pole dance <span>Exotic Base</span>
			</h2>
		</div>
		<div className={styles.picture}>
			<img src={ContactPicture} alt="ContactPicture" />
		</div>
		<div className={styles.description}>
			<div className={styles.item}>
				<p>
					Наша система обучения подходит для людей с любым уровнем подготовки.
					Все абонементы действительны 1 месяц с момента активации (явки или
					прогула по абонементу). Все цены указаны в российских рублях.
				</p>
				<p>
					Наша система обучения подходит для людей с любым уровнем подготовки.
					Все абонементы действительны 1 месяц с момента активации (явки или
					прогула по абонементу). Все цены указаны в российских рублях.
				</p>
			</div>
			<div className={styles.item}>
				<p>
					Наша система обучения подходит для людей с любым уровнем подготовки.
					Все абонементы действительны 1 месяц с момента активации (явки или
					прогула по абонементу). Все цены указаны в российских рублях.
				</p>
				<p>
					<button type="submit" className={styles.submitButton}>
						Записаться на пробное занятие
						<ArrowIcon strokeColor="white" width={30} height={30} />
					</button>
				</p>
			</div>
		</div>
	</div>
);

export default HeaderContact;
