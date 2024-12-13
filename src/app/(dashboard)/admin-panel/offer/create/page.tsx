import { createOfferAction } from "@/actions/offer";
import CreateForm from "@/components/admin-panel/forms/create-form";
import { PageTitle } from "@/components/admin-panel/page-title";
import { offerFormInputs } from "@/constans/forms";
import React from "react";

const OfferCreatePage = () => {
  return (
    <main>
      <PageTitle>Create Offer</PageTitle>
      <div className="flex w-full flex-col justify-between bg-adminPanel-p4 p-5 lg:flex-row">
        <CreateForm action={createOfferAction} inputList={offerFormInputs} />
      </div>
    </main>
  );
};

export default OfferCreatePage;
