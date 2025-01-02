import { ContactDetail } from "@/components/client-side/contact-detail";
import { ContactForm } from "@/components/client-side/contact-form";
import { SectionTitle } from "@/components/client-side/section-title";

export const Contact = () => {
  return (
    <section className="mx-auto my-14 max-w-screen-main">
      <SectionTitle>kontakt</SectionTitle>
      <ContactDetail />
      <ContactForm />
    </section>
  );
};