import PageTemplate from "@/components/client-side/sections/page-template";
import { getRealizations } from "@/lib/realizations";
import { RealizationDBDataType } from "@/types";

const Page = async () => {
  // @ts-expect-error type data error
  let realization: RealizationDBDataType[] = await getRealizations();
  if (!realization) {
    realization = [];
  }

  return <PageTemplate title="realizacje" dataArray={realization} />;
};

export default Page;
