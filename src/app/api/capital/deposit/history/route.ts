import { NextRequest, NextResponse } from "next/server";
import { getDepositHistory } from "@/lib/wallet/capital";
import { DepositHistoryParams, DepositStatusCode } from "binance";

export async function GET(req: NextRequest) {
	const searchParams = req.nextUrl.searchParams;

	const params: DepositHistoryParams = {
		coin: searchParams.get("coin") || undefined,
		status: searchParams.get("status") as DepositStatusCode | undefined,
		startTime: searchParams.get("startTime") ? parseInt(searchParams.get("startTime")!) : undefined,
		endTime: searchParams.get("endTime") ? parseInt(searchParams.get("endTime")!) : undefined,
		offset: searchParams.get("offset") ? parseInt(searchParams.get("offset")!) : undefined,
		limit: searchParams.get("limit") ? parseInt(searchParams.get("limit")!) : undefined,
	};

	try {
		const data = await getDepositHistory(params);
		return NextResponse.json(data, { status: 200 });
	} catch (error: any) {
		return NextResponse.json(error.message, { status: 500 });
	}
}
