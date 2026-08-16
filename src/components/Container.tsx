import type { ReactNode } from "react";

interface ContainerProps {
	children: ReactNode;
	className?: string;
	header?: ReactNode;
}

export function Container({
	children,
	className = "",
	header,
}: ContainerProps) {
	return (
		<div
			className={`mx-auto max-w-7xl overflow-hidden rounded-3xl bg-white/5 text-stone-100 ring-1 ring-white/10 backdrop-blur px-4 sm:px-6 lg:px-8 ${className}`}
		>
			{header ? (
				<header className="border-b border-white/10 py-4">{header}</header>
			) : null}
			{children}
		</div>
	);
}
