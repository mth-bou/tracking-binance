import { NextRequest, NextResponse } from "next/server";
import { getUserUniversalTransferHistory } from "@/lib/wallet/asset";
import { UniversalTransferType } from "binance/lib/types/spot";

export async function GET(req: NextRequest) {
	const searchParams = req.nextUrl.searchParams;
	const type = searchParams.get('type');
	const startTime = searchParams.get('startTime');
	const endTime = searchParams.get('endTime');
	const current = searchParams.get('current');
	const size = searchParams.get('size');

	try {
		const data = await getUserUniversalTransferHistory({
			type: type as UniversalTransferType,
			startTime: startTime ? parseInt(startTime) : undefined,
			endTime: endTime ? parseInt(endTime) : undefined,
			current: current ? parseInt(current) : undefined,
			size: size ? parseInt(size) : undefined
		});
		return NextResponse.json(data, { status: 200 });
	} catch (error: any) {
		return NextResponse.json(error.message, { status: 500 });
	}
}
