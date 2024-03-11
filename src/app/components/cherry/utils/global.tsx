import { createGlobalStyle } from "styled-components";

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
	min-width: 0;
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
