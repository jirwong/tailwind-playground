import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import { Container } from "../components/Container";

export const Route = createFileRoute("/_layout")({
	component: LayoutComponent,
});

const navItems = [
	{ to: "/", label: "Home" },
	{ to: "/color-scheme", label: "Color Scheme" },
	{ to: "/colors/palette", label: "Color Palette" },
];

function LayoutComponent() {
	return (
		<Container
			className="mt-6"
			header={
				<div className="flex items-center gap-3">
					<div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-violet-500 font-bold text-white shadow-lg shadow-sky-500/20">
						T
					</div>
					<h1 className="text-xl font-bold">Tailwind Playground</h1>
				</div>
			}
		>
			<div className="flex gap-8 py-12">
				<aside className="w-48 shrink-0">
					<nav className="sticky top-8 flex flex-col gap-1">
						{navItems.map((item) => (
							<Link
								key={item.to}
								to={item.to}
								className="rounded-lg px-3 py-2 text-sm text-stone-400 transition-colors hover:bg-white/10 hover:text-stone-100"
								activeProps={{
									className:
										"rounded-lg px-3 py-2 text-sm font-medium bg-white/10 text-stone-100 ring-1 ring-white/10",
								}}
							>
								{item.label}
							</Link>
						))}
					</nav>
				</aside>
				<main className="flex-1">
					<Outlet />
				</main>
			</div>
		</Container>
	);
}
