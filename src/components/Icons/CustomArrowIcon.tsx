import React from "react";

type CustomArrowIconProps = {
	width?: number;
	height?: number;
	strokeColor?: string;
	direction?: "right" | "left";
};

const CustomArrowIcon: React.FC<CustomArrowIconProps> = ({
	width = 86,
	height = 85,
	strokeColor = "black",
	direction = "right",
}) => {
	const transform = direction === "left" ? "rotate(180, 43, 42.5)" : "";

	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 86 85"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g transform={transform}>
				<path
					d="M25.8378 42.5735H58.9835"
					stroke={strokeColor}
					strokeWidth="3"
					strokeLinecap="square"
					strokeLinejoin="round"
				/>
				<path
					d="M43.0737 24.896L60.7514 42.5737L43.0737 60.2513"
					stroke={strokeColor}
					strokeWidth="3"
					strokeLinecap="square"
					strokeLinejoin="round"
				/>
			</g>
		</svg>
	);
};

export default CustomArrowIcon;
