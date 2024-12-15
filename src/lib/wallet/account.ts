import { client } from "@/lib/binance-client";

export const getAccountInfo = async () => {
  try {
    return await client.getAccountInfo();
  } catch (error: any) {
    throw new Error(error.response?.data || error.message);
  }
}

export const getDailyAccountSnapshot = async (params: {
  type: 'SPOT' | 'MARGIN' | 'FUTURES';
  startTime?: number;
  endTime?: number;
  limit?: number;
}) => {
  try {
    return await client.getDailyAccountSnapshot(params);
  } catch (error: any) {
    throw new Error(error.response?.data || error.message);
  }
}

/**
 * POST method
 */
export const enableFastWithdrawSwitch = async () => {
  try {
    return await client.enableFastWithdrawSwitch();
  } catch (error: any) {
    throw new Error(error.response?.data || error.message);
  }
}

/**
 * POST method
 */
export const disabledFastWithdrawSwitch = async () => {
  try {
    return await client.disableFastWithdrawSwitch();
  } catch (error: any) {
    throw new Error(error.response?.data || error.message);
  }
}

export const getAccountStatus = async () => {
  try {
    return await client.getAccountStatus();
  } catch (error: any) {
    throw new Error(error.response?.data || error.message);
  }
}

export const getAccountApiTradingStatus = async () => {
  try {
    return await client.getApiTradingStatus();
  } catch (error: any) {
    throw new Error(error.response?.data || error.message);
  }
}

export const getApiKeyPermission = async () => {
  try {
    return await client.getApiKeyPermissions();
  } catch (error: any) {
    throw new Error(error.response?.data || error.message);
  }
}
