import { Category, Television } from "./dataTypes";

//Mock data

export const Categories: Array<Category> = [
  {
    id: "1",
    name: "Televisions",
    urlPath: "televisions",
    title: "Advanced display technology for home entertainment.",
    imageUrl: "",
  },
  {
    id: "2",
    name: "Smartphones",
    urlPath: "smartphones",
    title: "High-performance mobile communication devices.",
    imageUrl: "",
  },
  {
    id: "3",
    name: "Laptops",
    urlPath: "laptops",
    title: "Portable computers for work and entertainment on the go.",
    imageUrl: "",
  },
  {
    id: "4",
    name: "Cameras",
    urlPath: "cameras",
    title: "Capture moments with cutting-edge imaging technology.",
    imageUrl: "",
  },
  {
    id: "5",
    name: "Consoles",
    urlPath: "consoles",
    title: "Immersive gaming experiences for enthusiasts.",
    imageUrl: "",
  },
  {
    id: "6",
    name: "Smart Watches",
    urlPath: "smart-watches",
    title: "Wearable devices for convenient and connected lifestyles.",
    imageUrl: "",
  },
  {
    id: "7",
    name: "Drones",
    urlPath: "drones",
    title: "Unmanned aerial vehicles for aerial photography and more.",
    imageUrl: "",
  },
  {
    id: "8",
    name: "Headphones",
    urlPath: "headphones",
    title:
      "High-quality audio accessories for an immersive listening experience.",
    imageUrl: "",
  },
  {
    id: "9",
    name: "Vacuum Cleaners",
    urlPath: "vacuum-cleaners",
    title: "Effortless cleaning with smart and automated vacuum technology.",
    imageUrl: "",
  },
];

export const Televisions: Array<Television> = [
  {
    id: "1",
    name: "Xiaomi TV Q2 55",
    title:
      '55" 3840x2160 (4K UHD), частота матрицы 60 Гц, Smart TV (Android TV), HDR, Wi-Fi',
    imageUrl:
      "https://content2.onliner.by/catalog/device/header/72682392b1074206072fa5c8d3742d60.jpeg",
    description:
      'Xiaomi TV Q2 55" - 55-дюймовый телевизор с разрешением 4K UHD, частотой матрицы 60 Гц. Оснащен Smart TV (Android TV) для доступа к разнообразным контентам, поддерживает HDR, а также обладает функцией Wi-Fi для удобного подключения к интернету.',
    price: 2128.98,
    rating: 9,
    screenSize: 55,
    displayType: "LCD",
    manufacturer: "Xiaomi",
    resolution: [3840, 2160],
  },
  {
    id: "2",
    name: "Samsung QLED Q70B",
    title:
      '65" 3840x2160 (4K UHD), частота матрицы 120 Гц, индекс динамичных сцен 3400, Smart TV (Samsung Tizen), HDR, Wi-Fi',
    imageUrl:
      "https://content2.onliner.by/catalog/device/header/dda47c77a4ff1fe96fd31845ee130398.jpeg",
    description:
      'Samsung QLED Q70B" - 55-дюймовый телевизор с разрешением 4K UHD и частотой матрицы 120 Гц. Имеет высокий индекс динамичных сцен в 3400, поддерживает Smart TV с операционной системой Samsung Tizen для интеллектуального контента. Также обеспечивает HDR и подключение к интернету через Wi-Fi.',
    price: 2999,
    rating: 8,
    screenSize: 65,
    displayType: "LCD",
    manufacturer: "Samsung",
    resolution: [3840, 2160],
  },
  {
    id: "3",
    name: "LG G3 OLED",
    title:
      '75" 3840x2160 (4K UHD), матрица OLED, частота матрицы 120 Гц, Smart TV (LG webOS), HDR, Wi-Fi',
    imageUrl:
      "https://content2.onliner.by/catalog/device/header/682c7a43471db540595b531db945fe17.jpeg",
    description:
      "Я устал придумывать описание, поэтому в дальнейших описаниях везде будет лорем ипсум. Спасибо за понимание.",
    price: 13500,
    rating: 8,
    screenSize: 75,
    displayType: "OLED",
    manufacturer: "LG",
    resolution: [3840, 2160],
  },
  {
    id: "4",
    name: "LG G3 OLED",
    title:
      '55" 3840x2160 (4K UHD), частота матрицы 60 Гц, Smart TV (LG webOS), HDR, Wi-Fi',
    imageUrl:
      "https://content2.onliner.by/catalog/device/header/1b7897dcf5a4c4b7b4287b256d3630c2.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 1903.14,
    rating: 7,
    screenSize: 55,
    displayType: "LCD",
    manufacturer: "LG",
    resolution: [3840, 2160],
  },
  {
    id: "5",
    name: "TECHNO Smart KD",
    title:
      '32" 1366x768 (HD), матрица VA, частота матрицы 60 Гц, индекс динамичных сцен 600, Smart TV (Android TV), Wi-Fi',
    imageUrl:
      "https://content2.onliner.by/catalog/device/header/4073ce14131bd8fce6eb528f8ad2a923.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 499,
    rating: 5,
    screenSize: 32,
    displayType: "LCD",
    manufacturer: "TECHNO",
    resolution: [1366, 768],
  },
  {
    id: "6",
    name: "Evolution WOS32",
    title:
      '32" 1366x768 (HD), частота матрицы 60 Гц, Smart TV (LG webOS), Wi-Fi',
    imageUrl:
      "https://content2.onliner.by/catalog/device/header/4073ce14131bd8fce6eb528f8ad2a923.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 600.36,
    rating: 6,
    screenSize: 32,
    displayType: "LCD",
    manufacturer: "Evolution",
    resolution: [1366, 768],
  },
  {
    id: "7",
    name: "KIVI 24H7",
    title:
      '24" 1366x768 (HD), матрица VA, частота матрицы 60 Гц, Smart TV (Android TV), Wi-Fi',
    imageUrl:
      "https://content2.onliner.by/catalog/device/header/2861b13d2345ab3fab153feaea4de8f0.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 549,
    rating: 7,
    screenSize: 24,
    displayType: "LCD",
    manufacturer: "KIVI",
    resolution: [1366, 768],
  },
];
