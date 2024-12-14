import { client } from "@/lib/binance-client";

export const getWithDrawHistory = async () => {
  try {
    return await client.getWithdrawHistory()
  } catch (error: any) {
    throw new Error(error.response?.data || error.message);
  }
}
