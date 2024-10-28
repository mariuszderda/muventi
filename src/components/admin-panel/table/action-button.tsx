import Link from "next/link";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

type ActionButtonProps = {
  typeAction: string;
  href: string;
};

export const ActionButton = ({ typeAction, href }: ActionButtonProps) => {
  return (
    <Link
      href={href}
      className={`inline-flex h-10 w-10 items-center justify-center rounded-full ${typeAction === "delete" ? "bg-red-600" : "bg-adminPanel-p5"}`}
      title={`${typeAction} offer`}
    >
      {typeAction === "delete" ? (
        <AiOutlineDelete className="h-4 w-4 text-white" />
      ) : (
        <AiOutlineEdit className="h-4 w-4 text-white" />
      )}
    </Link>
  );
};
