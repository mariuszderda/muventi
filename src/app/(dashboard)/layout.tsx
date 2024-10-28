import Navbar from "@/components/admin-panel/header/navbar";
import React from "react";

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <body className="font-source-pro antialiased">
      <Navbar />;
      <main className="ml-64 min-h-screen bg-[#F0F0F7] px-20 py-8">
        {children}
      </main>
    </body>
  );
};

export default DashboardLayout;
