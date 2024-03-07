export interface Breakpoints<TNumber = number> {
	xs: TNumber;
	sm: TNumber;
	md: TNumber;
	lg: TNumber;
	xl: TNumber;
	xxl: TNumber;
	xxxl: TNumber;
}

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

export interface Spacing<TString = string> {
	maxWidth: { xs: TString; lg: TString };
	padding: { xs: TString; lg: TString };
	gridGap: { xs: TString; lg: TString };
}

export const spacing: Spacing = {
	maxWidth: { xs: "1280px", lg: "1440px" },
	padding: { xs: "20px", lg: "40px" },
	gridGap: { xs: "20px", lg: "40px" },
};

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

	dark: TString;
	light: TString;

	grayLight: TString;
	gray: TString;
	grayDark: TString;

	success: TString;
	error: TString;
	warning: TString;
	info: TString;
}

export const colors: Colors = {
	primaryLight: "#fda4af",
	primary: "#f43f5e",
	primaryDark: "#9f1239",

	secondaryLight: "#7dd3fc",
	secondary: "#0ea5e9",
	secondaryDark: "#075985",

	tertiaryLight: "#d8b4fe",
	tertiary: "#a855f7",
	tertiaryDark: "#6b21a8",

	dark: "#000000",
	light: "#ffffff",

	grayLight: "#e5e7eb",
	gray: "#9ca3af",
	grayDark: "#4b5563",

	success: "#28a745",
	error: "#dc3545",
	warning: "#ffc107",
	info: "#17a2b8",
};

export interface Fonts<TString = string> {
	text: TString;
	head: TString;
	special: TString;
	mono: TString;
}

export const fonts: Fonts = {
	text: "Inter",
	head: "Inter",
	special: "Inter",
	mono: "monospace",
};

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

	eyebrow: { xs: TString; lg: TString };
	subtitle: { xs: TString; lg: TString };
	lead: { xs: TString; lg: TString };

	button: { xs: TString; lg: TString };
	buttonBig: { xs: TString; lg: TString };

	input: { xs: TString; lg: TString };
	inputBig: { xs: TString; lg: TString };

	text: { xs: TString; lg: TString };
	strong: { xs: TString; lg: TString };
	small: { xs: TString; lg: TString };

	blockquote: { xs: TString; lg: TString };
	code: { xs: TString; lg: TString };
}

export const fontSizes: FontSizes = {
	hero1: { xs: "52px", lg: "62px" },
	hero2: { xs: "42px", lg: "52px" },
	hero3: { xs: "32px", lg: "42px" },

	h1: { xs: "30px", lg: "40px" },
	h2: { xs: "22px", lg: "32px" },
	h3: { xs: "18px", lg: "28px" },
	h4: { xs: "16px", lg: "24px" },
	h5: { xs: "14px", lg: "20px" },
	h6: { xs: "12px", lg: "18px" },

	eyebrow: { xs: "16px", lg: "18px" },
	subtitle: { xs: "18px", lg: "20px" },
	lead: { xs: "16px", lg: "18px" },

	button: { xs: "16px", lg: "16px" },
	buttonBig: { xs: "18px", lg: "18px" },

	input: { xs: "16px", lg: "16px" },
	inputBig: { xs: "18px", lg: "18px" },

	text: { xs: "14px", lg: "16px" },
	strong: { xs: "14px", lg: "16px" },
	small: { xs: "12px", lg: "14px" },

	blockquote: { xs: "14px", lg: "18px" },
	code: { xs: "14px", lg: "18px" },
};

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

	eyebrow: { xs: TString; lg: TString };
	subtitle: { xs: TString; lg: TString };
	lead: { xs: TString; lg: TString };

	button: { xs: TString; lg: TString };
	buttonBig: { xs: TString; lg: TString };

	input: { xs: TString; lg: TString };
	inputBig: { xs: TString; lg: TString };

	text: { xs: TString; lg: TString };
	strong: { xs: TString; lg: TString };
	small: { xs: TString; lg: TString };

	blockquote: { xs: TString; lg: TString };
	code: { xs: TString; lg: TString };
}

export const lineHeights: LineHeights = {
	hero1: { xs: "1.15", lg: "1.15" },
	hero2: { xs: "1.15", lg: "1.15" },
	hero3: { xs: "1.15", lg: "1.15" },

	h1: { xs: "1.20", lg: "1.20" },
	h2: { xs: "1.20", lg: "1.20" },
	h3: { xs: "1.20", lg: "1.20" },
	h4: { xs: "1.30", lg: "1.30" },
	h5: { xs: "1.40", lg: "1.40" },
	h6: { xs: "1.40", lg: "1.40" },

	eyebrow: { xs: "1.35", lg: "1.35" },
	subtitle: { xs: "1.35", lg: "1.35" },
	lead: { xs: "1.35", lg: "1.35" },

	button: { xs: "1", lg: "1" },
	buttonBig: { xs: "1", lg: "1" },

	input: { xs: "1", lg: "1" },
	inputBig: { xs: "1", lg: "1" },

	text: { xs: "1.50", lg: "1.50" },
	strong: { xs: "1.50", lg: "1.50" },
	small: { xs: "1.30", lg: "1.30" },

	blockquote: { xs: "1.50", lg: "1.50" },
	code: { xs: "1.50", lg: "1.50" },
};

export interface Theme {
	breakpoints: Breakpoints;
	spacing: Spacing;
	colors: Colors;
	fonts: Fonts;
	fontSizes: FontSizes;
	lineHeights: LineHeights;
}

export const theme: Theme = {
	breakpoints,
	spacing,
	colors,
	fonts,
	fontSizes,
	lineHeights,
};
