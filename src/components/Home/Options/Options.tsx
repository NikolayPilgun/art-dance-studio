import React, { useState } from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import SubPicture1 from "./../../../assets/images/Home/Subscription/sub1.png";
import SubPicture2 from "./../../../assets/images/Home/Subscription/sub2.png";
import SubPicture3 from "./../../../assets/images/Home/Subscription/sub3.png";
import SubPicture4 from "./../../../assets/images/Home/Subscription/sub4.png";
import SubPicture5 from "./../../../assets/images/Home/Subscription/sub5.png";
import SubPicture6 from "./../../../assets/images/Home/Subscription/sub6.png";
import styles from "./Options.module.scss";

interface SubscriptionOption {
	title: string;
	description: string;
}

const subscriptionOptions: SubscriptionOption[] = [
	{
		title: "Абонемент «ВСЕ ВКЛЮЧЕНО»",
		description:
			"распространяется на ВСЕ групповые тренировки студии (кроме закрытых курсов, интенсивов и занятий у топ-тренера):",
	},
	{
		title: "Абонемент «БЕЗ ПИЛОНА»",
		description:
			"распространяется на все групповые тренировки студии (кроме пилона, закрытых курсов и интенсивов):",
	},
];

interface ItemsSubscription {
	id: number;
	filter: "Все включено" | "Без пилона";
	status: "Занятие" | "Абонемент";
	picture: string;
	description: string;
	price: number;
}

const itemsSubscription: ItemsSubscription[] = [
	{
		id: 1,
		filter: "Без пилона",
		status: "Занятие",
		picture: SubPicture1,
		description: "Пробное занятие",
		price: 900,
	},
	{
		id: 2,
		filter: "Без пилона",
		status: "Занятие",
		picture: SubPicture2,
		description: "Разовое Занятие",
		price: 1200,
	},
	{
		id: 3,
		filter: "Все включено",
		status: "Абонемент",
		picture: SubPicture3,
		description: "«MINI» 4 Занятия",
		price: 4800,
	},
	{
		id: 4,
		filter: "Все включено",
		status: "Абонемент",
		picture: SubPicture4,
		description: "«MEDIUM» 8 Занятий",
		price: 7800,
	},
	{
		id: 5,
		filter: "Все включено",
		status: "Абонемент",
		picture: SubPicture5,
		description: "«MEDIUM+» 12 Занятий",
		price: 11400,
	},
	{
		id: 6,
		filter: "Все включено",
		status: "Абонемент",
		picture: SubPicture6,
		description: "«MAXI» 24 Занятия",
		price: 16500,
	},
];

const Options: React.FC = () => {
	const [activeFilter, setActiveFilter] = useState<string | null>(null);

	const filteredItems = activeFilter
		? itemsSubscription.filter((item) => item.filter === activeFilter)
		: itemsSubscription;

	return (
		<div className={styles.optionsContainer}>
			<div className={styles.title}>
				<h2>Варианты занятий</h2>
				<p>
					Наша система обучения подходит для людей с любым уровнем подготовки.
					Все абонементы действительны 1 месяц с момента активации (явки или
					прогула по абонементу). Все цены указаны в российских рублях.
				</p>
			</div>
			<div className={styles.options}>
				<div className={styles.filter}>
					{subscriptionOptions.map(
						(option: SubscriptionOption, index: number) => {
							const filterType = option.title.includes("ВСЕ ВКЛЮЧЕНО")
								? "Все включено"
								: "Без пилона";
							return (
								<div
									key={index}
									className={styles.subscription}
									onClick={() => setActiveFilter(filterType)}
								>
									<h3
										className={
											activeFilter === filterType
												? styles.activeTitle
												: styles.inactiveTitle
										}
									>
										{option.title}
									</h3>
									<p>{option.description}</p>
								</div>
							);
						}
					)}
				</div>
				<div className={styles.items}>
					{filteredItems.map((item: ItemsSubscription) => (
						<div key={item.id} className={styles.item}>
							<div className={styles.picture}>
								<span>{item.status}</span>
								<img src={item.picture} alt={item.description} />
							</div>
							<div className={styles.description}>
								<h4>{item.description}</h4>
								<p>{item.price} &#8381;</p>
								<button>
									Купить <ArrowIcon strokeColor="white" />
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Options;
