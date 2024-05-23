import { StyledLink } from "@/ui/shared/links/styled-link";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.blocksection}>
        <h1 className={styles.heading}>FEED</h1>
        <StyledLink />
        <h2 className={styles.heading}>ALMA</h2>
      </section>
    </main>
  );
}
