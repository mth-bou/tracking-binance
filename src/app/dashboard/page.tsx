import React from 'react';
import { APP_URL } from "@/constants/constants";

const page = async () => {

  const fetchAccountInfo = async () => {
    const response =  await fetch(APP_URL + '/api/account');
    return await response.json();
  }

  const accountInfo = await fetchAccountInfo();

  return (
    <div>
      <h1>Account Dashboard</h1>
      <p>Total Balance: {accountInfo.totalAssetOfBtc} BTC</p>
    </div>
  );
};

export default page;
