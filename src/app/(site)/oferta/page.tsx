import PageTemplate from "@/components/client-side/sections/page-template";
import { getOffers } from "@/lib/offers";
import { RealizationDBDataType } from "@/types";

const OfferPage = async () => {
  // @ts-expect-error data fetch type
  let offers: RealizationDBDataType[] = await getOffers();
  if (!offers) {
    offers = [];
  }
  return <PageTemplate title="oferta" dataArray={offers} />;
};

export default OfferPage;
