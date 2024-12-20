import { NextRequest, NextResponse } from "next/server";
import { submitWithdraw } from "@/lib/wallet/capital";
import { WithdrawParams } from "binance/lib/types/spot";

export async function POST(req: NextRequest) {
	const body: WithdrawParams = await req.json();

	try {
		const data = await submitWithdraw(body);
		return NextResponse.json(data, { status: 200 });
	} catch (error: any) {
		return NextResponse.json(error.message, { status: 500 });
	}

}
