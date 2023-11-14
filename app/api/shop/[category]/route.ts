import {
  Cameras,
  Consoles,
  Headphones,
  Laptops,
  Smartphones,
  Televisions,
} from "@/app/_data/_mockData";
import { BaseProduct } from "@/app/_data/dataTypes";
import { DynamicServerRouteParams } from "@/app/common/interfaces";
import { NextResponse } from "next/server";
import { CategoriesGetResponse } from "../../routesTypes";

type mockedProductsData = {
  isSuccess: boolean;
  data: Array<BaseProduct> | null;
};

const getDataByRoute = (route: string): mockedProductsData => {
  switch (route) {
    case "televisions":
      return {
        isSuccess: true,
        data: Televisions,
      };
    case "smartphones":
      return {
        isSuccess: true,
        data: Smartphones,
      };
    case "laptops":
      return {
        isSuccess: true,
        data: Laptops,
      };
    case "cameras":
      return {
        isSuccess: true,
        data: Cameras,
      };
    case "consoles":
      return {
        isSuccess: true,
        data: Consoles,
      };
    case "headphones":
      return {
        isSuccess: true,
        data: Headphones,
      };

    //Всегда будет выдавать null, нужна для
    //отображения страницы при отсутствии товаров
    case "refrigerators":
      return {
        isSuccess: true,
        data: null,
      };
    default:
      return {
        isSuccess: false,
        data: null,
      };
  }
};

export async function GET(
  _request: Request,
  context: DynamicServerRouteParams<true, "category">
) {
  await new Promise((res) => setTimeout(res, Math.floor(Math.random() * 500)));

  const result = getDataByRoute(context.params.category);

  let response: CategoriesGetResponse = {
    info: "",
    status: result.data ? 200 : 404,
    data: result.data,
  };

  if (!result.data) {
    if (result.isSuccess) {
      response.info = "Products in that category is not found";
    } else {
      response.info = "This category does not exist";
    }
  }

  return NextResponse.json(response, { status: response.status });
}
