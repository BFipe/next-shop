import ClientDevTools from "@/src/components/ClientDevTools";
import styles from "./page.module.scss";

export default async function Home() {
  return (
    <main className={styles.home}>
      <h1>Hello world BFipe!</h1>
      <p>
        <ClientDevTools />
      </p>
    </main>
  );
}
