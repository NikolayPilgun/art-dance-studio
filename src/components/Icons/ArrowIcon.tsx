import React from "react";

type ArrowIconProps = {
	width?: number;
	height?: number;
	strokeColor?: string;
};

const ArrowIcon: React.FC<ArrowIconProps> = ({
	width = 23,
	height = 22,
	strokeColor = "black",
}) => (
	<svg
		width={width}
		height={height}
		viewBox="0 0 23 22"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M5.65625 17.3438L17.375 5.625"
			stroke={strokeColor}
			strokeWidth="1.2"
			strokeLinecap="square"
			strokeLinejoin="round"
		/>
		<path
			d="M5.5 5H18V17.5"
			stroke={strokeColor}
			strokeWidth="1.2"
			strokeLinecap="square"
			strokeLinejoin="round"
		/>
	</svg>
);

export default ArrowIcon;
