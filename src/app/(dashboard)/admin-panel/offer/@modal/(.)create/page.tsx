import { createOffer } from "@/actions/offer";
import CreateOffer from "@/components/admin-panel/forms/create-offer";

const CreateOfferModalPage = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 bg-black/40">
      <div className="">
        <CreateOffer action={createOffer} />
      </div>
    </div>
  );
};
export default CreateOfferModalPage;
