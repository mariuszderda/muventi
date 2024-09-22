import { TableRow } from "@/components/admin-panel/table/table-row";

export const Table = () => {
  return (
    <table className="w-full text-[11px] font-bold">
      <thead>
        <tr className="flex h-11 items-center bg-adminPanel-mainGray uppercase text-adminPanel-secondary/70">
          <th className="w-11 flex-none pl-8">Image</th>
          <th className="w-96 flex-initial">Name</th>
          <th className="w-32 flex-1">Description</th>
          <th className="w-32 flex-initial text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        <TableRow
          image="Image"
          name="RollUp"
          description="Duży i wytrzymały rollup"
          actionName="delete"
        />{" "}
        <TableRow
          image="Image"
          name="RollUp"
          description="Duży i wytrzymały rollup"
          actionName="delete"
        />{" "}
        <TableRow
          image="Image"
          name="RollUp"
          description="Duży i wytrzymały rollup"
          actionName="delete"
        />{" "}
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
