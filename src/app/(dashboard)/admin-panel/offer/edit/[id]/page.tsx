import { updateOfferAction } from "@/actions/offer";
import CreateForm from "@/components/admin-panel/forms/create-form";
import { PageTitle } from "@/components/admin-panel/page-title";
import { getOffer } from "@/lib/offers";
import { DataFormDBType, GetSingleOffer } from "@/types";

const EditPage = async ({
  params: { id },
}: {
  params: {
    id: string;
  };
}) => {
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
          <CreateForm action={updateOfferAction} data={data} />
        </div>
      </section>
    </main>
  );
};

export default EditPage;
