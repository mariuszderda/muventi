import { ContactDetail } from "@/components/client-side/contact-detail";
import { ContactForm } from "@/components/client-side/contact-form";
import { SectionTitle } from "@/components/client-side/section-title";

const ContactPage = () => {
  return (
    <section className="main-section">
      <SectionTitle>kontakt</SectionTitle>
      <ContactDetail />
      <ContactForm />
    </section>
  );
};

export default ContactPage;
