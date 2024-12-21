import React from 'react';
import { fetchAllCoins } from "@/app/services/wallet/capital";
import { getOwnedCoins } from "@/app/utils/filters";

const DashboardPage = async () => {

  const allCoins = await fetchAllCoins();
  const ownedCoins = getOwnedCoins(allCoins);

  return (
    <div>
      <div className="flex flex-1 flex-col max-h-fit p-6 pt-0">
        <div className="grid auto-rows-min md:grid-cols-1">
          <div className="rounded-xl bg-muted/50 p-6">
            <h2 className="text-lg font-bold mb-4">Owned Cryptos</h2>
            <ul className="list-disc pl-5">
              {ownedCoins.map((coin) => (
                <li key={coin.coin}>
                  {coin.name} ({coin.coin}): {coin.free}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
