import { DynamicServerRouteParams } from "@/app/common/interfaces";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  route: DynamicServerRouteParams<true, "shop">
) {
  return NextResponse.json(route.params.shop);
}
