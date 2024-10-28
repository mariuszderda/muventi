import clsx from "clsx";

type FormInputProps = {
  name: string;
  label: string;
  type: string;
  error?: string | null;
};

export const FormInput = ({ name, label, type, error }: FormInputProps) => {
  return (
    <div className="relative z-0 mx-auto my-8 lg:mx-0 lg:max-w-96">
      <input
        type={type}
        id={name}
        name={name}
        className={
          "peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
        }
        placeholder=" "
      />
      {error && (
        <p className="pt-1.5 text-sm font-bold text-red-500">{error}</p>
      )}
      <label
        htmlFor={name}
        className={clsx(
          "absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-base text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4",
          error && "text-red-500"
        )}
      >
        {label}
      </label>
    </div>
  );
};
