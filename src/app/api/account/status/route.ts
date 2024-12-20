import { NextRequest, NextResponse } from "next/server";
import { getAccountStatus } from "@/lib/wallet/account";

export async function GET(req: NextRequest) {
	try {
		const status = await getAccountStatus();
		return NextResponse.json(status, { status: 200 });
	} catch (error: any) {
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
}
