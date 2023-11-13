//General types
export type BaseInfo = {
  id: string;
  name: string;
  title: string;
  imageUrl: string;
};

export type BaseProduct = BaseInfo & {
  description: string;
  price: number;
  rating: number;
};

export type Category = BaseInfo & {
  urlPath: string;
};

//Product types

export type Television = BaseProduct & {
  manufacturer: string;
  screenSize: number;
  resolution: [number, number];
  displayType: "LED" | "OLED" | "LCD" | "Plasma" | "QLED";
};
