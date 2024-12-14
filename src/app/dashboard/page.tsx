import React from 'react';
import { APP_URL } from "@/constants/constants";
import { getUserAsset } from "@/lib/asset";

const page = async () => {

  const fetchAccountInfo = async () => {
    const response =  await fetch(APP_URL + '/api/account');
    return await response.json();
  }

  const fetchUserAsset = async () => {
    return await getUserAsset();
  }

  const accountInfo = await fetchAccountInfo();
  const userAssets = await fetchUserAsset();
  console.log(userAssets);

  return (
    <div>
      <h1>Account Dashboard</h1>
      <p>Total Balance: {accountInfo.totalAssetOfBtc} BTC</p>
    </div>
  );
};

export default page;
