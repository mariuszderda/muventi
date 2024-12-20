import { deleteOffer, updateOfferAction } from "@/actions/offer";
import CreateForm from "@/components/admin-panel/forms/create-form";
import { PageTitle } from "@/components/admin-panel/page-title";
import { offerFormInputs } from "@/constans/forms";
import { getOffer } from "@/lib/offers";
import { DataFormDBType, GetSingleOffer } from "@/types";

const EditPage = async (props: {
  params: Promise<{
    id: string;
  }>;
}) => {
  const params = await props.params;

  const { id } = params;

  const offer: GetSingleOffer = await getOffer(id);
  if (offer === undefined) {
    return <h2>Coś poszło nie tak ):</h2>;
  }
  // @ts-expect-error array type
  const data: DataFormDBType = offer[0];

  return (
    <main>
      <section>
        <PageTitle>Edit offer </PageTitle>
        <div className="flex w-full flex-col justify-between bg-adminPanel-p4 p-5 lg:flex-row">
          <CreateForm
            action={updateOfferAction}
            data={data}
            deleteFunction={deleteOffer}
            inputList={offerFormInputs}
          />
        </div>
      </section>
    </main>
  );
};

export default EditPage;
