import { Category, Laptop, Smartphone, Television } from "./dataTypes";

//Mock data

//Результат выдачи на /api/shop
//Список категорий на основе которых формируются дальнейшие пути
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

//Результат выдачи на /api/shop/televisions
//Список из телевизоров
//
//Также выдается при вызове /api/shop/televisions/[id]
//И затем фильтруется по id
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

//Результат выдачи на /api/shop/smartphones
//Список из телефонов
//
//Также выдается при вызове /api/shop/smartphones/[id]
//И затем фильтруется по id

export const Smartphones: Array<Smartphone> = [
  {
    id: "1",
    title:
      'Android, экран 6.67" AMOLED (1080x2400) 120 Гц, Qualcomm Snapdragon 7+ Gen 2, ОЗУ 12 ГБ, память 256 ГБ, камера 64 Мп, аккумулятор 5000 мАч, 2 SIM (nano-SIM), влагозащита IP53',
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "POCO F5",
    imageUrl:
      "https://content2.onliner.by/catalog/device/header/abe909de42d62c1b0fba1e7df5b956e5.jpeg",
    manufacturer: "POCO",
    price: 1414,
    rating: 10,
    screenSize: 6.67,
    operatingSystem: "Android",
    storageCapacityGB: 256,
    RAMGB: 12,
    batteryCapacitymAh: 5000,
  },
  {
    id: "2",
    title:
      'Android, экран 6.56" IPS (720x1612) 90 Гц, UniSoC Tiger T606, ОЗУ 8 ГБ, память 128 ГБ, поддержка карт памяти, камера 13 Мп, аккумулятор 5000 мАч, 2 SIM (nano-SIM)',
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Infinix Hot 30i",
    imageUrl:
      "https://content2.onliner.by/catalog/device/header/61cf5532a4a85446a1bcae7203ab90f8.jpeg",
    manufacturer: "Infinix",
    price: 405.9,
    rating: 7,
    screenSize: 6.56,
    operatingSystem: "Android",
    storageCapacityGB: 128,
    RAMGB: 8,
    batteryCapacitymAh: 5000,
  },
  {
    id: "3",
    title:
      'Android, экран 6.78" IPS (1080x2460) 120 Гц, Mediatek Helio G99, ОЗУ 8 ГБ, память 128 ГБ, поддержка карт памяти, камера 64 Мп, аккумулятор 5000 мАч, 2 SIM (nano-SIM), влагозащита IP53',
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Infinix Note 30",
    imageUrl:
      "https://content2.onliner.by/catalog/device/header/98cd0414f8f1aa91dbe0f035e3416ff2.jpeg",
    manufacturer: "Infinix",
    price: 579,
    rating: 8,
    screenSize: 6.78,
    operatingSystem: "Android",
    storageCapacityGB: 128,
    RAMGB: 8,
    batteryCapacitymAh: 5000,
  },
  {
    id: "4",
    title:
      'Apple iOS, экран 6.7" OLED (1290x2796) 120 Гц, Apple A16 Bionic, ОЗУ 6 ГБ, память 128 ГБ, камера 48 Мп, аккумулятор 4323 мАч, 1 SIM (nano-SIM/eSIM), влагозащита IP68',
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Apple iPhone 14 Pro Max",
    imageUrl:
      "https://content2.onliner.by/catalog/device/header/6fb2af9b7c88c0647e3b09f1ebacdb7b.jpeg",
    manufacturer: "Apple",
    price: 4099,
    rating: 10,
    screenSize: 6.7,
    operatingSystem: "iOS",
    storageCapacityGB: 128,
    RAMGB: 6,
    batteryCapacitymAh: 4323,
  },
  {
    id: "5",
    title:
      'Android, экран 6.4" AMOLED (1080x2340) 120 Гц, Exynos 1380, ОЗУ 8 ГБ, память 256 ГБ, поддержка карт памяти, камера 50 Мп, аккумулятор 5000 мАч, 2 SIM (nano-SIM), влагозащита IP67',
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Samsung Galaxy A54 5G",
    imageUrl:
      "https://content2.onliner.by/catalog/device/header/99c91ac0601efde6e7387bbeaae6c012.jpeg",
    manufacturer: "Android",
    price: 1355,
    rating: 9,
    screenSize: 6.4,
    operatingSystem: "Android",
    storageCapacityGB: 256,
    RAMGB: 8,
    batteryCapacitymAh: 5000,
  },
  {
    id: "6",
    title:
      'Apple iOS, экран 6.1" IPS (828x1792), Apple A13 Bionic, ОЗУ 4 ГБ, память 64 ГБ, камера 12 Мп, аккумулятор 3046 мАч, 1 SIM (nano-SIM/eSIM), влагозащита IP68',
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Apple iPhone 11 64GB",
    imageUrl:
      "https://content2.onliner.by/catalog/device/header/e2189f90f9088975c553ec33431fc186.jpeg",
    manufacturer: "Apple",
    price: 1670,
    rating: 9,
    screenSize: 6.1,
    operatingSystem: "iOS",
    storageCapacityGB: 64,
    RAMGB: 4,
    batteryCapacitymAh: 3046,
  },
];

//Результат выдачи на /api/shop/laptops
//Список из телефонов
//
//Также выдается при вызове /api/shop/laptops/[id]
//И затем фильтруется по id

export const Laptops: Array<Laptop> = [
  {
    id: "1",
    name: "Lenovo IdeaPad 1 15IAU7",
    title:
      '15.6" 1920 x 1080, IPS, 60 Гц, Intel Pentium Gold 8505, 8 ГБ DDR4, SSD 256 ГБ, видеокарта встроенная, без ОС, цвет крышки серый, аккумулятор 42 Вт·ч',
    imageUrl:
      "https://content2.onliner.by/catalog/device/header/06621475af1c45f9432afdfbad11bde2.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    manufacturer: "Lenovo",
    price: 1497,
    rating: 7,
    screenSize: 15.6,
    operatingSystem: "Windows 11",
    storageCapacityGB: 256,
    RAMGB: 8,
    RAM: "DDR4 3200 МГц",
    CPU: "Intel Pentium Gold 8505",
  },
  {
    id: "2",
    name: "Maibenben x Mechrevo X558",
    title:
      '15.6" 1920 x 1080, IPS, 144 Гц, AMD Ryzen 7 5800H, 16 ГБ DDR4, SSD 1024 ГБ, видеокарта NVIDIA GeForce RTX 3060 6 ГБ (TGP 130 Вт), Linux, цвет крышки серый, аккумулятор 46.7 Вт·ч',
    imageUrl:
      "https://content2.onliner.by/catalog/device/header/25bdd9c7747dfaafffc106a2cd9dab9e.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    manufacturer: "Maibenben",
    price: 3280,
    rating: 8,
    screenSize: 15.6,
    operatingSystem: "Windows 11",
    storageCapacityGB: 1024,
    RAMGB: 16,
    CPU: "AMD Ryzen 7 5800H",
    RAM: "DDR4 3200 МГц",
  },
  {
    id: "3",
    name: "Huawei MateBook D 15",
    title:
      '15.6" 1920 x 1080, IPS, 60 Гц, Intel Core i5 1155G7, 8 ГБ DDR4, SSD 256 ГБ, видеокарта встроенная, Windows 11, цвет крышки серый, аккумулятор 42 Вт·ч',
    imageUrl:
      "https://content2.onliner.by/catalog/device/header/4676df026a785edcdbfb2b56d31ba43f.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    manufacturer: "Huawei",
    price: 1999,
    rating: 10,
    screenSize: 15.6,
    operatingSystem: "Windows 11",
    storageCapacityGB: 256,
    RAMGB: 8,
    CPU: "Intel Core i5 1155G7",
    RAM: "DDR4 3200 МГц",
  },
  {
    id: "4",
    name: "Lenovo IdeaPad Slim 5",
    title:
      '16.0" 2560 x 1600, IPS, 60 Гц, AMD Ryzen 5 7530U, 16 ГБ DDR4, SSD 512 ГБ, видеокарта встроенная, без ОС, цвет крышки серый, аккумулятор 56.6 Вт·ч',
    imageUrl:
      "https://content2.onliner.by/catalog/device/header/ed52fb757a34669f3e914b52eb1496c4.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    manufacturer: "Lenovo",
    price: 2590,
    rating: 7,
    screenSize: 16,
    operatingSystem: "no OS",
    storageCapacityGB: 512,
    RAMGB: 16,
    CPU: "AMD Ryzen 5 7530U",
    RAM: "DDR4 3200 МГц",
  },
  {
    id: "5",
    name: "Acer Aspire 3",
    title:
      '15.6" 1920 x 1080, IPS, 60 Гц, Intel Core i3 1115G4, 8 ГБ DDR4, SSD 512 ГБ, видеокарта встроенная, Windows 11, цвет крышки серебристый, аккумулятор 36.7 Вт·ч',
    imageUrl:
      "https://content2.onliner.by/catalog/device/header/5cc8c3cb5e059980b9421ca7db0cfe54.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    manufacturer: "Acer",
    price: 1445,
    rating: 8,
    screenSize: 15.6,
    operatingSystem: "Windows 11",
    storageCapacityGB: 512,
    RAMGB: 8,
    CPU: "Intel Core i3 1115G4",
    RAM: "DDR4 3200 МГц",
  },
  {
    id: "6",
    name: 'Apple Macbook Air 15"',
    title:
      "15.3 2880 x 1864, IPS, 60 Гц, Apple M2, 8 ГБ, SSD 256 ГБ, видеокарта встроенная, Mac OS, цвет крышки серебристый, аккумулятор 66.5 Вт·ч",
    imageUrl:
      "https://content2.onliner.by/catalog/device/header/dbcc352090b0a5e348bd1b9a0327ddb5.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    manufacturer: "Apple",
    price: 4545,
    rating: 10,
    screenSize: 15,
    operatingSystem: "Mac OS",
    storageCapacityGB: 256,
    RAMGB: 8,
    CPU: "Apple M2",
    RAM: "DDR4 3200 МГц",
  },
  {
    id: "7",
    name: 'Apple Macbook Pro 14"',
    title:
      '14.2" 3024 x 1964, IPS, 120 Гц, Apple M2 Pro (10 ядер), 16 ГБ, SSD 512 ГБ, видеокарта встроенная, Mac OS, цвет крышки серый, аккумулятор 70 Вт·ч',
    imageUrl:
      "https://content2.onliner.by/catalog/device/header/803784462861fa2a37451fe1b6c2ad30.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    manufacturer: "Apple",
    price: 7400,
    rating: 10,
    screenSize: 14.2,
    operatingSystem: "Mac OS",
    storageCapacityGB: 512,
    RAMGB: 16,
    CPU: "Apple M2 Pro",
    RAM: "DDR4 3200 МГц",
  },
  {
    id: "8",
    name: "IRBIS NB500",
    title:
      '13.3" 1920 x 1080, IPS, 60 Гц, сенсорный, Intel Celeron N3350, 3 ГБ DDR4, eMMC 32 ГБ, видеокарта встроенная, Windows 10 Pro, цвет крышки серебристый',
    imageUrl:
      "https://content2.onliner.by/catalog/device/header/fbd33ddeff4fed0c8e010303e1c76178.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    manufacturer: "IRBIS",
    price: 0,
    rating: 0,
    screenSize: 13.3,
    operatingSystem: "Windows 10 Pro",
    storageCapacityGB: 32,
    RAMGB: 3,
    CPU: "Intel Celeron N3350",
    RAM: "DDR4 2100 МГц",
  },
];
