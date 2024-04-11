import Button from "@/ui/meals/button/button";
import Status from "@/ui/meals/status/status";
import styles from "./page.module.css";

export default async function Page() {
  return (
    <>
      <section className={styles.column}>
        <Status />
        <Button />
      </section>
    </>
  );
}
