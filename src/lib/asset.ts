import { client } from "@/lib/binance-client";

export const getUserAsset = async () => {
  try {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    return await client.getUserAsset();
  } catch (error: any) {
    throw new Error(error.response?.data || error.message);
  }
}
