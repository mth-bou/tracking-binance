import { NextRequest, NextResponse } from "next/server";
import { getCloudMiningPaymentAndRefundHistory } from "@/lib/wallet/asset";
import { CloudMiningHistoryParams } from "binance/lib/types/spot";

export async function GET(req: NextRequest) {
	const searchParams = req.nextUrl.searchParams;

	const params: CloudMiningHistoryParams = {
		tranId: searchParams.get('tranId') ? parseInt(searchParams.get('tranId')!) : undefined,
		clientTranId: searchParams.get('clientTranId') || undefined,
		asset: searchParams.get('asset') || undefined,
		startTime: parseInt(searchParams.get('startTime')!),
		endTime: parseInt(searchParams.get('endTime')!),
		current: searchParams.get('current') ? parseInt(searchParams.get('current')!) : undefined,
		size: searchParams.get('size') ? parseInt(searchParams.get('size')!) : undefined,
	};

	try {
		const data = await getCloudMiningPaymentAndRefundHistory(params);
		return NextResponse.json(data, { status: 200 });
	} catch (error: any) {
		return NextResponse.json(error.message, { status: 500 });
	}
}
