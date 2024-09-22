import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

type ActionButtonProps = {
  typeAction: string;
};

export const ActionButton = ({ typeAction }: ActionButtonProps) => {
  return (
    <button
      className={`flex h-10 w-10 items-center justify-center rounded-full ${typeAction === "delete" ? "bg-red-600" : "bg-adminPanel-mainBlue"}`}
      title={`${typeAction} offer`}
    >
      {typeAction === "delete" ? (
        <AiOutlineDelete className="h-4 w-4 text-white" />
      ) : (
        <AiOutlineEdit className="h-4 w-4 text-white" aria-label="edit" />
      )}
    </button>
  );
};
