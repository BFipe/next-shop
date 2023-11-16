import { ServerResponse } from "@/app/api/routesTypes";
import { BaseProduct } from "@/src/_data/dataTypes";
import { DynamicServerRouteParams } from "@/src/common/interfaces";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  context: DynamicServerRouteParams<true, "category" | "productId">
) {
  const origin = request.nextUrl.origin;

  let response: ServerResponse<BaseProduct> = {
    data: null,
    info: "Product is not found",
    status: 404,
  };

  try {
    const productsRequest = await fetch(
      `${origin}/api/shop/${context.params.category}`
    );

    const productsJsonData = await productsRequest.json();
    const productsData: ServerResponse<Array<BaseProduct>> = productsJsonData;

    const products = productsData.data;

    if (!products || productsData.status == 404) {
      return NextResponse.json(response, { status: response.status });
    }

    const product = products.find(
      (item) => item.id == context.params.productId
    );

    if (!product) {
      return NextResponse.json(response, { status: response.status });
    }

    response = {
      data: product,
      info: "",
      status: 200,
    };

    return NextResponse.json(response, { status: response.status });
  } catch (_error) {
    response = {
      data: null,
      status: 500,
      info: "Server error",
    };

    return NextResponse.json(response, { status: response.status });
  }
}
