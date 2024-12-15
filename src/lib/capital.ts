import { client } from "@/lib/binance-client";
import {
  DepositAddressListParams,
  DepositAddressParams,
  DepositHistoryParams,
  SubmitDepositCreditParams,
  WithdrawParams
} from "binance/lib/types/spot";

/**
 * Get information of coins (available for deposit and withdraw) for user.
 */
export const getCoinsInformation = async () => {
  try {
    return await client.getBalances();
  } catch (error: any) {
    throw new Error(error.response?.data || error.message);
  }
}

/**
 * Submit a withdraw request
 * @param params {WithdrawParams}
 */
export const submitWithdraw = async (params: WithdrawParams) => {
  try {
    return await client.withdraw(params);
  } catch (error: any) {
    throw new Error(error.response?.data || error.message);
  }
}

/**
 * Fetch withdraw history.
 */
export const getWithDrawHistory = async () => {
  try {
    return await client.getWithdrawHistory()
  } catch (error: any) {
    throw new Error(error.response?.data || error.message);
  }
}

/**
 * Fetch withdraw address list.
 */
export const getWithdrawAddressList = async () => {
  try {
    return await client.getWithdrawAddresses();
  } catch (error: any) {
    throw new Error(error.response?.data || error.message);
  }
}

/**
 * Fetch deposit history.
 * @param params {DepositHistoryParams}
 */
export const getDepositHistory = async (params: DepositHistoryParams) => {
  try {
    return await client.getDepositHistory(params);
  } catch (error: any) {
    throw new Error(error.response?.data || error.message);
  }
}

/**
 * Fetch deposit address with network.
 * @param params {DepositAddressParams}
 */
export const getDepositAddress = async (params: DepositAddressParams) => {
  try {
    return await client.getDepositAddress(params);
  } catch (error: any) {
    throw new Error(error.response?.data || error.message);
  }
}

/**
 * Fetch deposit address list with network.
 * @param params {DepositAddressListParams}
 */
export const getDepositAddressList = async (params: DepositAddressListParams) => {
  try {
    return await client.getDepositAddresses(params);
  } catch (error: any) {
    throw new Error(error.response?.data || error.message);
  }
}

/**
 * Apply deposit credit for expired address (One click arrival)
 * @param params
 */
export const applyDepositCredit = async (params: SubmitDepositCreditParams) => {
  try {
    return await client.submitDepositCredit(params);
  } catch (error: any) {
    throw new Error(error.response?.data || error.message);
  }
}
