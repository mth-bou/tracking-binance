import { NextResponse } from "next/server";
import { getCoinsInformation } from "@/lib/wallet/capital";

/**
 * Get all coins information
 * @returns {AllCoinsInformationResponse[]}
 * {
 * 		 coin: string;
 *     depositAllEnable: boolean;
 *     free: numberInString; // Available balance
 *     freeze: numberInString; // Frozen assets
 *     ipoable: numberInString; // Asset to be released as part of an IPO
 *     ipoing: numberInString; // Asset is being released as part of an IPO
 *     isLegalMoney: boolean;
 *     locked: numberInString; // Locked due to open orders
 *     name: string;
 *     networkList: CoinNetwork[];
 *     storage: numberInString;
 *     trading: boolean;
 *     withdrawAllEnable: boolean;
 *     withdrawing: numberInString; // Locked due to withdrawal requests
 *  }
 */
export async function GET() {
	try {
		const data = await getCoinsInformation();
		return NextResponse.json(data, { status: 200 });
	} catch (error: any) {
		return NextResponse.json(error.message, { status: 500 });
	}
}
