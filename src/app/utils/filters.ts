import { AllCoinsInformationResponse } from "binance/lib/types/spot";

export const getOwnedCoins = (coins: AllCoinsInformationResponse[]): AllCoinsInformationResponse[] => {
	return coins.filter((coin) => {
		const totalAmount =
			parseFloat(String(coin.free) || "0") +
			parseFloat(String(coin.locked) || "0") +
			parseFloat(String(coin.freeze) || "0") +
			parseFloat(String(coin.withdrawing) || "0") +
			parseFloat(String(coin.ipoable) || "0") +
			parseFloat(String(coin.ipoing) || "0") +
			parseFloat(String(coin.storage) || "0");

		return totalAmount > 0;
	});
};
