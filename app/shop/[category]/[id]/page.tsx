import { ServerResponse } from "@/app/api/routesTypes";
import { BaseProduct } from "@/src/_data/dataTypes";
import { DynamicRouteParams } from "@/src/common/interfaces";
import ProductPage from "@/src/components/shop/[category]/[id]/ProductPage/ProductPage";
import { notFound } from "next/navigation";

export default async function Product({
  params: { category, id },
}: DynamicRouteParams<true, "category" | "id">) {
  const response: ServerResponse<BaseProduct> = await fetch(
    `https://next-shop-fawn.vercel.app/api/shop/${category}/${id}`,
    { method: "GET" }
  ).then((data) => data.json());

  if (response.status === 404 || !response.data) {
    notFound();
  }

  return (
    <div>
      <ProductPage product={response.data} />
    </div>
  );
}
