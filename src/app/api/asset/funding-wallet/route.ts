import { NextRequest, NextResponse } from "next/server";
import { getFundingWallet } from "@/lib/wallet/asset";
import { GetAssetParams } from "binance/lib/types/spot";

export async function GET(req: NextRequest) {
	const searchParams = req.nextUrl.searchParams;

	const params: GetAssetParams = {
		asset: searchParams.get('asset') || undefined,
		needBtcValuation: searchParams.get('needBtcValuation') === 'true'
			? true
			: searchParams.get('needBtcValuation') === 'false'
				? false
				: undefined,
	};

	try {
		const data = await getFundingWallet(params);
		return NextResponse.json(data, { status: 200 });
	} catch (error: any) {
		return NextResponse.json(error.message, { status: 500 });
	}
}
