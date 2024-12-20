import { disableFastWithdrawSwitch } from "@/lib/wallet/account";
import { NextResponse } from "next/server";

export async function POST() {
	try {
		const result = await disableFastWithdrawSwitch();
		return NextResponse.json(result, { status: 200 });
	} catch (error: any) {
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
}
