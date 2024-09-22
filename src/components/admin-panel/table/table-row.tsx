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
    <tr className="flex h-[82px] items-center border-b text-[13px] font-normal">
      <td className="w-11 flex-none pl-8">{image}</td>
      <td className="w-96 flex-initial text-center">{name}</td>
      <td className="w-32 flex-1">{description}</td>
      <td className="flex w-32 flex-initial gap-4">
        <ActionButton typeAction="edit" />
        <ActionButton typeAction="delete" />
      </td>
    </tr>
  );
};
