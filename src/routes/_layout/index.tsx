import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/")({ component: Home });

function Home() {
	return (
		<div className="p-8">
			<h1 className="bg-gradient-to-r from-sky-400 to-violet-500 bg-clip-text text-4xl font-bold text-transparent">
				Welcome to TanStack Start
			</h1>
			<p className="mt-4 text-lg text-stone-400">
				Edit <code>src/routes/_layout/index.tsx</code> to get started.
			</p>
		</div>
	);
}
