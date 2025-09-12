import ChooseUs from "../home/components/chooseus/Choosesus";
import Reviews from "../home/components/reviews/Reviews";
import Aboutus from "./about/Aboutus";
import Ourvalues from "./ourvalues/Ourvalues";
import styles from "./About.module.css"; // 👈 add CSS module

export default function About() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.overlay}>
        <Aboutus />
        <Ourvalues />
        <Reviews />
        <ChooseUs />
      </div>
    </section>
  );
}
