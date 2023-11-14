//General types
export type BaseInfo = {
  id: string;
  name: string;
  title: string;
  imageUrl: string;
};

export type BaseProduct = BaseInfo & {
  description: string;
  manufacturer: string;
  price: number;
  rating: number;
};

export type Category = BaseInfo & {
  urlPath: string;
};

//Product types

export type Television = BaseProduct & {
  screenSize: number;
  resolution: [number, number];
  displayType: "LED" | "OLED" | "LCD" | "Plasma" | "QLED";
};

export type Smartphone = BaseProduct & {
  screenSize: number;
  operatingSystem: string;
  storageCapacityGB: number;
  RAMGB: number;
  batteryCapacitymAh: number;
};

export type Laptop = BaseProduct & {
  screenSize: number;
  operatingSystem: string;
  storageCapacityGB: number;
  RAMGB: number;
  CPU: string;
  RAM: string;
};

export type Camera = BaseProduct & {
  cameraType: string;
  matrixResolution: number;
  matrixType: string;
  pictureResolution: [number, number];
};
