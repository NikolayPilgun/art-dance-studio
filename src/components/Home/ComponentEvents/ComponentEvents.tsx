import React, { useCallback, useEffect, useRef, useState } from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import CustomArrowIcon from "../../Icons/CustomArrowIcon";
import EventsImg1 from "./../../../assets/images/Home/Events/EventsImg1.png";
import EventsImg2 from "./../../../assets/images/Home/Events/EventsImg2.png";
import EventsImg3 from "./../../../assets/images/Home/Events/EventsImg3.png";
import styles from "./ComponentEvents.module.scss";

interface ItemsEventsData {
	id: number;
	title: string;
	subTitle: string;
	picture: string;
	data: string;
	status: string;
}

const itemsEventsData: ItemsEventsData[] = [
	{
		id: 1,
		title: "БЕСПЛАТНАЯ ЛЕКЦИЯ «ЖЕНСКОЕ ЗДОРОВЬЕ И КРАСОТА. УХОД ЗА КОЖЕЙ»",
		subTitle:
			"Первый мастер-класс по направлению EXOTIC сКристиной Заднепровской! и POLE DANCE со стажем более 12 лет ...",
		picture: EventsImg1,
		data: "12/08/24",
		status: "мастер - класс",
	},
	{
		id: 2,
		title: "ФОТОДЕНЬ В СТИЛЕ нашей студии",
		subTitle:
			"Первый мастер-класс по направлению EXOTIC сКристиной Заднепровской! и POLE DANCE со стажем более 12 лет ...",
		picture: EventsImg2,
		data: "12/08/24",
		status: "фото день",
	},
	{
		id: 3,
		title: "день открытых дверей",
		subTitle:
			"Первый мастер-класс по направлению EXOTIC сКристиной Заднепровской! и POLE DANCE со стажем более 12 лет ...",
		picture: EventsImg3,
		data: "12/08/24",
		status: "событие",
	},
	{
		id: 4,
		title: "БЕСПЛАТНАЯ ЛЕКЦИЯ «ЖЕНСКОЕ ЗДОРОВЬЕ И КРАСОТА. УХОД ЗА КОЖЕЙ»",
		subTitle:
			"Первый мастер-класс по направлению EXOTIC сКристиной Заднепровской! и POLE DANCE со стажем более 12 лет ...",
		picture: EventsImg1,
		data: "12/08/24",
		status: "мастер - класс",
	},
	{
		id: 5,
		title: "ФОТОДЕНЬ В СТИЛЕ нашей студии",
		subTitle:
			"Первый мастер-класс по направлению EXOTIC сКристиной Заднепровской! и POLE DANCE со стажем более 12 лет ...",
		picture: EventsImg2,
		data: "12/08/24",
		status: "фото день",
	},
];

const ComponentEvents: React.FC = () => {
	const [startIndex, setStartIndex] = useState(0);
	const [visibleSlides, setVisibleSlides] = useState(3);
	const titleRefs = useRef<(HTMLHeadingElement | null)[]>([]);

	// Функция для выравнивания высоты заголовков
	const adjustTitleHeights = useCallback(() => {
		const heights = titleRefs.current.map((ref) => ref?.offsetHeight || 0);
		const maxHeight = Math.max(...heights);
		titleRefs.current.forEach((ref) => {
			if (ref) ref.style.height = `${maxHeight}px`;
		});
	}, []);

	// Изменение количества видимых слайдов и пересчет высоты заголовков при изменении размера окна
	useEffect(() => {
		const updateVisibleSlides = () => {
			const width = window.innerWidth;
			if (width >= 1280) setVisibleSlides(3);
			else if (width >= 1024) setVisibleSlides(2);
			else setVisibleSlides(1);

			adjustTitleHeights(); // Вызываем функцию пересчета высоты
		};

		window.addEventListener("resize", updateVisibleSlides);
		updateVisibleSlides(); // Начальный вызов для установки по текущему размеру

		return () => window.removeEventListener("resize", updateVisibleSlides);
	}, [adjustTitleHeights]);

	const handlePrevClick = () => {
		if (startIndex > 0) setStartIndex(startIndex - 1);
	};

	const handleNextClick = () => {
		if (startIndex < itemsEventsData.length - visibleSlides) {
			setStartIndex(startIndex + 1);
		}
	};

	return (
		<div className={styles.componentEvents}>
			<div className={styles.title}>
				<h2>Мероприятия</h2>
				<div className={styles.control}>
					<span
						onClick={handlePrevClick}
						style={{ cursor: startIndex === 0 ? "default" : "pointer" }}
					>
						<CustomArrowIcon
							strokeColor={startIndex === 0 ? "grey" : "black"}
							direction="left"
						/>
					</span>
					<span
						onClick={handleNextClick}
						style={{
							cursor:
								startIndex >= itemsEventsData.length - visibleSlides
									? "default"
									: "pointer",
						}}
					>
						<CustomArrowIcon
							strokeColor={
								startIndex >= itemsEventsData.length - visibleSlides
									? "grey"
									: "black"
							}
							direction="right"
						/>
					</span>
				</div>
			</div>
			<div className={styles.itemsWrapper}>
				<div
					className={styles.items}
					style={{
						transform: `translateX(-${(startIndex * 100) / visibleSlides}%)`,
					}}
				>
					{itemsEventsData.map((item, index) => (
						<div key={item.id} className={styles.item}>
							<div className={styles.picture}>
								<img src={item.picture} alt={item.title} />
								<span>{item.status}</span>
							</div>
							<div className={styles.description}>
								<div className={styles.titleContainer}>
									<p>{item.data}</p>
									<h4 ref={(el) => (titleRefs.current[index] = el)}>
										{item.title}
									</h4>
								</div>
								<div className={styles.subtitleContainer}>
									<p>{item.subTitle}</p>
									<div className={styles.arrow}>
										<ArrowIcon strokeColor="black" width={40} height={40} />
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ComponentEvents;
