import { TableRow } from "@/components/admin-panel/table/table-row";

export const Table = () => {
  return (
    <table className="w-full text-[11px] font-bold">
      <thead className="w-full bg-adminPanel-p3 px-6 uppercase text-adminPanel-p2/70">
        <tr className="mx-6 grid h-11 grid-cols-4 items-center justify-between">
          <th className="">Image</th>
          <th className="text-center">Name</th>
          <th className="">Description</th>
          <th className="self-center pr-4 text-right">Actions</th>
        </tr>
      </thead>
      <tbody>
        <TableRow
          image="Image"
          name="RollUp"
          description="Duży i wytrzymały rollup"
          actionName="delete"
        />
        <TableRow
          image="Image"
          name="RollUp"
          description="Duży i wytrzymały rollup"
          actionName="delete"
        />
        <TableRow
          image="Image"
          name="RollUp"
          description="Duży i wytrzymały rollup"
          actionName="delete"
        />
        <TableRow
          image="Image"
          name="RollUp"
          description="Duży i wytrzymały rollup"
          actionName="delete"
        />
      </tbody>
    </table>
  );
};
