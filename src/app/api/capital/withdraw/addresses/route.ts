import { NextResponse } from "next/server";
import { getWithdrawAddressList } from "@/lib/wallet/capital";

export async function GET() {
	try {
		const data = await getWithdrawAddressList();
		return NextResponse.json(data, { status: 200 });
	} catch (error: any) {
		return NextResponse.json(error.message, { status: 500 });
	}
}
