import { MainButton } from "@/components/admin-panel/buttons/main-button";
import { Table } from "@/components/admin-panel/table/table";

const AdminOfferPage = () => {
  return (
    <section>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl">Oferta</h2>
        <MainButton>Create</MainButton>
      </div>
      <div className="my-7 rounded bg-white p-5">
        <Table />
        <p className="mt-5 w-full text-center text-[13px] text-adminPanel-mainBlue">
          Show more
        </p>
      </div>
    </section>
  );
};

export default AdminOfferPage;
