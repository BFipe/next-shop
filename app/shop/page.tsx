import { Category } from "@/src/_data/dataTypes";
import { notFound } from "next/navigation";
import { ServerResponse } from "../api/routesTypes";
import styles from "./page.module.scss";
import CategoryCard from "@/src/components/shop/CategoryCard/CategoryCard";

export default async function Shop() {
  const fetchedData = await fetch(
    "https://next-shop-fawn.vercel.app/api/shop",
    { method: "GET" }
  );
  const response = await fetchedData.json();
  const data: ServerResponse<Array<Category>> = response;

  if (data.status === 404 || data.data === null) notFound();

  return (
    <div className={styles.categories}>
      {data.data.map((category) => {
        return <CategoryCard key={category.id} category={category} />;
      })}
    </div>
  );
}
