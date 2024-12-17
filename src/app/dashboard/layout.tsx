import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Binance Manager Dashboard",
  description: "Your preferred Binance manager dashboard",
}

const DashboardLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="flex h-screen overflow-hidden w-full">
      {children}
    </div>
  );
}

export default DashboardLayout;
