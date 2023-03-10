import styles from "@/styles/components/Navigation.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const Navigation = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <nav className={styles.navigationBar}>
    <ul className={styles.navigationList}>
      <li className={styles.navigationListItem}>
        <Link href="/" className={currentRoute === '/' ? styles.active : ''}>Home</Link>
      </li>
      <li className={styles.navigationListItem}>
        <Link href="/projects" className={currentRoute === '/projects' ? styles.active : ''}>Projects</Link>
      </li>
      <li className={styles.navigationListItem}>
        <Link href="/blog">Blogs</Link>
      </li>
    </ul>
  </nav>
  )
};

export default Navigation;