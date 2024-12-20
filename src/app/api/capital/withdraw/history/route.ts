import { NextResponse } from "next/server";
import { getWithDrawHistory } from "@/lib/wallet/capital";

export async function GET() {
	try {
		const data = await getWithDrawHistory();
		return NextResponse.json(data, { status: 200 });
	} catch (error: any) {
		return NextResponse.json(error.message, { status: 500 });
	}
}
