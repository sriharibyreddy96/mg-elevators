import Benefits from "./home/components/benefits/Benefits";
import Cards from "./home/components/cards/Cards";
import ChooseUs from "./home/components/chooseus/Choosesus";
import Clients from "./home/components/clients/Clients";
import CountUpSection from "./home/components/countup/CountUp";
import CustomDesign from "./home/components/customdesign/CustomDesign";
import FAQs from "./home/components/faqs/Faqs";
import Heading from "./home/components/heading/Heading";
import Partners from "./home/components/partners/Partners";
import Reviews from "./home/components/reviews/Reviews";
import Hero from "./home/Hero";

export default function Home() {
  return (
    <section>
      <Hero />
      <Heading />
      <Cards />
      <CountUpSection />
      <CustomDesign />
      <Benefits />
      <Clients />
      <Reviews />
      <Partners />
      <ChooseUs />
      <FAQs />
    </section>
  );
}