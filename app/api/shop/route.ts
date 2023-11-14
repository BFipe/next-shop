import { Categories } from "@/app/_data/_mockData";
import { NextResponse } from "next/server";

export async function GET() {
  //Искусственная задержка для имитации ответа с сервера
  await new Promise((res) => setTimeout(res, Math.floor(Math.random() * 500)));

  return NextResponse.json(Categories);
}
