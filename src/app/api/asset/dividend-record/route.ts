import { getAssetDividendRecord } from "@/lib/wallet/asset";
import { NextResponse } from "next/server";

export async function GET() {
	try {
		const data = await getAssetDividendRecord();
		return NextResponse.json(data, { status: 200 });
	} catch (error: any) {
		return NextResponse.json(error.message, { status: 500 });
	}
}
