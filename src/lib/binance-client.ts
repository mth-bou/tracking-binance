import { MainClient } from 'binance';

export const client = new MainClient({
  api_key: process.env.BINANCE_API_KEY,
  api_secret: process.env.BINANCE_API_SECRET,
});

export const getAccountInfo = async () => {
  try {
    return await client.getAccountInfo();
  } catch (error: any) {
    throw new Error(error.response?.data || error.message);
  }
}

export const getExchangeInfo = async () => {
  try {
    return await client.getExchangeInfo();
  } catch (error: any) {
    throw new Error(error.response?.data || error.message);
  }
}
