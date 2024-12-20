import { NextRequest, NextResponse } from "next/server";
import { SubmitDepositCreditParams } from "binance/lib/types/spot";
import { applyDepositCredit } from "@/lib/wallet/capital";

export async function POST(req: NextRequest) {
	const body: SubmitDepositCreditParams = await req.json();

	try {
		const data = await applyDepositCredit(body);
		return NextResponse.json(data, { status: 200 });
	} catch (error: any) {
		return NextResponse.json(error.message, { status: 500 });
	}
}
