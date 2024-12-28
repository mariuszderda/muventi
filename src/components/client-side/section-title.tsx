import { CustomMark } from "@/components/client-side/custom-mark";

export const SectionTitle = ({ children }: { children: string }) => {
  return (
    <h3 className="text-6xl font-black">
      <CustomMark>{children}</CustomMark>
    </h3>
  );
};
