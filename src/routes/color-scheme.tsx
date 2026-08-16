import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Container } from "../components/Container";
import { themes } from "../themes";
export const Route = createFileRoute("/color-scheme")({
	component: RouteComponent,
});

function RouteComponent() {
	const [index, setIndex] = useState(0);
	const theme = themes[index];

	return (
		<Container className="py-12">
			<div className="flex gap-2 mb-8">
				{themes.map((t, i) => (
					<button
						key={t.name}
						type="button"
						onClick={() => setIndex(i)}
						className={`cursor-pointer rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${
							i === index
								? "bg-slate-900 text-white"
								: "border-transparent bg-slate-200 text-slate-700 hover:border-sky-400 hover:bg-slate-300"
						}`}
					>
						{t.name}
					</button>
				))}
			</div>

			<div
				className={`max-w-md rounded-2xl p-6 shadow-lg transition-colors ${theme.card}`}
			>
				<div
					className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${theme.badge}`}
				>
					{theme.name} theme
				</div>
				<h2 className="mt-4 text-2xl font-bold">Card Title</h2>
				<p className="mt-2 text-sm opacity-80">
					Sample card content to preview each color scheme. Background and text
					colors update as you switch themes.
				</p>
				<button
					type="button"
					className={`mt-6 rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${theme.accent}`}
				>
					Action
				</button>
			</div>

			<div className="mt-10 max-w-md">
				<h3 className="mb-4 text-sm font-semibold text-stone-100">
					Colors used in "{theme.name}"
				</h3>
				<div className="overflow-hidden rounded-2xl border border-stone-700 bg-neutral-900">
					{theme.colors.map((color) => (
						<div
							key={color.label}
							className="flex items-center justify-between border-b border-stone-700 px-4 py-3 last:border-b-0"
						>
							<span className="text-sm text-stone-300">{color.label}</span>
							<div
								className={`h-8 w-8 rounded-md border border-white/10 ${color.bg}`}
							/>
						</div>
					))}
				</div>
			</div>
		</Container>
	);
}
