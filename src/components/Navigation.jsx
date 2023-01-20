import styles from "@/styles/components/Navigation.module.css";
import Link from "next/link";

const Navigation = () => (
  <nav className={styles.navigationBar}>
    <ul className={styles.navigationList}>
      <li className={styles.navigationListItem}>
        <Link href="/">Home</Link>
      </li>
      <li className={styles.navigationListItem}>
        <Link href="/about">About</Link>
      </li>
      <li className={styles.navigationListItem}>
        <Link href="/contact">Contact</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;