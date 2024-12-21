import { APP_URL } from "@/constants/constants";

export const fetchAllCoins = async () => {
	const response = await fetch(`${APP_URL}/api/capital/coins-information`);
	if (!response.ok) {
		throw new Error(`Failed to fetch coins information: ${response.statusText}`);
	}
	return await response.json();
};

export const fetchWithdrawHistory = async () => {
	const response = await fetch(`${APP_URL}/api/capital/withdraw/history`);
	if (!response.ok) {
		throw new Error(`Failed to fetch withdraw history: ${response.statusText}`);
	}
	return await response.json();
};

export const fetchDepositHistory = async (params: Record<string, any>) => {
	const queryParams = new URLSearchParams(params).toString();
	const response = await fetch(`${APP_URL}/api/capital/deposit/history?${queryParams}`);
	if (!response.ok) {
		throw new Error(`Failed to fetch deposit history: ${response.statusText}`);
	}
	return await response.json();
};
