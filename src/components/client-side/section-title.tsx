import { CustomMark } from "@/components/client-side/custom-mark";

export const SectionTitle = ({ children }: { children: string }) => {
  return (
    <h3 className="text-3xl font-black md:text-6xl">
      <CustomMark>{children}</CustomMark>
    </h3>
  );
};
