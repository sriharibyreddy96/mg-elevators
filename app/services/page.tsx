import Emergency from "../contact/emergency/Emergency";
import Goal from "./goals/Goal";
import ServiceHero from "./serviceshero/ServiceHero";
import ServiceTypes from "./servicetypes/ServiceTypes";

export default function Services() {
  return (
    <section>
      <ServiceHero />
      <ServiceTypes />
      <Emergency />
      <Goal />
    </section>
  );
}
