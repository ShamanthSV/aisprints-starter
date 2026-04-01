"use client";

import { AppAuthenticatedShell } from "@/components/auth/app-authenticated-shell";
import HomePage from "./(app)/page";

export default function RootPage() {
	return (
		<AppAuthenticatedShell>
			<HomePage />
		</AppAuthenticatedShell>
	);
}

