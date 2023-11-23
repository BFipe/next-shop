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
  resolution: string;
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
  CPU: string;
  RAM: string;
  RAMGB: number;
};

export type Camera = BaseProduct & {
  cameraType: string;
  matrixResolution: number;
  matrixType: string;
  pictureResolution: string;
};

export type Console = BaseProduct & {
  maxResolution: string;
  storageCapacityGB: number;
  CPU: string;
  RAM: string;
  RAMGB: number;
  tvConnectionType: string;
};

export type Headphones = BaseProduct & {
  type: string;
  wireless: boolean;
};
