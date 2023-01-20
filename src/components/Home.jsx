import styles from "@/styles/components/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import ahnafImage from "../images/ahnaf.jpg";
import Twitter from "./icons/Twitter";
import Linkedin from "./icons/Linkedin";
import Github from "./icons/Github";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.introduction}>
        <div className={styles.info}>
          <h1 className={styles.name}>Ahnaf Ahamed</h1>
          <h2 className={styles.title}>
            Front-end Developer at <span>MacroActive</span> |{" "}
            <span>Freelancer</span>
          </h2>
          <p className={styles.description}>
            If you are looking for a front-end developer with the skills and
            experience to help you build your next sass or website, I would love
            to hear from you.
            <br />
            <br />
            Please feel free to take a look around my portfolio and don&apos;t
            hesitate to contact me if you have any questions or if you would
            like to discuss your next project.
          </p>
        </div>
        <Image
          src={ahnafImage}
          className={styles.image}
          width={250}
          height={250}
          alt="Ahnaf Ahamed"
        />
      </div>

      <div className={styles.socialIcons}>
        <Link
          className={styles.iconWrapper}
          href="https://github.com/AhnafAhamed"
        >
          <Github />
        </Link>
        <Link
          className={styles.iconWrapper}
          href="https://www.linkedin.com/in/ahnafahamed"
        >
          <Linkedin />
        </Link>
        <Link
          className={styles.iconWrapper}
          href="https://twitter.com/ahnfahmd"
        >
          <Twitter />
        </Link>
      </div>

      <Link className={styles.cta} href="/contact">Hire Me</Link>
    </div>
  );
};

export default Home;
