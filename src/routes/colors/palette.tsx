import { createFileRoute } from "@tanstack/react-router";
import { Container } from "../../components/Container";

export const Route = createFileRoute("/colors/palette")({
	component: RouteComponent,
});

function RouteComponent() {
	return <Container>Hello "/colors/palette"!</Container>;
}
