import { docsComponentsNav, docsFigmaNav, docsIntroNav } from "./documentation";

export async function GET(request: Request) {
	const docsNav = [...docsIntroNav, ...docsFigmaNav, ...docsComponentsNav];
	return Response.json(docsNav);
}
