import React from "react";
import TrainingDis from "./../../../assets/images/Classes/TrainingCork/TrainingDis.png";
import styles from "./LittleAboutUs.module.scss";

const LittleAboutUs: React.FC = () => {
	return (
		<div className={styles.container}>
			<div className={styles.title}>
				<div className={styles.left}>
					<h2>
						ICON — это студия танца, территория творчества, самовыражения,
						гармонии тела и духа!
					</h2>
				</div>
				<div className={styles.right}>
					<p>/ Танцевальное пространство</p>
				</div>
			</div>
			<div className={styles.content}>
				<div className={styles.picture}>
					<img src={TrainingDis} alt="TrainingDis" />
				</div>
				<div className={styles.description}>
					<h4>
						Наш большой и просторный зал оборудован всем необходимым для
						тренировок и располагается в самом центре Москвы!
					</h4>
					<p>
						Наши профессиональный тренерский состав научит вас красиво двигаться
						и приведет вас к желаемому результату! Система обучения с 0 до
						профи. У нас вы обретете гибкость, отличную физическую форму и
						прекрасное настроение. Различные направления для максимально
						многостороннего личного развития. Мы проводим дополнительные
						интенсивы, мастер-классы, закрытые курсы с видеосъемкой, фотосессии
						и многое другое.
					</p>
				</div>
			</div>
		</div>
	);
};

export default LittleAboutUs;
