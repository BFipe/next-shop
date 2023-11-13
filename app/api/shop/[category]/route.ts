import { Televisions } from "@/app/_data/_mockData";
import { BaseProduct } from "@/app/_data/dataTypes";
import { DynamicServerRouteParams } from "@/app/common/interfaces";
import { NextResponse } from "next/server";

type mockedProductsData = {
  isSuccess: boolean;
  data: Array<BaseProduct> | null;
};

type categoriesGetResponse = {
  info: string;
  status: number;
  data: any;
};

const getDataByRoute = (route: string): mockedProductsData => {
  switch (route) {
    case "television":
      return {
        isSuccess: true,
        data: Televisions,
      };

    default:
      return {
        isSuccess: false,
        data: null,
      };
  }
};

export async function GET(
  request: Request,
  context: DynamicServerRouteParams<true, "category">
) {
  await new Promise((res) => setTimeout(res, Math.floor(Math.random() * 500)));

  const result = getDataByRoute(context.params.category);

  let response: categoriesGetResponse = {
    info: "",
    status: result.data ? 200 : 404,
    data: result.data,
  };

  if (!result.data) {
    if (result.isSuccess) {
      response.info = "Products in that category is not found";
    } else {
      response.info = "That category doesn't exist";
    }
  }

  return NextResponse.json(response, { status: response.status });
}
