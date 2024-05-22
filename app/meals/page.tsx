import Button from "@/ui/meals/button/button";
import styles from "./page.module.scss";
import FeedForm from "@/ui/meals/form/feed-form";

export default async function Page() {
  return (
    <>
      <section className={styles.column}>
        <Button />
        <FeedForm />
      </section>
    </>
  );
}
