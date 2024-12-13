import { createRealizationAction } from "@/actions/realization";
import CreateForm from "@/components/admin-panel/forms/create-form";
import { PageTitle } from "@/components/admin-panel/page-title";
import { realizationFormInputs } from "@/constans/forms";
import React from "react";

const RealizationsPage = () => {
  return (
    <main>
      <PageTitle>New Realization</PageTitle>
      <div className="flex w-full flex-col justify-between bg-adminPanel-p4 p-5 lg:flex-row">
        <CreateForm
          action={createRealizationAction}
          inputList={realizationFormInputs}
        />
      </div>
    </main>
  );
};

export default RealizationsPage;
