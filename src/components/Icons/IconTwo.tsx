import React from "react";

type IconProps = {
	width?: number;
	height?: number;
	fillColor?: string;
};

const IconTwo: React.FC<IconProps> = ({
	width = 26,
	height = 22,
	fillColor = "white",
}) => (
	<svg
		width={width}
		height={height}
		viewBox="0 0 26 22"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M25.2943 0.77935L21.4049 21.0841C21.4049 21.0841 20.8607 22.4919 19.3658 21.8167L10.392 14.6916L10.3504 14.6706C11.5625 13.5435 20.9621 4.79168 21.3729 4.39498C22.0089 3.78059 21.6141 3.41483 20.8757 3.87894L6.99131 13.0097L1.63476 11.1433C1.63476 11.1433 0.791799 10.8328 0.710704 10.1577C0.628542 9.48139 1.66251 9.11563 1.66251 9.11563L23.4995 0.24452C23.4995 0.24452 25.2943 -0.572091 25.2943 0.77935Z"
			fill={fillColor}
		/>
	</svg>
);

export default IconTwo;
