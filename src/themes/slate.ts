import type { Theme } from "./types";

export const slate: Theme = {
	name: "Slate",
	card: "bg-slate-200 text-slate-900",
	badge: "bg-slate-500 text-white",
	accent: "bg-slate-700 text-white",
	colors: [
		{ label: "Card bg", bg: "bg-slate-200", text: "text-slate-900" },
		{ label: "Card text", bg: "bg-slate-900", text: "text-white" },
		{ label: "Badge bg", bg: "bg-slate-500", text: "text-white" },
		{ label: "Badge text", bg: "bg-white", text: "text-slate-900" },
		{ label: "Accent bg", bg: "bg-slate-700", text: "text-white" },
	],
};
