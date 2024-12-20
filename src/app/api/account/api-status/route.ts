import { getAccountApiTradingStatus } from "@/lib/wallet/account";
import { NextResponse } from "next/server";

export async function GET() {
	try {
		const status = await getAccountApiTradingStatus();
		return NextResponse.json(status, { status: 200 });
	} catch (error: any) {
		return NextResponse.json(error.message, { status: 500 });
	}
}
