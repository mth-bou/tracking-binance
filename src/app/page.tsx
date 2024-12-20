import React from 'react';
import { APP_URL } from "@/constants/constants";
import { getUserUniversalTransferHistory } from "@/lib/wallet/asset";

const DashboardPage = async () => {

  const fetchAccountInfo = async () => {
    const response =  await fetch(APP_URL + '/api/account/info');
    return await response.json();
  }

  const fetchUniversalTransferHistory = async () => {
    return await getUserUniversalTransferHistory({ type: 'FUNDING_MAIN'});
  }

  const accountInfo = await fetchAccountInfo();
  const userUniversalTransferHistory = await fetchUniversalTransferHistory();
  console.log(userUniversalTransferHistory);

  return (
    <div>
      <h1>Account Dashboard</h1>
      <p>Total Balance: {accountInfo.totalAssetOfBtc} BTC</p>
    </div>
  );
};

export default DashboardPage;
