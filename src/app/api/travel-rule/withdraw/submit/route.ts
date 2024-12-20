import { NextRequest, NextResponse } from "next/server";
import { WithdrawParams } from "binance/lib/types/spot";
import { submitWithdrawTravelRule } from "@/lib/wallet/travel-rule";

export async function POST(req: NextRequest) {
	try {
		const body: WithdrawParams = await req.json();

		const data = await submitWithdrawTravelRule(body);
		return NextResponse.json(data, { status: 200 });
	} catch (error: any) {
		return NextResponse.json(error.message, { status: 500 });
	}
}
