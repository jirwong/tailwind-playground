import type { Theme } from "../themes";

export function ThemeCard({ theme }: { theme: Theme }) {
	return (
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
	);
}
