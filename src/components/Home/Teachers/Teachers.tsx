import React, { useState } from "react";
import CustomArrowIcon from "../../Icons/CustomArrowIcon";
import TeachIMG1 from "./../../../assets/images/Home/Teachers/TeachIMG1.png";
import TeachIMG2 from "./../../../assets/images/Home/Teachers/TeachIMG2.png";
import TeachIMG3 from "./../../../assets/images/Home/Teachers/TeachIMG3.png";
import TeachIMG4 from "./../../../assets/images/Home/Teachers/TeachIMG4.png";
import TeachIMG5 from "./../../../assets/images/Home/Teachers/TeachIMG5.png";
import styles from "./Teachers.module.scss";

interface ItemsTeachersData {
	id: number;
	name: string;
	jobTitle: string;
	picture: string;
}

const itemsTeachersData: ItemsTeachersData[] = [
	{
		id: 1,
		name: "анастасия митяева",
		jobTitle: "Преподаватель Exotic Pole Dance, Stretching",
		picture: TeachIMG1,
	},
	{
		id: 2,
		name: "анастасия митяева",
		jobTitle: "Преподаватель Exotic Pole Dance, Stretching",
		picture: TeachIMG2,
	},
	{
		id: 3,
		name: "анастасия митяева",
		jobTitle: "Преподаватель Exotic Pole Dance, Stretching",
		picture: TeachIMG3,
	},
	{
		id: 4,
		name: "анастасия митяева",
		jobTitle: "Преподаватель Exotic Pole Dance, Stretching",
		picture: TeachIMG4,
	},
	{
		id: 5,
		name: "анастасия митяева",
		jobTitle: "Преподаватель Exotic Pole Dance, Stretching",
		picture: TeachIMG5,
	},
	{
		id: 6,
		name: "анастасия митяева",
		jobTitle: "Преподаватель Exotic Pole Dance, Stretching",
		picture: TeachIMG1,
	},
	{
		id: 7,
		name: "анастасия митяева",
		jobTitle: "Преподаватель Exotic Pole Dance, Stretching",
		picture: TeachIMG2,
	},
];

const Teachers: React.FC = () => {
	const [startIndex, setStartIndex] = useState(0);
	const visibleSlides = 5;
	const slideCount = itemsTeachersData.length;

	const handlePrevClick = () => {
		if (startIndex > 0) {
			setStartIndex(startIndex - 1);
		}
	};

	const handleNextClick = () => {
		if (startIndex < slideCount - visibleSlides) {
			setStartIndex(startIndex + 1);
		}
	};

	return (
		<div className={styles.otherDirections}>
			<div className={styles.title}>
				<h2>педагоги</h2>
				<div className={styles.control}>
					<span
						onClick={handlePrevClick}
						style={{ cursor: startIndex === 0 ? "default" : "pointer" }}
					>
						<CustomArrowIcon
							strokeColor={startIndex === 0 ? "grey" : "white"}
							direction="left"
						/>
					</span>
					<span
						onClick={handleNextClick}
						style={{
							cursor:
								startIndex >= slideCount - visibleSlides
									? "default"
									: "pointer",
						}}
					>
						<CustomArrowIcon
							strokeColor={
								startIndex >= slideCount - visibleSlides ? "grey" : "white"
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
					{itemsTeachersData.map((item) => (
						<div key={item.id} className={styles.item}>
							<div className={styles.description}>
								<h4>{item.name}</h4>
								<p>{item.jobTitle}</p>
							</div>
							<div className={styles.picture}>
								<img src={item.picture} alt={item.name} />
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Teachers;
