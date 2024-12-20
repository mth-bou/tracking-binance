import { getSystemStatus } from "@/lib/wallet/system";
import { NextResponse } from "next/server";

export async function GET() {
	try {
		const systemStatus = await getSystemStatus();
		return NextResponse.json(systemStatus, { status: 200 });
	} catch (error: any) {
		return NextResponse.json(error.message, { status: 500 });
	}
}
