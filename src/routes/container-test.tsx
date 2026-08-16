import { createFileRoute } from "@tanstack/react-router";
import { Container } from "../components/Container";

export const Route = createFileRoute("/container-test")({
	component: RouteComponent,
});

function RouteComponent() {
	return <Container className="">Hello "/container-test"!</Container>;
}
