import { createGlobalStyle } from "styled-components";
import { Theme } from "@/app/theme";

export const GlobalStyles = createGlobalStyle`
html,
body {
	margin: 0;
	padding: 0;
	min-height: 100%;
	scroll-behavior: smooth;
}

body {
	-moz-osx-font-smoothing: grayscale;
	-webkit-text-size-adjust: 100%;
	-webkit-font-smoothing: antialiased;
}

* {
	box-sizing: border-box;
}

pre,
code,
kbd,
samp {
	font-family: monospace, monospace;
}

blockquote,
p,
a,
h1,
h2,
h3,
h4,
h5,
h6 {
	margin: 0;
	padding: 0;
}

ol,
ul {
	list-style: none;
	margin: 0;
	padding: 0;
}

figure {
	margin: 0;
}

fieldset {
	appearance: none;
	border: none;
}

button,
input,
a,
img,
svg {
	transition: all 0.3s ease;
}

strong,
b {
	font-weight: 700;
}`;

export const resetButton = `
	appearance: none;
	border: none;
	background: none;
	padding: 0;
	margin: 0;
	cursor: pointer;
	outline: none;
`;

export const resetInput = `
	cursor: text;
`;

export const fullWidthStyles = (fullWidth: boolean) => {
	if (fullWidth) {
		return `
			width: 100%;
		`;
	}
};

export const statusBorderStyles = (
	$error: boolean,
	$success: boolean,
	theme: Theme,
) => {
	if ($error) {
		return `
			border-color: ${theme?.colors.error};
		`;
	}

	if ($success) {
		return `
			border-color: ${theme?.colors.success};
		`;
	}
};

export const formElementHeightStyles = ($size?: "default" | "big") => {
	if ($size === "big") {
		return `
			height: 60px;
		`;
	}

	return `
		height: 50px;
	`;
};
