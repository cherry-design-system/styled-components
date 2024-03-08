import React from "react";

function IconCheck(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			width="12"
			height="10"
			viewBox="0 0 12 10"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M10 2L4.4 8L2 5.75"
				stroke="#0EA5E9"
				strokeWidth="3"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

function IconArrow(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			width="16"
			height="10"
			viewBox="0 0 16 10"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M2 2L8 8L14 2"
				stroke="#0EA5E9"
				strokeWidth="3"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

export { IconCheck, IconArrow };
