import ContactForm from "./contactform/ContactForm";
import ContactHero from "./contacthero/ContactHero";
import Emergency from "./emergency/Emergency";
import Mapping from "./mapping/Mapping";

export default function Contact() {
  return (
    <section>
      <ContactHero />
      <ContactForm />
      <Mapping />
      <Emergency />
    </section>
  );
}
