import ChooseUs from "../home/components/chooseus/Choosesus";
import Reviews from "../home/components/reviews/Reviews";
import Aboutus from "./about/Aboutus";
import Ourvalues from "./ourvalues/Ourvalues";
import styles from "./About.module.css";
import withBasePath from "../utils/withBasePath"; // ✅ helper

export default function About() {
  const backgroundImage = withBasePath("/assets/background/Aboutus_Elevator2.jpeg");

  return (
    <section
      className={styles.aboutSection}
      style={{ backgroundImage: `url(${backgroundImage})` }} // ✅ inline style
    >
      <div className={styles.overlay}>
        <Aboutus />
        <Ourvalues />
        <Reviews />
        <ChooseUs />
      </div>
    </section>
  );
}
