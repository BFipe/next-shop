import { BaseProduct } from "../_data/dataTypes";

export type ProductGetResponse = {
  info: string;
  status: number;
  data: BaseProduct | null;
};

export type CategoriesGetResponse = {
  info: string;
  status: number;
  data: Array<BaseProduct> | null;
};
