import NavLinks from "./nav-links";
import styles from "./nav.module.scss";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <NavLinks />
    </nav>
  );
}
