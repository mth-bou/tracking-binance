import { APP_URL } from "@/constants/constants";
import { AllCoinsInformationResponse, DepositHistory, WithdrawHistory } from "binance/lib/types/spot";

export const fetchAllCoins = async () : Promise<AllCoinsInformationResponse[]> => {
	const response = await fetch(`${APP_URL}/api/capital/coins-information`);
	if (!response.ok) {
		throw new Error(`Failed to fetch coins information: ${response.statusText}`);
	}
	return await response.json();
};

export const fetchWithdrawHistory = async () : Promise<WithdrawHistory[]> => {
	const response = await fetch(`${APP_URL}/api/capital/withdraw/history`);
	if (!response.ok) {
		throw new Error(`Failed to fetch withdraw history: ${response.statusText}`);
	}
	return await response.json();
};

export const fetchDepositHistory = async (params: Record<string, any>) : Promise<DepositHistory[]> => {
	const queryParams = new URLSearchParams(params).toString();
	const response = await fetch(`${APP_URL}/api/capital/deposit/history?${queryParams}`);
	if (!response.ok) {
		throw new Error(`Failed to fetch deposit history: ${response.statusText}`);
	}
	return await response.json();
};
