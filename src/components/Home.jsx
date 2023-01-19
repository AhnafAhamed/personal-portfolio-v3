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
            Front-end developer with 2+ years of experience in building web
            applications.
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
        <Link href="https://twitter.com/ahnfahmd">
        <Twitter />
        </Link>
        <Link href="https://www.linkedin.com/in/ahnafahamed">
        <Linkedin />
        </Link>
        <Link href="https://github.com/AhnafAhamed">
        <Github />
        </Link>
      </div>
    </div>
  );
};

export default Home;
