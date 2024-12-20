import { NextRequest, NextResponse } from "next/server";
import { getUserDelegationHistory } from "@/lib/wallet/asset";
import { DelegationHistoryParams } from "binance/lib/types/spot";

export async function GET(req: NextRequest) {
	const searchParams = req.nextUrl.searchParams;

	const params: DelegationHistoryParams = {
		email: searchParams.get('email')!,
		startTime: parseInt(searchParams.get('startTime')!),
		endTime: parseInt(searchParams.get('endTime')!),
		type: searchParams.get('type') as 'Delegate' | 'Undelegate' || undefined,
		asset: searchParams.get('asset') || undefined,
		current: searchParams.get('current') ? parseInt(searchParams.get('current')!) : undefined,
		size: searchParams.get('size') ? parseInt(searchParams.get('size')!) : undefined,
	};

	try {
		const data = await getUserDelegationHistory(params);
		return NextResponse.json(data, { status: 200 });
	} catch (error: any) {
		return NextResponse.json(error.message, { status: 500 });
	}
}
