import Navbar from "@/components/admin-panel/header/navbar";
import React from "react";

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="font-source">
      <Navbar />
      <div className="ml-64 min-h-screen bg-[#F0F0F7] px-20 py-8">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
