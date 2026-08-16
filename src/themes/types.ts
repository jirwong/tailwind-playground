export interface ThemeColor {
	label: string;
	bg: string;
	text: string;
}

export interface Theme {
	name: string;
	card: string;
	badge: string;
	accent: string;
	colors: ThemeColor[];
}
