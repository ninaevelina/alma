import Status from "@/ui/meals/status/status";
import styles from "./page.module.scss";
import FeedForm from "@/ui/meals/form/feed-form";
import FoodTracker from "@/ui/meals/food-tracker/food-tracker";

export default async function Page() {
  return (
    <>
      <section className={styles.grid}>
        <FeedForm />
        <Status />
      </section>
      <FoodTracker />
    </>
  );
}
