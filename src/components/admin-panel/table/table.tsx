import { TableRow } from "@/components/admin-panel/table/table-row";
import { DataFormDBType } from "@/types";

export const Table = ({ data }: { data: DataFormDBType[] }) => {
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
          <h3 className="pt-4 text-center text-xl font-medium text-adminPanel-p2">
            Brak danych.
          </h3>
        ) : (
          data?.map((item: DataFormDBType) => (
            <TableRow
              key={item.id}
              image={item.image}
              name={item.title}
              description={item.description}
              id={item.id}
            />
          ))
        )}
      </tbody>
    </table>
  );
};
