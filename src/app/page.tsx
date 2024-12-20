import React from 'react';
import { APP_URL } from "@/constants/constants";
import { getUserUniversalTransferHistory } from "@/lib/wallet/asset";

const DashboardPage = async () => {

  const fetchAsset = async () => {
    const response =  await fetch(APP_URL + '/api/asset/user-asset?asset=ETH&needBtcValuation=true');
    return await response.json();
  }

  const fetchUniversalTransferHistory = async () => {
    return await getUserUniversalTransferHistory({ type: 'FUNDING_MAIN'});
  }

  /*const asset = await fetchAsset();
  console.log("fetchDetail :", asset);
  const userUniversalTransferHistory = await fetchUniversalTransferHistory();
  console.log("transfer : ", userUniversalTransferHistory);*/

  return (
    <div>
      <div className="flex flex-1 flex-col max-h-fit p-6 pt-0">
        <div className="grid auto-rows-min md:grid-cols-1">
          <div className="aspect-video rounded-xl bg-muted/50"/>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
