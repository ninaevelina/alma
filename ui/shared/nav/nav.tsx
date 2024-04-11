import NavLinks from "./nav-links";
import styles from "./nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <NavLinks />
    </nav>
  );
}
