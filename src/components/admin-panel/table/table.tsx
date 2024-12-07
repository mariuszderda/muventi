import { TableRow } from "@/components/admin-panel/table/table-row";
import { TableRowProps } from "@/types";

export const Table = ({ data }: { data: TableRowProps[] }) => {
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
        {data.length < 1 ? (
          <p className="pt-4 text-center text-xl font-medium text-adminPanel-p2">
            Brak danych.
          </p>
        ) : (
          data?.map((item: TableRowProps) => (
            <TableRow
              key={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
              id={item.id}
            />
          ))
        )}
      </tbody>
    </table>
  );
};
