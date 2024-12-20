import {
  updateRealizationAction,
  deleteRealization,
} from "@/actions/realization";
import CreateForm from "@/components/admin-panel/forms/create-form";
import { PageTitle } from "@/components/admin-panel/page-title";
import { realizationFormInputs } from "@/constans/forms";
import { getRealization } from "@/lib/realizations";
import { DataFormDBType, GetSingleOffer } from "@/types";

const EditPage = async (props: {
  params: Promise<{
    id: string;
  }>;
}) => {
  const params = await props.params;

  const { id } = params;

  const realization: GetSingleOffer = await getRealization(id);
  if (realization === undefined) {
    return <h2>Coś poszło nie tak ):</h2>;
  }
  // @ts-expect-error array type
  const data: DataFormDBType = realization[0];

  return (
    <main>
      <section>
        <PageTitle>Edit offer </PageTitle>
        <div className="flex w-full flex-col justify-between bg-adminPanel-p4 p-5 lg:flex-row">
          <CreateForm
            action={updateRealizationAction}
            data={data}
            deleteFunction={deleteRealization}
            inputList={realizationFormInputs}
          />
        </div>
      </section>
    </main>
  );
};

export default EditPage;
