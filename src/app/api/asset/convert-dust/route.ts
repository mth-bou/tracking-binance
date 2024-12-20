import { NextRequest, NextResponse } from "next/server";
import { convertDustAssetsToBnb } from "@/lib/wallet/asset";

export async function POST(req: NextRequest) {
	const body = await req.json();

	try {
		const data = await convertDustAssetsToBnb(body);
		return NextResponse.json(data, { status: 200 });
	} catch (error: any) {
		return NextResponse.json(error.message, { status: 500 });
	}
}
