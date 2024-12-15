import { client } from "@/lib/binance-client";
import {
  CloudMiningHistoryParams,
  ConvertDustParams, DelegationHistoryParams,
  GetAssetParams,
  UniversalTransferParams,
  UniversalTransferType
} from "binance/lib/types/spot";

export const getAssetDetail = async () => {
  try {
    return await client.getAssetDetail();
  } catch (error: any) {
    throw new Error(error.response?.data || error.message);
  }
}

export const getUserAsset = async (params: GetAssetParams) => {
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

export const postUserUniversalTransfer = async (params: UniversalTransferParams) => {
  try {
    return await client.submitUniversalTransfer(params);
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

/**
 * Convert dust assets to BNB
 * POST method
 * @params params {ConvertDustParams}
 */
export const convertDustAssetsToBnb = async (params: ConvertDustParams) => {
  try {
    return await client.convertDustToBnb(params);
  } catch (error: any) {
    throw new Error(error.response?.data || error.message);
  }
}

export const getDustLog = async () => {
  try {
    return await client.getDustLog();
  } catch (error: any) {
    throw new Error(error.response?.data || error.message);
  }
}

/**
 * Query asset dividend record.
 */
export const getAssetDividendRecord = async () => {
  try {
    return await client.getAssetDividendRecord();
  } catch (error: any) {
    throw new Error(error.response?.data || error.message);
  }
}

/**
 * Fetch trade fee.
 */
export const getTradeFee = async () => {
  try {
    return await client.getTradeFee();
  } catch (error: any) {
    throw new Error(error.response?.data || error.message);
  }
}

/**
 * Query funding wallet.
 * @param params
 */
export const getFundingWallet = async (params: GetAssetParams) => {
  try {
    return await client.getFundingAsset(params);
  } catch (error: any) {
    throw new Error(error.response?.data || error.message);
  }
}

/**
 * Fetch user's cloud mining payment and refund history.
 * @param params
 */
export const getCloudMiningPaymentAndRefundHistory = async (params: CloudMiningHistoryParams) => {
  try {
    return await client.getCloudMiningHistory(params);
  } catch (error: any) {
    throw new Error(error.response?.data || error.message);
  }
}

/**
 * Query user's delegation history.
 * @param params
 */
export const getUserDelegationHistory = async (params: DelegationHistoryParams) => {
  try {
    return await client.getDelegationHistory(params);
  } catch (error: any) {
    throw new Error(error.response?.data || error.message);
  }
}
