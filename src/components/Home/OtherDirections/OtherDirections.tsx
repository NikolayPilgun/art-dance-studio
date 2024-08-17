import React, { useEffect, useState } from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import CustomArrowIcon from "../../Icons/CustomArrowIcon";
import odImg1 from "./../../../assets/images/Home/OtherDirections/odImg1.png";
import odImg2 from "./../../../assets/images/Home/OtherDirections/odImg2.png";
import odImg3 from "./../../../assets/images/Home/OtherDirections/odImg3.png";
import styles from "./OtherDirections.module.scss";

interface ItemsOtherData {
	id: number;
	title: string;
	subTitle: string;
	color: string;
	picture: string;
}

const itemsOtherData: ItemsOtherData[] = [
	{
		id: 1,
		title: "Pole Dance Exotic Pro",
		subTitle: "пол дэнс экзотик ПРОДВИНУТЫЕ/ПРОФИ",
		color: "black",
		picture: odImg1,
	},
	{
		id: 2,
		title: "EXO — TRICKS",
		subTitle: "пол дэнс экзотик трюки",
		color: "white",
		picture: odImg2,
	},
	{
		id: 3,
		title: "Contemporary Dance",
		subTitle: "современный танец и импровизация",
		color: "black",
		picture: odImg3,
	},
];

const OtherDirections: React.FC = () => {
	const [startIndex, setStartIndex] = useState(0);
	const [visibleSlides, setVisibleSlides] = useState(2);

	useEffect(() => {
		const updateVisibleSlides = () => {
			const width = window.innerWidth;

			if (width >= 1280) {
				setVisibleSlides(2);
			} else if (width >= 1024) {
				setVisibleSlides(2);
			} else if (width <= 1024) {
				setVisibleSlides(1);
			}
		};

		updateVisibleSlides();
		window.addEventListener("resize", updateVisibleSlides);

		return () => {
			window.removeEventListener("resize", updateVisibleSlides);
		};
	}, []);

	const slideCount = itemsOtherData.length;

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
			<div className={styles.container}>
				<div className={styles.title}>
					<h2>
						другие <br /> направления
					</h2>
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
									startIndex >= slideCount - visibleSlides
										? "default"
										: "pointer",
							}}
						>
							<CustomArrowIcon
								strokeColor={
									startIndex >= slideCount - visibleSlides ? "grey" : "black"
								}
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
						{itemsOtherData.map((item) => (
							<div
								key={item.id}
								className={`${styles.item} 
									${item.color === "white" ? styles.blackBackground : styles.whiteBackground}`}
							>
								<div className={styles.description}>
									<div>
										<h3
											className={
												item.color === "white"
													? styles.whiteText
													: styles.blackText
											}
										>
											{item.title}
										</h3>
										<p
											className={
												item.color === "white"
													? styles.whiteText
													: styles.darkGreyText
											}
										>
											{item.subTitle}
										</p>
									</div>
									<div>
										<ArrowIcon
											strokeColor={item.color}
											width={60}
											height={60}
										/>
									</div>
								</div>
								<div className={styles.picture}>
									<img src={item.picture} alt={item.subTitle} />
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default OtherDirections;
