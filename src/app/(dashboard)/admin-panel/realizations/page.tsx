import { MainButton } from "@/components/admin-panel/buttons/main-button";
import { Table } from "@/components/admin-panel/table/table";
import { getRealizations } from "@/lib/realizations";

const RealizationsPage = async () => {
  let realization = await getRealizations();
  if (!realization) {
    realization = [];
  }
  return (
    <section>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl">Realizacje</h2>
        <MainButton href="/admin-panel/realizations/create">
          Nowe realizacje
        </MainButton>
      </div>
      <div className="my-7 rounded bg-white p-5">
        {/*@ts-expect-error data*/}
        <Table data={realization} path={"realizations"} />
        <p className="mt-5 w-full text-center text-[13px] text-adminPanel-p5">
          Show more
        </p>
      </div>
    </section>
  );
};

export default RealizationsPage;
