export const breakpoints: Breakpoints = {
	xs: 0,
	sm: 576,
	md: 768,
	lg: 992,
	xl: 1200,
	xxl: 1440,
	xxxl: 1920,
};

export function mq(minWidth: keyof Breakpoints) {
	return `@media screen and (min-width: ${breakpoints[minWidth]}px)`;
}

export const spacing: Spacing = {
	maxWidth: { xs: "1280px", xxxl: "1440px" },
	padding: { xs: "20px", lg: "40px" },
	radius: { xs: "6px", lg: "12px", xl: "30px" },
	gridGap: { xs: "20px", lg: "40px" },
};

export const colors: Colors = {
	primaryLight: "#91AEC4",
	primary: "#4D6F8B",
	primaryDark: "#194569",

	secondaryLight: "#A4B17B",
	secondary: "#5C6E46",
	secondaryDark: "#354C2B",

	tertiaryLight: "#EBCCB9",
	tertiary: "#816B5A",
	tertiaryDark: "#675445",

	grayLight: "#E5E7EB",
	gray: "#9CA3AF",
	grayDark: "#4B5563",

	success: "#84CC16",
	error: "#EF4444",
	warning: "#EAB308",
	info: "#06B6D4",

	dark: "#000000",
	light: "#FFFFFF",
};

export const shadows: Shadows = {
	xs: "0px 4px 4px 0px rgba(18, 18, 18, 0.04), 0px 1px 3px 0px rgba(39, 41, 45, 0.02)",
	sm: "0px 4px 4px 0px rgba(18, 18, 18, 0.08), 0px 1px 3px 0px rgba(39, 41, 45, 0.04)",
	md: "0px 8px 8px 0px rgba(18, 18, 18, 0.16), 0px 2px 3px 0px rgba(39, 41, 45, 0.06)",
	lg: "0px 16px 24px 0px rgba(18, 18, 18, 0.20), 0px 2px 3px 0px rgba(39, 41, 45, 0.08)",
	xl: "0px 24px 32px 0px rgba(18, 18, 18, 0.24), 0px 2px 3px 0px rgba(39, 41, 45, 0.12)",
};

export const fonts: Fonts = {
	text: "Inter",
	head: "Inter",
	special: "Inter",
	mono: "monospace",
};

export const fontSizes: FontSizes = {
	hero1: { xs: "72px", lg: "128px" },
	hero2: { xs: "60px", lg: "96px" },
	hero3: { xs: "36px", lg: "72px" },

	h1: { xs: "40px", lg: "60px" },
	h2: { xs: "30px", lg: "36px" },
	h3: { xs: "28px", lg: "30px" },
	h4: { xs: "26px", lg: "24px" },
	h5: { xs: "18px", lg: "20px" },
	h6: { xs: "16px", lg: "18px" },

	text: { xs: "14px", lg: "16px" },
	strong: { xs: "14px", lg: "16px" },
	small: { xs: "12px", lg: "14px" },

	blockquote: { xs: "14px", lg: "18px" },
	code: { xs: "14px", lg: "18px" },

	button: { xs: "16px", lg: "16px" },
	buttonBig: { xs: "18px", lg: "18px" },

	input: { xs: "16px", lg: "16px" },
	inputBig: { xs: "18px", lg: "18px" },
};

export const lineHeights: LineHeights = {
	hero1: { xs: "1.1", lg: "1.1" },
	hero2: { xs: "1.1", lg: "1.2" },
	hero3: { xs: "1.2", lg: "1.1" },

	h1: { xs: "1.5", lg: "1.4" },
	h2: { xs: "1.5", lg: "1.5" },
	h3: { xs: "1.3", lg: "1.5" },
	h4: { xs: "1.3", lg: "1.5" },
	h5: { xs: "1.6", lg: "1.5" },
	h6: { xs: "1.6", lg: "1.6" },

	text: { xs: "1.7", lg: "1.7" },
	strong: { xs: "1.7", lg: "1.7" },
	small: { xs: "1.7", lg: "1.7" },

	blockquote: { xs: "1.7", lg: "1.7" },
	code: { xs: "1.7", lg: "1.7" },

	button: { xs: "1", lg: "1" },
	buttonBig: { xs: "1", lg: "1" },

	input: { xs: "1", lg: "1" },
	inputBig: { xs: "1", lg: "1" },
};

export const theme: Theme = {
	breakpoints,
	spacing,
	colors,
	shadows,
	fonts,
	fontSizes,
	lineHeights,
};

export interface Breakpoints<TNumber = number> {
	xs: TNumber;
	sm: TNumber;
	md: TNumber;
	lg: TNumber;
	xl: TNumber;
	xxl: TNumber;
	xxxl: TNumber;
}

export interface Spacing<TString = string> {
	maxWidth: { xs: TString; xxxl: TString };
	padding: { xs: TString; lg: TString };
	radius: { xs: TString; lg: TString; xl: TString };
	gridGap: { xs: TString; lg: TString };
}

export interface Colors<TString = string> {
	primaryLight: TString;
	primary: TString;
	primaryDark: TString;

	secondaryLight: TString;
	secondary: TString;
	secondaryDark: TString;

	tertiaryLight: TString;
	tertiary: TString;
	tertiaryDark: TString;

	grayLight: TString;
	gray: TString;
	grayDark: TString;

	success: TString;
	error: TString;
	warning: TString;
	info: TString;

	dark: TString;
	light: TString;
}

interface Shadows<TString = string> {
	xs: TString;
	sm: TString;
	md: TString;
	lg: TString;
	xl: TString;
}

export interface Fonts<TString = string> {
	text: TString;
	head: TString;
	special: TString;
	mono: TString;
}

export interface FontSizes<TString = string> {
	hero1: { xs: TString; lg: TString };
	hero2: { xs: TString; lg: TString };
	hero3: { xs: TString; lg: TString };

	h1: { xs: TString; lg: TString };
	h2: { xs: TString; lg: TString };
	h3: { xs: TString; lg: TString };
	h4: { xs: TString; lg: TString };
	h5: { xs: TString; lg: TString };
	h6: { xs: TString; lg: TString };

	text: { xs: TString; lg: TString };
	strong: { xs: TString; lg: TString };
	small: { xs: TString; lg: TString };

	blockquote: { xs: TString; lg: TString };
	code: { xs: TString; lg: TString };

	button: { xs: TString; lg: TString };
	buttonBig: { xs: TString; lg: TString };

	input: { xs: TString; lg: TString };
	inputBig: { xs: TString; lg: TString };
}

export interface LineHeights<TString = string> {
	hero1: { xs: TString; lg: TString };
	hero2: { xs: TString; lg: TString };
	hero3: { xs: TString; lg: TString };

	h1: { xs: TString; lg: TString };
	h2: { xs: TString; lg: TString };
	h3: { xs: TString; lg: TString };
	h4: { xs: TString; lg: TString };
	h5: { xs: TString; lg: TString };
	h6: { xs: TString; lg: TString };

	text: { xs: TString; lg: TString };
	strong: { xs: TString; lg: TString };
	small: { xs: TString; lg: TString };

	blockquote: { xs: TString; lg: TString };
	code: { xs: TString; lg: TString };

	button: { xs: TString; lg: TString };
	buttonBig: { xs: TString; lg: TString };

	input: { xs: TString; lg: TString };
	inputBig: { xs: TString; lg: TString };
}

export interface Theme {
	breakpoints: Breakpoints;
	spacing: Spacing;
	colors: Colors;
	shadows: Shadows;
	fonts: Fonts;
	fontSizes: FontSizes;
	lineHeights: LineHeights;
}
