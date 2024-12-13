import clsx from "clsx";
import React from "react";

export const DeleteForm = ({
  id,
  deleteFunction,
}: {
  id: string;
  deleteFunction?: (id: string) => void;
}) => {
  const handleDeleteOffer = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const confirmation = window.confirm("Na pewno chcesz to usunąć?");

    if (confirmation && deleteFunction) {
      deleteFunction(id);
    }
  };
  return (
    <form onSubmit={(e) => handleDeleteOffer(e)} className="my-4">
      <input type="hidden" name="id" value={id} />
      <button
        className={clsx(
          "flex h-[50px] w-[185px] transform-gpu items-center justify-center rounded bg-rose-600 text-xl text-white transition-colors delay-100 hover:scale-95 hover:bg-rose-600/90"
        )}
      >
        Delete
      </button>
    </form>
  );
};
