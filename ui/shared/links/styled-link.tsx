import Link from "next/link";
import styles from "./styledLink.module.scss";

export const StyledLink = () => {
  return (
    <Link href={"/meals"} className={styles.styledLink}>
      Let&apos;s get started
    </Link>
  );
};
