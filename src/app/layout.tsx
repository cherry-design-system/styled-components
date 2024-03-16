import { Inter } from "next/font/google";
import {
	StyledComponentsRegistry,
	CherryThemeProvider,
} from "@/app/components";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: any) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<StyledComponentsRegistry>
					<CherryThemeProvider>{children}</CherryThemeProvider>
				</StyledComponentsRegistry>
			</body>
		</html>
	);
}
