import SimpleCounter from "./components/SimpleCounter";
import styles from "./page.module.scss";

export default async function Home() {
  return (
    <main className={styles.home}>
      <h1>Hello world BFipe!</h1>
      <p>
        <SimpleCounter />
      </p>
    </main>
  );
}
