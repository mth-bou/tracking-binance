import { client } from "@/lib/binance-client";

export const getSystemStatus = async () => {
  try {
    return await client.getSystemStatus();
  } catch (error: any) {
    throw new Error(error.response?.data || error.message);
  }
}
