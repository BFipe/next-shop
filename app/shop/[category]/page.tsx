import { ServerResponse } from "@/app/api/routesTypes";
import { BaseProduct, Category } from "@/src/_data/dataTypes";
import { DynamicRouteParams } from "@/src/common/interfaces";
import ProductCard from "@/src/components/shop/[category]/ProductCards/ProductCard";
import { notFound } from "next/navigation";
import styles from "./page.module.scss";

export async function generateStaticParams() {
  try {
    const categories: ServerResponse<Array<Category>> = await fetch(
      "https://next-shop-fawn.vercel.app/api/sop",
      { method: "GET" }
    ).then((data) => data.json());

    const staticParams = categories.data?.map((category) => {
      return { category: category.urlPath };
    });

    return staticParams;
  } catch (_error) {
    return [];
  }
}

export default async function Products({
  params: { category },
}: DynamicRouteParams<true, "category">) {
  const products: ServerResponse<Array<BaseProduct>> = await fetch(
    `https://next-shop-fawn.vercel.app/api/shop/${category}`
  ).then((data) => data.json());

  if (products.status === 404 || products.data === null) notFound();

  return (
    <div className={styles.products}>
      {products.data.map((product) => {
        return <ProductCard product={product} key={product.id} />;
      })}
    </div>
  );
}
