import React from "react";

type IconProps = {
	width?: number;
	height?: number;
	fillColor?: string;
};

const IconThree: React.FC<IconProps> = ({
	width = 30,
	height = 18,
	fillColor = "white",
}) => (
	<svg
		width={width}
		height={height}
		viewBox="0 0 30 18"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M16.263 18C6.59888 18 1.08661 11.2432 0.856934 0L5.69784 0C5.85684 8.25225 9.42569 11.7477 12.2525 12.4685L12.2525 0L16.8107 0V7.11712C19.6022 6.81081 22.535 3.56757 23.5244 0L28.0826 0C27.7098 1.85024 26.9666 3.60213 25.8996 5.14607C24.8325 6.69002 23.4646 7.99282 21.8813 8.97297C23.6486 9.86857 25.2096 11.1362 26.4613 12.6922C27.713 14.2483 28.6269 16.0573 29.1427 18H24.1251C23.6621 16.3126 22.721 14.8022 21.4199 13.6579C20.1187 12.5137 18.5154 11.7865 16.8107 11.5676V18H16.263Z"
			fill={fillColor}
		/>
	</svg>
);

export default IconThree;
