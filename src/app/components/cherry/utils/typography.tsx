import styled from "styled-components";
import { Theme, mq } from "@/app/theme";

const StyledHero1 = styled.h1<{ theme: Theme }>`
	font-size: ${({ theme }) => theme.fontSizes.hero1.xs};
	line-height: ${({ theme }) => theme.lineHeight.hero1.xs};

	${mq("lg")} {
		font-size: ${({ theme }) => theme.fontSizes.hero1.lg};
		line-height: ${({ theme }) => theme.lineHeight.hero1.lg};
	}
`;

const StyledHero2 = styled.h1<{ theme: Theme }>`
	font-size: ${({ theme }) => theme.fontSizes.hero2.xs};
	line-height: ${({ theme }) => theme.lineHeight.hero2.xs};

	${mq("lg")} {
		font-size: ${({ theme }) => theme.fontSizes.hero2.lg};
		line-height: ${({ theme }) => theme.lineHeight.hero2.lg};
	}
`;

const StyledHero3 = styled.h1<{ theme: Theme }>`
	font-size: ${({ theme }) => theme.fontSizes.hero3.xs};
	line-height: ${({ theme }) => theme.lineHeight.hero3.xs};

	${mq("lg")} {
		font-size: ${({ theme }) => theme.fontSizes.hero3.lg};
		line-height: ${({ theme }) => theme.lineHeight.hero3.lg};
	}
`;

const StyledH1 = styled.h1<{ theme: Theme }>`
	font-size: ${({ theme }) => theme.fontSizes.h1.xs};
	line-height: ${({ theme }) => theme.lineHeight.h1.xs};

	${mq("lg")} {
		font-size: ${({ theme }) => theme.fontSizes.h1.lg};
		line-height: ${({ theme }) => theme.lineHeight.h1.lg};
	}
`;

const StyledH2 = styled.h2<{ theme: Theme }>`
	font-size: ${({ theme }) => theme.fontSizes.h2.xs};
	line-height: ${({ theme }) => theme.lineHeight.h2.xs};

	${mq("lg")} {
		font-size: ${({ theme }) => theme.fontSizes.h2.lg};
		line-height: ${({ theme }) => theme.lineHeight.h2.lg};
	}
`;

const StyledH3 = styled.h3<{ theme: Theme }>`
	font-size: ${({ theme }) => theme.fontSizes.h3.xs};
	line-height: ${({ theme }) => theme.lineHeight.h3.xs};

	${mq("lg")} {
		font-size: ${({ theme }) => theme.fontSizes.h3.lg};
		line-height: ${({ theme }) => theme.lineHeight.h3.lg};
	}
`;

const StyledH4 = styled.h4<{ theme: Theme }>`
	font-size: ${({ theme }) => theme.fontSizes.h4.xs};
	line-height: ${({ theme }) => theme.lineHeight.h4.xs};

	${mq("lg")} {
		font-size: ${({ theme }) => theme.fontSizes.h4.lg};
		line-height: ${({ theme }) => theme.lineHeight.h4.lg};
	}
`;

const StyledH5 = styled.h5<{ theme: Theme }>`
	font-size: ${({ theme }) => theme.fontSizes.h5.xs};
	line-height: ${({ theme }) => theme.lineHeight.h5.xs};

	${mq("lg")} {
		font-size: ${({ theme }) => theme.fontSizes.h5.lg};
		line-height: ${({ theme }) => theme.lineHeight.h5.lg};
	}
`;

const StyledH6 = styled.h6<{ theme: Theme }>`
	font-size: ${({ theme }) => theme.fontSizes.h6.xs};
	line-height: ${({ theme }) => theme.lineHeight.h6.xs};

	${mq("lg")} {
		font-size: ${({ theme }) => theme.fontSizes.h6.lg};
		line-height: ${({ theme }) => theme.lineHeight.h6.lg};
	}
`;

const StyledText = styled.p<{ theme: Theme }>`
	font-size: ${({ theme }) => theme.fontSizes.text.xs};
	line-height: ${({ theme }) => theme.lineHeight.text.xs};

	${mq("lg")} {
		font-size: ${({ theme }) => theme.fontSizes.text.lg};
		line-height: ${({ theme }) => theme.lineHeight.text.lg};
	}
`;

const StyledStrong = styled.p<{ theme: Theme }>`
	font-size: ${({ theme }) => theme.fontSizes.strong.xs};
	line-height: ${({ theme }) => theme.lineHeight.strong.xs};

	${mq("lg")} {
		font-size: ${({ theme }) => theme.fontSizes.strong.lg};
		line-height: ${({ theme }) => theme.lineHeight.strong.lg};
	}
`;

const StyledSmall = styled.p<{ theme: Theme }>`
	font-size: ${({ theme }) => theme.fontSizes.small.xs};
	line-height: ${({ theme }) => theme.lineHeight.small.xs};

	${mq("lg")} {
		font-size: ${({ theme }) => theme.fontSizes.small.lg};
		line-height: ${({ theme }) => theme.lineHeight.small.lg};
	}
`;

const StyledBlockquote = styled.p<{ theme: Theme }>`
	font-size: ${({ theme }) => theme.fontSizes.blockquote.xs};
	line-height: ${({ theme }) => theme.lineHeight.blockquote.xs};

	${mq("lg")} {
		font-size: ${({ theme }) => theme.fontSizes.blockquote.lg};
		line-height: ${({ theme }) => theme.lineHeight.blockquote.lg};
	}
`;

const StyledCode = styled.p<{ theme: Theme }>`
	font-size: ${({ theme }) => theme.fontSizes.code.xs};
	line-height: ${({ theme }) => theme.lineHeight.code.xs};

	${mq("lg")} {
		font-size: ${({ theme }) => theme.fontSizes.code.lg};
		line-height: ${({ theme }) => theme.lineHeight.code.lg};
	}
`;

const StyledButton = styled.p<{ theme: Theme }>`
	font-size: ${({ theme }) => theme.fontSizes.button.xs};
	line-height: ${({ theme }) => theme.lineHeight.button.xs};

	${mq("lg")} {
		font-size: ${({ theme }) => theme.fontSizes.button.lg};
		line-height: ${({ theme }) => theme.lineHeight.button.lg};
	}
`;

const StyledButtonBig = styled.p<{ theme: Theme }>`
	font-size: ${({ theme }) => theme.fontSizes.buttonBig.xs};
	line-height: ${({ theme }) => theme.lineHeight.buttonBig.xs};

	${mq("lg")} {
		font-size: ${({ theme }) => theme.fontSizes.buttonBig.lg};
		line-height: ${({ theme }) => theme.lineHeight.buttonBig.lg};
	}
`;

const StyledInput = styled.p<{ theme: Theme }>`
	font-size: ${({ theme }) => theme.fontSizes.input.xs};
	line-height: ${({ theme }) => theme.lineHeight.input.xs};

	${mq("lg")} {
		font-size: ${({ theme }) => theme.fontSizes.input.lg};
		line-height: ${({ theme }) => theme.lineHeight.input.lg};
	}
`;

const StyledInputBig = styled.p<{ theme: Theme }>`
	font-size: ${({ theme }) => theme.fontSizes.inputBig.xs};
	line-height: ${({ theme }) => theme.lineHeight.inputBig.xs};

	${mq("lg")} {
		font-size: ${({ theme }) => theme.fontSizes.inputBig.lg};
		line-height: ${({ theme }) => theme.lineHeight.inputBig.lg};
	}
`;

export {
	StyledHero1,
	StyledHero2,
	StyledHero3,
	StyledH1,
	StyledH2,
	StyledH3,
	StyledH4,
	StyledH5,
	StyledH6,
	StyledText,
	StyledStrong,
	StyledSmall,
	StyledBlockquote,
	StyledCode,
	StyledButton,
	StyledButtonBig,
	StyledInput,
	StyledInputBig,
};
