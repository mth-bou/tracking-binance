import { APP_URL } from "@/constants/constants";
import { WalletBalance } from "binance/lib/types/spot";

export const fetchUserWalletBalance = async () : Promise<WalletBalance[]> => {
	const response = await fetch(`${APP_URL}/api/asset/wallet-balance`);
	if (!response.ok) {
		throw new Error(`Failed to fetch user wallet balance: ${response.statusText}`);
	}
	return await response.json();
}
