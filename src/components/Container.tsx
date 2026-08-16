import type { ReactNode } from "react";

interface ContainerProps {
	children: ReactNode;
	className?: string;
}

export function Container({ children, className = "" }: ContainerProps) {
	return (
		<div
			className={`mx-auto max-w-7xl bg-neutral-800 text-stone-100 px-4 sm:px-6 lg:px-8 ${className}`}
		>
			{children}
		</div>
	);
}
