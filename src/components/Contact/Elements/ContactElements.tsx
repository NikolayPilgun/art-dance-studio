import React from "react";
import IconFour from "../../Icons/IconFour";
import IconOne from "../../Icons/IconOne";
import IconThree from "../../Icons/IconThree";
import IconTwo from "../../Icons/IconTwo";
import styles from "./ContactElements.module.scss";

const ContactElements: React.FC = () => (
	<div className={styles.container}>
		<h2 className={styles.header}>Наши контакты</h2>

		<div className={styles.innerContainer}>
			<address className={styles.address}>
				<p>
					<strong>Адрес:</strong> г. Москва, Проспект Мира 68 ст2
				</p>
				<p>
					<strong>Телефон:</strong> +7 495 120-18-19
				</p>
				<p>
					<strong>Email:</strong> Icon-dance@yandex.ru
				</p>
				<p>
					<strong>Часы работы:</strong> с 9:00 - 21:00 (без выходных)
				</p>
			</address>

			<div className={styles.social}>
				<span>
					<IconOne
						width={50}
						height={50}
						fillColor="black"
						strokeColor="black"
					/>
				</span>
				<span>
					<IconTwo width={50} height={50} fillColor="black" />
				</span>
				<span>
					<IconThree width={55} height={55} fillColor="black" />
				</span>
				<span>
					<IconFour width={50} height={50} fillColor="black" />
				</span>
			</div>
		</div>
	</div>
);

export default ContactElements;
