import { NextRequest, NextResponse } from "next/server";
import { getDepositAddressList } from "@/lib/wallet/capital";
import { DepositAddressListParams } from "binance/lib/types/spot";

export async function GET(req: NextRequest) {
	const searchParams = req.nextUrl.searchParams;

	const params: DepositAddressListParams = {
		coin: searchParams.get("coin")!,
		network: searchParams.get("network") || undefined,
		timestamp: parseInt(searchParams.get("timestamp")!),
	}

	try {
		const data = await getDepositAddressList(params);
		return NextResponse.json(data, { status: 200 });
	} catch (error: any) {
		return NextResponse.json(error.message, { status: 500 });
	}
}
