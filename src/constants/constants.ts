export const API_BASE_URL: string[] = [
  'https://api.binance.com',
  'https://api1.binance.com',
  'https://api2.binance.com',
  'https://api3.binance.com',
  'https://api4.binance.com',
];

export const APP_URL = process.env.NEXT_PUBLIC_URL;

export const EXCHANGE_INFO = '/api/v3/exchangeInfo';
export const MONITOR_ORDER_COUNT = '/api/v3/rateLimit/order';

export const intervalLetter = {
  S: "SECOND",
  M: "MINUTE",
  H: "HOUR",
  D: "DAY",
};
