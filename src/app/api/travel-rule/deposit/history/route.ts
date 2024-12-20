import { NextRequest, NextResponse } from "next/server";
import { getDepositHistory } from "@/lib/wallet/travel-rule";
import { DepositHistoryParams, DepositStatusCode } from "binance/lib/types/spot";

export async function GET(req: NextRequest) {
	const searchParams = req.nextUrl.searchParams;

	const params: DepositHistoryParams = {
		coin: searchParams.get('coin') || undefined,
		status: searchParams.get('status') as DepositStatusCode || undefined,
		startTime: parseInt(searchParams.get('startTime')!),
		endTime: parseInt(searchParams.get('endTime')!),
		offset: parseInt(searchParams.get('offset')!),
		limit: parseInt(searchParams.get('limit')!),
	}

	try {
		const data = await getDepositHistory(params);
		return NextResponse.json(data, { status: 200 });
	} catch (error: any) {
		return NextResponse.json(error.message, { status: 500 });
	}
}
