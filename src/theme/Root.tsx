import type { Props } from "@theme/Root";
import { Analytics } from "@vercel/analytics/react";

export default function Root({ children }: Props) {
	return (
		<>
			<Analytics />
			{children}
		</>
	);
}
