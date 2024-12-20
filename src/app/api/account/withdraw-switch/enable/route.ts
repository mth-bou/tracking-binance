import { NextResponse } from "next/server";
import { enableFastWithdrawSwitch } from "@/lib/wallet/account";

export async function POST() {
	try {
		const result = await enableFastWithdrawSwitch();
		return NextResponse.json(result, { status: 200 });
	} catch (error: any) {
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
}
