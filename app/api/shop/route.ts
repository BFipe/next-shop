import { Categories } from "@/src/_data/_mockData";
import { Category } from "@/src/_data/dataTypes";
import { NextResponse } from "next/server";
import { ServerResponse } from "../routesTypes";

export async function GET() {
  //Искусственная задержка для имитации ответа с сервера
  await new Promise((res) => setTimeout(res, Math.floor(Math.random() * 500)));

  const serverResponse: ServerResponse<Array<Category>> = {
    status: 200,
    data: Categories,
    info: "",
  };

  return NextResponse.json(serverResponse);
}
