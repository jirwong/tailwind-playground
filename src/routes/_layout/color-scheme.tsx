import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ThemeCard } from "../../components/ThemeCard";
import { themes } from "../../themes";
export const Route = createFileRoute("/_layout/color-scheme")({
	component: RouteComponent,
});

function RouteComponent() {
	const [index, setIndex] = useState(0);
	const theme = themes[index];

	return (
		<>
			<h1 className="mb-6 text-2xl font-bold">Color Scheme - Card</h1>
			<div className="flex flex-wrap gap-2 mb-8">
				{themes.map((t, i) => (
					<button
						key={t.name}
						type="button"
						onClick={() => setIndex(i)}
						className={`cursor-pointer rounded-lg px-4 py-2 text-sm font-medium transition-all ${
							i === index
								? "bg-white text-slate-900 shadow-lg"
								: "bg-white/5 text-stone-300 ring-1 ring-white/10 hover:bg-white/10 hover:text-white"
						}`}
					>
						{t.name}
					</button>
				))}
			</div>

			<ThemeCard theme={theme} />

			<div className="mt-10 max-w-md">
				<h3 className="mb-4 text-sm font-semibold text-stone-300">
					Colors used in "{theme.name}"
				</h3>
				<div className="overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10">
					{theme.colors.map((color) => (
						<div
							key={color.label}
							className="flex items-center justify-between border-b border-white/10 px-4 py-3 last:border-b-0"
						>
							<span className="text-sm text-stone-400">{color.label}</span>
							<div
								className={`h-8 w-8 rounded-md shadow-inner ring-1 ring-white/10 ${color.bg}`}
							/>
						</div>
					))}
				</div>
			</div>
		</>
	);
}
