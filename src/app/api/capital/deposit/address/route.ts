import { NextRequest, NextResponse } from "next/server";
import { getDepositAddress } from "@/lib/wallet/capital";
import { DepositAddressParams } from "binance/lib/types/spot";

export async function GET(req: NextRequest) {
	const searchParams = req.nextUrl.searchParams;

	const params: DepositAddressParams = {
		coin: searchParams.get("coin")!,
		network: searchParams.get("network") || undefined,
	}

	try {
		const data = await getDepositAddress(params);
		return NextResponse.json(data, { status: 200 });
	} catch (error: any) {
		return NextResponse.json(error.message, { status: 500 });
	}
}
