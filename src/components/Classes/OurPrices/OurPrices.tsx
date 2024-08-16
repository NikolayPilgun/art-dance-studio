import React, { useRef, useState } from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import OurPricesImg1 from "./../../../assets/images/Classes/OurPrices1.png";
import styles from "./OurPrices.module.scss";

type FormData = {
	question: string;
	phone: string;
};

type FormErrors = {
	question?: string;
	phone?: string;
};

const OurPrices: React.FC = () => {
	const [openIndex, setOpenIndex] = useState<number | null>(null);
	const [formData, setFormData] = useState<FormData>({
		question: "",
		phone: "",
	});
	const [errors, setErrors] = useState<FormErrors>({});
	const contentRefs = useRef<HTMLDivElement[]>([]);

	const validateInput = (name: keyof FormData, value: string): boolean => {
		const patterns = {
			question: /^[A-Za-zА-Яа-я\s\d]{1,300}$/,
			phone: /^\+?[1-9]\d{1,14}$/,
		};
		return patterns[name].test(value);
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { id, value } = e.target;
		const field = id as keyof FormData;

		setFormData((prev) => ({ ...prev, [field]: value }));

		if (validateInput(field, value)) {
			setErrors((prev) => ({ ...prev, [field]: undefined }));
		} else {
			const errorMessages = {
				question:
					"Вопрос может содержать только буквы, цифры и пробелы, и быть не более 300 символов.",
				phone: "Введите корректный номер телефона.",
			};
			setErrors((prev) => ({ ...prev, [field]: errorMessages[field] }));
		}
	};

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();

		const newErrors: FormErrors = {};
		(Object.keys(formData) as Array<keyof FormData>).forEach((key) => {
			if (!validateInput(key, formData[key])) {
				newErrors[key] = errors[key];
			}
		});

		if (Object.keys(newErrors).length === 0) {
			fetch("https://your-fake-endpoint.com/submit", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			})
				.then(() => alert("Форма отправлена!"))
				.catch((error) => console.error("Ошибка отправки формы:", error));

			setFormData({ question: "", phone: "" });
		} else {
			setErrors(newErrors);
		}
	};

	const toggleOpen = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	const setRef = (element: HTMLDivElement, index: number) => {
		contentRefs.current[index] = element;
	};

	const getItemStyle = (index: number) => {
		if (openIndex === index) {
			return { maxHeight: `${contentRefs.current[index]?.scrollHeight}px` };
		}
		return { maxHeight: "0px" };
	};

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
					{[
						{
							title: "Групповые тренировки",
							content: (
								<div className={styles.bodyItems}>
									<div className={styles.bodyItem}>
										<div className={styles.bodyHeader}>
											<h4>Абонемент «ВСЕ ВКЛЮЧЕНО»</h4>
											<p>
												распространяется на ВСЕ групповые тренировки студии
												(кроме закрытых курсов, интенсивов и занятий у
												топ-тренера):
											</p>
										</div>
										<div className={styles.content}>
											<div className={styles.firstChild}>
												<p>
													<span>Пробное занятие</span>
													<span>900 ₽</span>
												</p>
												<p>
													<span>Разовое занятие</span>
													<span className={styles.withButton}>
														<button>
															Записаться <ArrowIcon />
														</button>
														<span>1 200 ₽</span>
													</span>
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
												распространяется на все групповые тренировки студии
												(кроме пилона, закрытых курсов и интенсивов):
											</p>
										</div>
										<div className={styles.content}>
											<div className={styles.firstChild}>
												<p>
													<span>Разовое занятие</span>
													<span>900 ₽</span>
												</p>
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
							),
						},
						{
							title: "Индивидуальные тренировки",
							content: (
								<div className={styles.bodyItems}>
									<div className={styles.bodyItem}>
										<div className={styles.bodyHeader}>
											<h4>Индивидуальные тренировки</h4>
											<p>
												Формат индивидуальных тренировок способствует более
												быстрому достижению желаемых результатов с учетом
												индивидуальных пожеланий ученика.
											</p>
										</div>
										<div className={styles.content}>
											<div style={{ margin: "30px 0px" }}>
												<p>
													<span>1 занятие</span>
													<span style={{ textAlign: "right" }}>
														<span>от 3 000 ₽</span>
														<span>(длительность 1 час)</span>
													</span>
												</p>
											</div>
											<div>
												<h5>
													Вы можете подобрать для себя удобное время занятий
													(дата и время устанавливается при согласовании с
													администратором).
												</h5>
											</div>
											<div className={styles.contButton}>
												<button type="submit" className={styles.submitButton}>
													Записаться на первое занятие
													<ArrowIcon
														strokeColor="white"
														width={30}
														height={30}
													/>
												</button>
											</div>
										</div>
									</div>
									<div className={styles.bodyItem}>
										<div className={styles.picture}>
											<img src={OurPricesImg1} alt="OurPricesImg1" />
										</div>
									</div>
								</div>
							),
						},
						{
							title: "Аренда зала/аренда пилона",
							content: (
								<div className={styles.bodyItems}>
									<div className={styles.bodyItem}>
										<div className={styles.bodyHeader}>
											<h4>Аренда зала</h4>
											<p>Вы можете взять в аренду зал для фото/видео съемок.</p>
										</div>
										<div className={styles.content}>
											<div style={{ margin: "30px 0px", minHeight: "380px" }}>
												<h4>Аренда зала:</h4>
												<p>
													<span>2 человека</span>
													<span style={{ textAlign: "right" }}>
														<span>2 000 ₽/час</span>
														<span style={{ fontSize: "14px" }}>до 17:00</span>
													</span>
												</p>
												<p>
													<span>2 человека</span>
													<span style={{ textAlign: "right" }}>
														<span>3 000 ₽/час</span>
														<span style={{ fontSize: "14px" }}>
															после 17:00 в будние дни/выходные/праздничные дни
														</span>
													</span>
												</p>
												<p>
													<span>Более 2 человек</span>
													<span>3 000 ₽/час</span>
												</p>
											</div>
											<div>
												<h5>Цена указана за 1 час</h5>
											</div>
											<div className={styles.contButton}>
												<button type="submit" className={styles.submitButton}>
													Записаться
													<ArrowIcon
														strokeColor="white"
														width={30}
														height={30}
													/>
												</button>
											</div>
										</div>
									</div>
									<div className={styles.bodyItem}>
										<div className={styles.bodyHeader}>
											<h4>аренда пилона</h4>
											<p>
												Вы можете взять в аренду пилон для самостоятельной
												подготовки.
											</p>
										</div>
										<div className={styles.content}>
											<div style={{ margin: "30px 0px", minHeight: "380px" }}>
												<h4>Аренда пилона:</h4>
												<p>
													<span>Аренда пилона</span>
													<span>900 ₽/час</span>
												</p>
												<p>
													<span>Для учеников студии</span>
													<span>700 ₽/час</span>
												</p>
											</div>
											<div>
												<h5>Цена указана за 1 час</h5>
											</div>
											<div className={styles.contButton}>
												<button type="submit" className={styles.submitButton}>
													Записаться
													<ArrowIcon
														strokeColor="white"
														width={30}
														height={30}
													/>
												</button>
											</div>
										</div>
									</div>
								</div>
							),
						},
						{
							title: "Дополнительные услуги",
							content: (
								<div className={styles.bodyItems}>
									<div className={styles.bodyItem}>
										<div
											className={styles.bodyHeader}
											style={{ minHeight: "260px" }}
										>
											<h4>ПОДАРОЧНЫЙ СЕРТИФИКАТ</h4>
											<p>
												(сделать оригинальный подарок — просто!) Сертификат
												можно оформить на любые занятия, товары и услуги студии.
												Такой подарок удивит и порадует как профессиональных
												танцоров, так и тех, кто только начинает знакомство с
												волшебным миром танца!
											</p>
										</div>
										<div className={styles.content}>
											<div style={{ margin: "30px 0px" }}>
												<h4 style={{ fontSize: "20px" }}>
													Оформите заявку, мы свяжемся с вами в ближайшее время
													и ответим на интересующие вопросы
												</h4>
											</div>
											<form onSubmit={handleSubmit} className={styles.form}>
												<div className={styles.inputBlock}>
													{(["question", "phone"] as Array<keyof FormData>).map(
														(field) => (
															<div key={field} className={styles.field}>
																{errors[field] && (
																	<span className={styles.error}>
																		{errors[field]}
																	</span>
																)}
																<input
																	id={field}
																	type={field === "phone" ? "tel" : "text"}
																	placeholder={
																		field === "phone"
																			? "Номер телефона"
																			: "Ваш вопрос"
																	}
																	value={formData[field]}
																	onChange={handleChange}
																/>
															</div>
														)
													)}
												</div>
												<button type="submit" className={styles.submitButton}>
													подарить
													<ArrowIcon
														strokeColor="white"
														width={30}
														height={30}
													/>
												</button>
												<div>
													<h5>
														Согласен (на) с условиями политики
														конфиденциальности
													</h5>
												</div>
											</form>
										</div>
									</div>
									<div className={styles.bodyItem}>
										<div
											className={styles.bodyHeader}
											style={{ minHeight: "260px" }}
										>
											<h4>АРЕНДА ШКАФЧИКА</h4>
											<p>
												(для комфортных занятий) Больше не нужно носить с собой
												тяжелую сумку!
											</p>
										</div>
										<div className={styles.content}>
											<div style={{ margin: "30px 0px" }}>
												<h4 style={{ fontSize: "20px" }}>
													Вы можете арендовать шкафчик для хранения своих
													танцевальных вещей и всего необходимого
												</h4>
											</div>

											<form onSubmit={handleSubmit} className={styles.form}>
												<div className={styles.inputBlock}>
													{(["question", "phone"] as Array<keyof FormData>).map(
														(field) => (
															<div key={field} className={styles.field}>
																{errors[field] && (
																	<span className={styles.error}>
																		{errors[field]}
																	</span>
																)}
																<input
																	id={field}
																	type={field === "phone" ? "tel" : "text"}
																	placeholder={
																		field === "phone"
																			? "Номер телефона"
																			: "Ваш вопрос"
																	}
																	value={formData[field]}
																	onChange={handleChange}
																/>
															</div>
														)
													)}
												</div>
												<button type="submit" className={styles.submitButton}>
													арендовать
													<ArrowIcon
														strokeColor="white"
														width={30}
														height={30}
													/>
												</button>
												<div>
													<h5>
														Согласен (на) с условиями политики
														конфиденциальности
													</h5>
												</div>
											</form>
										</div>
									</div>
								</div>
							),
						},
					].map((item, index) => (
						<div key={index} className={styles.item}>
							<div className={styles.header} onClick={() => toggleOpen(index)}>
								<h4>{item.title}</h4>
								<ArrowIcon
									strokeColor="white"
									width={30}
									height={30}
									transform={openIndex === index ? "" : "scale(1, -1)"}
								/>
							</div>
							<div
								className={styles.body}
								ref={(el) => setRef(el as HTMLDivElement, index)}
								style={getItemStyle(index)}
							>
								{item.content}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default OurPrices;
