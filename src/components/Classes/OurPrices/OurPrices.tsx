import React, { useState } from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import styles from "./OurPrices.module.scss";

const OurPrices: React.FC = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	return (
		<div className={styles.ourPrices}>
			<div className={styles.container}>
				<div className={styles.title}>
					<div className={styles.left}>
						<h2>Наши цены</h2>
						<p>
							Все абонементы действительны 1 месяц с момента активации (явки или
							прогула по абонементу). Все цены указаны в российских рублях.
						</p>
					</div>
					<div className={styles.right}>
						<p>/ Стоимость</p>
					</div>
				</div>
				<div className={styles.items}>
					<div className={styles.item}>
						<div className={styles.header} onClick={() => setIsOpen(!isOpen)}>
							<h4>Групповые тренировки</h4>
							<ArrowIcon
								strokeColor="white"
								width={30}
								height={30}
								transform={isOpen ? "" : "scale(1, -1)"}
							/>
						</div>
						<div className={styles.body}>
							<div className={styles.bodyItem}>
								<div className={styles.bodyHeader}>
									<h4>Абонемент «ВСЕ ВКЛЮЧЕНО»</h4>
									<p>
										распространяется на ВСЕ групповые тренировки студии (кроме
										закрытых курсов, интенсивов и занятий у топ-тренера):
									</p>
								</div>
								<div className={styles.content}>
									<div>
										<p>
											<span>Пробное занятие</span>
											<span>900 ₽</span>
										</p>
										<p>
											<span>Разовое занятие</span>
											<span>1 200 ₽</span>
										</p>
									</div>
									<div>
										<h4>АБОНЕМЕНТЫ:</h4>
										<p>
											<span>«MINI» 4 занятия</span>
											<span>4 800 ₽</span>
										</p>
										<p>
											<span>«MEDIUM» 8 занятий</span>
											<span>7 800 ₽</span>
										</p>
										<p>
											<span>«MEDIUM+» 12 занятий</span>
											<span>11 400 ₽</span>
										</p>
										<p>
											<span>«MAXI» 24 занятия</span>
											<span>16 500 ₽</span>
										</p>
										<h5>
											Срок действия абонемента 30 дней. <br /> *абонемент к
											топ-тренеру отличается по стоимости.
										</h5>
									</div>
								</div>
							</div>
							<div className={styles.bodyItem}>
								<div className={styles.bodyHeader}>
									<h4>Абонемент «БЕЗ ПИЛОНА»</h4>
									<p>
										распространяется на все групповые тренировки студии (кроме
										пилона, закрытых курсов и интенсивов):
									</p>
								</div>
								<div className={styles.content}>
									<div>
										<p>
											<span>Разовое занятие</span>
											<span>900 ₽</span>
										</p>
										<p></p>
										<p></p>
									</div>
									<div>
										<h4>АБОНЕМЕНТЫ:</h4>
										<p>
											<span>«MEDIUM» 8 занятий</span>
											<span>6 400 ₽</span>
										</p>
										<p>
											<span>«MEDIUM+» 12 занятий</span>
											<span>7 900 ₽</span>
										</p>
										<p>
											<span>«MAXI» 24 занятия</span>
											<span>13 800 ₽</span>
										</p>
										<h5>
											Срок действия абонемента 30 дней. <br /> Оксана:
											Приоритетные блоки — групповые абонементы. Остальное
											больше как дополнительные пункты.
										</h5>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OurPrices;
