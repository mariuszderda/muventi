import { ActionButton } from "@/components/admin-panel/table/action-button";

type TableRowProps = {
  image: string;
  name: string;
  description: string;
  actionName: string;
  action?: string;
};

export const TableRow = ({ image, name, description }: TableRowProps) => {
  return (
    <tr className="grid h-[82px] w-full grid-cols-4 border-b px-6 text-center text-[13px] font-normal">
      <td className="self-center">{image}</td>
      <td className="self-center">{name}</td>
      <td className="self-center">
        <p>{description}</p>
      </td>
      <td className="self-center pr-4 text-right">
        <ActionButton typeAction="edit" href="/admin-panel/offer/edit/1" />
      </td>
    </tr>
  );
};
