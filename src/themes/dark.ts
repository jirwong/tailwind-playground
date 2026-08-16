import type { Theme } from "./types";

export const dark: Theme = {
	name: "Dark",
	card: "bg-slate-900 text-slate-100",
	badge: "bg-slate-700 text-slate-300",
	accent: "bg-white text-slate-900",
	colors: [
		{ label: "Card bg", bg: "bg-slate-900", text: "text-white" },
		{ label: "Card text", bg: "bg-slate-100", text: "text-slate-900" },
		{ label: "Badge bg", bg: "bg-slate-700", text: "text-white" },
		{ label: "Badge text", bg: "bg-slate-300", text: "text-slate-900" },
		{ label: "Accent bg", bg: "bg-white", text: "text-slate-900" },
	],
};
