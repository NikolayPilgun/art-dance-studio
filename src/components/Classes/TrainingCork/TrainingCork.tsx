import React from "react";
import TrainingCorkImg1 from "./../../../assets/images/Classes/TrainingCork/TrainingCorkImg1.png";
import TrainingCorkImg2 from "./../../../assets/images/Classes/TrainingCork/TrainingCorkImg2.png";
import TrainingCorkImg3 from "./../../../assets/images/Classes/TrainingCork/TrainingCorkImg3.png";
import TrainingCorkImg4 from "./../../../assets/images/Classes/TrainingCork/TrainingCorkImg4.png";
import TrainingCorkImg5 from "./../../../assets/images/Classes/TrainingCork/TrainingCorkImg5.png";
import TrainingCorkImg6 from "./../../../assets/images/Classes/TrainingCork/TrainingCorkImg6.png";
import styles from "./TrainingCork.module.scss";

interface ItemsTrainingData {
	id: number;
	picture: string;
	title: string;
	description: string;
}

const itemsTrainingData: ItemsTrainingData[] = [
	{
		id: 1,
		picture: TrainingCorkImg1,
		title: "Pole Dance Exotic Base",
		description: "пол дэнс экзотик БАЗА",
	},
	{
		id: 2,
		picture: TrainingCorkImg2,
		title: "Pole Dance Exotic Pro",
		description: "пол дэнс экзотик ПРОДВИНУТЫЕ/ПРОФИ",
	},
	{
		id: 3,
		picture: TrainingCorkImg3,
		title: "EXO — TRICKS",
		description: "пол дэнс экзотик трюки",
	},
	{
		id: 4,
		picture: TrainingCorkImg4,
		title: "Pole Dance Sport",
		description: "пол дэнс спорт",
	},
	{
		id: 5,
		picture: TrainingCorkImg5,
		title: "STRETCHING",
		description: "растяжка",
	},
	{
		id: 6,
		picture: TrainingCorkImg6,
		title: "ProSTRIP-PLASTIC",
		description: "стрип-пластика",
	},
];

const TrainingCork: React.FC = () => {
	return (
		<div className={styles.container}>
			<div className={styles.title}>
				<div className={styles.left}>
					<h2>
						Обучение <br /> с 0 до профи!
					</h2>
					<p>
						Наша система обучения подходит для людей с любым уровнем подготовки.
						Все абонементы действительны 1 месяц с момента активации (явки или
						прогула по абонементу). Все цены указаны в российских рублях.
					</p>
				</div>
				<div className={styles.right}>
					<p>/ Танцевальное пространство</p>
				</div>
			</div>
			<div className={styles.options}>
				<div className={styles.items}>
					{itemsTrainingData.map((item: ItemsTrainingData) => (
						<div key={item.id} className={styles.item}>
							<div className={styles.picture}>
								<img src={item.picture} alt={item.title} />
							</div>
							<div className={styles.description}>
								<h4>{item.title}</h4>
								<p>{item.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default TrainingCork;
