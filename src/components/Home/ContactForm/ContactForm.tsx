import React, { useState } from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import ContactIMG from "./../../../assets/images/Home/Contact/ContactForm.png";
import styles from "./ContactForm.module.scss";

const ContactForm: React.FC = () => {
	const [question, setQuestion] = useState("");
	const [phone, setPhone] = useState("");
	const [errors, setErrors] = useState<{ question?: string; phone?: string }>(
		{}
	);

	const validateQuestion = (input: string) => {
		const regex = /^[A-Za-zА-Яа-я\s\d]{1,300}$/;
		return regex.test(input);
	};

	const validatePhone = (input: string) => {
		const regex = /^\+?[1-9]\d{1,14}$/;
		return regex.test(input);
	};

	const handleQuestionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setQuestion(value);

		if (validateQuestion(value)) {
			setErrors((prevErrors) => ({ ...prevErrors, question: undefined }));
		} else {
			setErrors((prevErrors) => ({
				...prevErrors,
				question:
					"Вопрос может содержать только буквы, цифры и пробелы, и быть не более 300 символов.",
			}));
		}
	};

	const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setPhone(value);

		if (validatePhone(value)) {
			setErrors((prevErrors) => ({ ...prevErrors, phone: undefined }));
		} else {
			setErrors((prevErrors) => ({
				...prevErrors,
				phone: "Введите корректный номер телефона.",
			}));
		}
	};

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		const newErrors: { question?: string; phone?: string } = {};

		if (!validateQuestion(question)) {
			newErrors.question =
				"Вопрос может содержать только буквы, цифры и пробелы, и быть не более 300 символов.";
		}
		if (!validatePhone(phone)) {
			newErrors.phone = "Введите корректный номер телефона.";
		}

		if (Object.keys(newErrors).length === 0) {
			fetch("https://your-fake-endpoint.com/submit", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ question, phone }),
			})
				.then(() => alert("Форма отправлена!"))
				.catch((error) => console.error("Ошибка отправки формы:", error));

			setQuestion("");
			setPhone("");
		} else {
			setErrors(newErrors);
		}
	};

	return (
		<div className={styles.container}>
			<div className={styles.formContainer}>
				<form onSubmit={handleSubmit} className={styles.form}>
					<div className={styles.description}>
						<p>/ свяжитесь с нами</p>
						<h2>Остались вопросы?</h2>
						<p>Оставьте заявку, и наши менеджеры обязательно свяжутся с Вами</p>
					</div>
					<div className={styles.inputBlock}>
						<div className={styles.field}>
							<div className={styles.inputContainer}>
								{errors.question && (
									<span className={styles.error}>{errors.question}</span>
								)}
								<input
									id="question"
									type="text"
									placeholder="Ваш вопрос"
									value={question}
									onChange={handleQuestionChange}
								/>
							</div>
						</div>

						<div className={styles.field}>
							<div className={styles.inputContainer}>
								{errors.phone && (
									<span className={styles.error}>{errors.phone}</span>
								)}
								<input
									id="phone"
									type="tel"
									placeholder="Номер телефона"
									value={phone}
									onChange={handlePhoneChange}
								/>
							</div>
						</div>
					</div>

					<button type="submit" className={styles.submitButton}>
						отправить <ArrowIcon strokeColor="white" width={30} height={30} />
					</button>
					<div className={styles.consent}>
						<p>Согласен (на) с условиями политики конфиденциальности</p>
					</div>
				</form>
			</div>
			<div className={styles.image}>
				<img src={ContactIMG} alt="ContactIMG" />
			</div>
		</div>
	);
};

export default ContactForm;
