import { MainButton } from "@/components/admin-panel/buttons/main-button";
import { Table } from "@/components/admin-panel/table/table";
import { getOffers } from "@/lib/offers";

const AdminOfferPage = async () => {
  let offers = await getOffers();
  if (!offers) {
    offers = [];
  }
  return (
    <section>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl">Oferta</h2>
        <MainButton href="/admin-panel/offer/create">Stwórz</MainButton>
      </div>
      <div className="my-7 rounded bg-white p-5">
        {/* @ts-expect-error query result error*/}
        <Table data={offers} path={"offer"} />
        {offers && (
          <p className="mt-5 w-full text-center text-[13px] text-adminPanel-p5">
            Show more
          </p>
        )}
      </div>
    </section>
  );
};

export default AdminOfferPage;
