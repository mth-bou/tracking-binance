import { client } from "@/lib/binance-client";
import { DepositHistoryParams, WithdrawHistoryParams, WithdrawParams } from "binance";

/**
 * POST method
 * @param params
 */
export const submitWithdrawTravelRule = async (params: WithdrawParams) => {
  try {
    return await client.withdraw(params);
  } catch (error: any) {
    throw new Error(error.response?.data || error.message);
  }
}

export const getWithdrawHistory = async (params: WithdrawHistoryParams) => {
  try {
    return await client.getWithdrawHistory(params);
  } catch (error: any) {
    throw new Error(error.response?.data || error.message);
  }
}

export const getDepositHistory = async (params: DepositHistoryParams) => {
  try {
    return await client.getDepositHistory(params);
  } catch (error: any) {
    throw new Error(error.response?.data || error.message);
  }
}
