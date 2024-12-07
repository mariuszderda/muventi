import { PageTitle } from "@/components/admin-panel/page-title";
import { getOffer } from "@/lib/offers";
import { DataFormDBType } from "@/types";

const EditPage = async ({
  params: { id },
}: {
  params: {
    id: string;
  };
}) => {
  const offer: DataFormDBType | undefined = await getOffer(id);
  if (offer === undefined) {
    return <h2>Coś poszło nie tak ):</h2>;
  }
  // @ts-expect-error array
  const { idOffer, title, description, imageUrl } = offer[0];

  return (
    <main>
      <section>
        <PageTitle>Edit offer </PageTitle>
      </section>
      <p>id: {idOffer}</p>
      <p>title: {title}</p>
      <p>description: {description}</p>
      <p>imageUrl: {imageUrl}</p>
    </main>
  );
};

export default EditPage;
