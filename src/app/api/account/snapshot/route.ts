import { NextRequest, NextResponse } from "next/server";
import { getDailyAccountSnapshot } from "@/lib/wallet/account";

export async function GET(req: NextRequest) {
	const { type, startTime, endTime, limit } = Object.fromEntries(req.nextUrl.searchParams);

	if (!type) {
		return NextResponse.json({ error: 'Type is required (SPOT, MARGIN, FUTURES)' }, { status: 400 });
	}

	try {
		const snapshot = await getDailyAccountSnapshot({
			type: type as 'SPOT' | 'MARGIN' | 'FUTURES',
			startTime: startTime ? parseInt(startTime) : undefined,
			endTime: endTime ? parseInt(endTime) : undefined,
			limit: limit ? parseInt(limit) : undefined,
		});
		return NextResponse.json(snapshot, { status: 200 });
	} catch (error: any) {
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
}
