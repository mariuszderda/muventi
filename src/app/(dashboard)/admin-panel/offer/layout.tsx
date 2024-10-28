import React from "react";

const OfferLayout = ({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) => {
  return (
    <>
      {modal}
      {children}
    </>
  );
};

export default OfferLayout;
