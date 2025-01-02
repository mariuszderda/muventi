import { Navbar } from "@/components/client-side/navigation/navbar";
import { Footer } from "@/components/client-side/sections/footer";
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
      <Footer />
    </body>
  );
};

export default SiteLayout;
