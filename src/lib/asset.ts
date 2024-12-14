import { client } from "@/lib/binance-client";
import { UniversalTransferType } from "binance/lib/types/spot";

export const getUserAsset = async (params: {
  asset?: string;
  needBtcValuation?: boolean;
}) => {
  try {
    return await client.getUserAsset(params);
  } catch (error: any) {
    throw new Error(error.response?.data || error.message);
  }
}

export const getUserWalletBalance = async () => {
  try {
    return await client.getWalletBalances();
  } catch (error: any) {
    throw new Error(error.response?.data || error.message);
  }
}

export const getUserUniversalTransferHistory = async (params: {
  type: UniversalTransferType;
  startTime?: number;
  endTime?: number;
  current?: number;
  size?: number;
}) => {
  try {
    return await client.getUniversalTransferHistory(params);
  } catch (error: any) {
    throw new Error(error.response?.data || error.message);
  }
}
