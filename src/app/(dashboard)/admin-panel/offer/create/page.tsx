import { createOffer } from "@/actions/offer";
import CreateOffer from "@/components/admin-panel/forms/create-offer";

const OfferCreatePage = () => {
  return <CreateOffer action={createOffer} />;
};

export default OfferCreatePage;
