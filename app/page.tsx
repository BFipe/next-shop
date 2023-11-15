import SimpleCounter from "./components/SimpleCounter";
import { Italiana } from "next/font/google";

export default async function Home() {
  return (
    <main>
      <p>Hello world BFipe!</p>
      <p>
        <SimpleCounter />
      </p>
    </main>
  );
}
