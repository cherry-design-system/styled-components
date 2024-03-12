import { Code } from "@/app/components/code";

export function useMDXComponents(components: any) {
	return {
		code: ({ children }: any) => <Code>{children}</Code>,
		...components,
	};
}
