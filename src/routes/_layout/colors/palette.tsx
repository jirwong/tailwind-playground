import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/colors/palette")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/color-palette"!</div>;
}
