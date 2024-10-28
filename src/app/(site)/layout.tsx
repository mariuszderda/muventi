import React from "react";

const SiteLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <body>{children}</body>;
};

export default SiteLayout;
