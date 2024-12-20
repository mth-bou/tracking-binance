import { getWithdrawHistory } from "@/lib/wallet/travel-rule";
import { NextRequest, NextResponse } from "next/server";
import { WithdrawHistoryParams, WithdrawStatusCode } from "binance/lib/types/spot";

export async function GET(req: NextRequest) {
	const searchParams = req.nextUrl.searchParams;

	const params: WithdrawHistoryParams = {
		coin: searchParams.get('coin') || undefined,
		withdrawOrderId: searchParams.get('withdrawOrderId') || undefined,
		status: searchParams.get('status') ? searchParams.get('status') as WithdrawStatusCode : undefined,
		offset: parseInt(searchParams.get('offset')!),
		limit: parseInt(searchParams.get('limit')!),
		startTime: parseInt(searchParams.get('startTime')!),
		endTime: parseInt(searchParams.get('endTime')!),
	}

	try {
		const data = await getWithdrawHistory(params);
		return NextResponse.json(data, { status: 200 });
	} catch (error: any) {
		return NextResponse.json(error.message, { status: 500 });
	}
}
