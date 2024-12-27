import { Navbar } from "@/components/client-side/navigation/navbar";
import React from "react";

const SiteLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <body className="font-onest">
      <Navbar />
      {children}
    </body>
  );
};

export default SiteLayout;
