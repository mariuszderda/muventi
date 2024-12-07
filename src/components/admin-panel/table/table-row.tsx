import { ActionButton } from "@/components/admin-panel/table/action-button";
import { TableRowProps } from "@/types";
import Image from "next/image";

export const TableRow = ({ image, title, description, id }: TableRowProps) => {
  return (
    <tr className="grid h-[82px] w-full grid-cols-4 border-b px-6 text-center text-[13px] font-normal">
      <td className="self-center">
        <Image src={image} alt={title} width={100} height={100} priority />
      </td>
      <td className="self-center">{title}</td>
      <td className="self-center">
        <p>{description}</p>
      </td>
      <td className="self-center pr-4 text-right">
        <ActionButton
          typeAction="edit"
          href={`/admin-panel/offer/edit/${id}`}
        />
      </td>
    </tr>
  );
};
