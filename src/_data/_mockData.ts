import {
  Camera,
  Category,
  Console,
  Headphones as HeadphonesType,
  Laptop,
  Smartphone,
  Television,
} from "./dataTypes";

//_____________Дисклеймер_____________
// Из-за того, что это моковые данные,
// можно допустить некоторые методы
// обработки данных.
//
// Например, вытягивать все данные
// без пагинации или фильтровать
// из кучи объект по id.
//
// На реальном проекте такое делать
// недопустимо, но из-за ограниченых
// возможностей и ресурсов на данном
// проекте используются "плохие"
// методы работы с данными.
//
// Также на некоторых методах добавлена
// искуственная задержка через Promise

//Результат выдачи на /api/shop
//Список категорий на основе которых формируются дальнейшие пути
export const Categories: Array<Category> = [
  {
    id: "1",
    name: "Televisions",
    urlPath: "televisions",
    title: "Advanced display technology for home entertainment.",
    imageUrl:
      "https://content2.onliner.by/catalog/device/header/72682392b1074206072fa5c8d3742d60.jpeg",
  },
  {
    id: "2",
    name: "Smartphones",
    urlPath: "smartphones",
    title: "High-performance mobile communication devices.",
    imageUrl:
      "https://content2.onliner.by/catalog/device/header/c66db6b4c5cce1915eadd8bb59f5c527.jpeg",
  },
  {
    id: "3",
    name: "Laptops",
    urlPath: "laptops",
    title: "Portable computers for work and entertainment on the go.",
    imageUrl:
      "https://content2.onliner.by/catalog/device/header/c6d73e662f81d52c7bc94a9056bdf0ca.jpeg",
  },
  {
    id: "4",
    name: "Cameras",
    urlPath: "cameras",
    title: "Capture moments with cutting-edge imaging technology.",
    imageUrl:
      "https://content2.onliner.by/catalog/device/header/ce773521ac2069e9090d3ccb29fedffe.jpeg",
  },
  {
    id: "5",
    name: "Consoles",
    urlPath: "consoles",
    title: "Immersive gaming experiences for enthusiasts.",
    imageUrl:
      "https://content2.onliner.by/catalog/device/header/ee5328a0b7a71ccd8f8505c03a739db9.jpeg",
  },
  {
    id: "6",
    name: "Headphones",
    urlPath: "headphones",
    title:
      "High-quality audio accessories for an immersive listening experience.",
    imageUrl:
      "https://content2.onliner.by/catalog/device/header/9fdb7c833aab7fa921691e4dad4f7c3d.jpeg",
  },
  {
    id: "7",
    name: "Refrigerators",
    urlPath: "refrigerators",
    title: "The best refrigerators that freeze to the very core.",
    imageUrl:
      "https://content2.onliner.by/catalog/device/header/5e9138df3146af39b9a2309d1a96b2ed.jpg",
  },
];

//Результат выдачи на /api/shop/televisions
//Список из телевизоров
//
//Также выдается при вызове /api/shop/televisions/[id]
//и затем фильтруется по id
export const Televisions: Array<Television> = [
  {
    id: "11",
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
    resolution: "3840 x 2160",
  },
  {
    id: "12",
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
    resolution: "3840 x 2160",
  },
  {
    id: "13",
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
    resolution: "3840 x 2160",
  },
  {
    id: "14",
    name: "LG NanoCell",
    title:
      '55" 3840x2160 (4K UHD), частота матрицы 60 Гц, Smart TV (LG webOS), HDR, Wi-Fi',
    imageUrl:
      "https://content2.onliner.by/catalog/device/header/1b7897dcf5a4c4b7b4287b256d3630c2.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam est sem, posuere vitae volutpat non, pellentesque in ligula. In malesuada eu erat quis sollicitudin. Pellentesque non leo enim. Aenean nunc purus, consequat et dui nec, porta scelerisque sem. Proin ut tortor cursus, condimentum sem at, imperdiet diam. Aliquam semper sed nisi id tincidunt. Pellentesque vestibulum sem eu pharetra porttitor. Quisque vitae nisi efficitur, placerat tortor quis, volutpat eros.",
    price: 1903.14,
    rating: 7,
    screenSize: 55,
    displayType: "LCD",
    manufacturer: "LG",
    resolution: "3840 x 2160",
  },
  {
    id: "15",
    name: "TECHNO Smart KD",
    title:
      '32" 1366x768 (HD), матрица VA, частота матрицы 60 Гц, индекс динамичных сцен 600, Smart TV (Android TV), Wi-Fi',
    imageUrl:
      "https://content2.onliner.by/catalog/device/header/4073ce14131bd8fce6eb528f8ad2a923.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam est sem, posuere vitae volutpat non, pellentesque in ligula. In malesuada eu erat quis sollicitudin. Pellentesque non leo enim. Aenean nunc purus, consequat et dui nec, porta scelerisque sem. Proin ut tortor cursus, condimentum sem at, imperdiet diam. Aliquam semper sed nisi id tincidunt. Pellentesque vestibulum sem eu pharetra porttitor. Quisque vitae nisi efficitur, placerat tortor quis, volutpat eros.",
    price: 499,
    rating: 5,
    screenSize: 32,
    displayType: "LCD",
    manufacturer: "TECHNO",
    resolution: "1366 x 768",
  },
  {
    id: "16",
    name: "Evolution WOS32",
    title:
      '32" 1366x768 (HD), частота матрицы 60 Гц, Smart TV (LG webOS), Wi-Fi',
    imageUrl:
      "https://content2.onliner.by/catalog/device/header/4073ce14131bd8fce6eb528f8ad2a923.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam est sem, posuere vitae volutpat non, pellentesque in ligula. In malesuada eu erat quis sollicitudin. Pellentesque non leo enim. Aenean nunc purus, consequat et dui nec, porta scelerisque sem. Proin ut tortor cursus, condimentum sem at, imperdiet diam. Aliquam semper sed nisi id tincidunt. Pellentesque vestibulum sem eu pharetra porttitor. Quisque vitae nisi efficitur, placerat tortor quis, volutpat eros.",
    price: 600.36,
    rating: 6,
    screenSize: 32,
    displayType: "LCD",
    manufacturer: "Evolution",
    resolution: "1366 x 768",
  },
  {
    id: "17",
    name: "KIVI 24H7",
    title:
      '24" 1366x768 (HD), матрица VA, частота матрицы 60 Гц, Smart TV (Android TV), Wi-Fi',
    imageUrl:
      "https://content2.onliner.by/catalog/device/header/2861b13d2345ab3fab153feaea4de8f0.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam est sem, posuere vitae volutpat non, pellentesque in ligula. In malesuada eu erat quis sollicitudin. Pellentesque non leo enim. Aenean nunc purus, consequat et dui nec, porta scelerisque sem. Proin ut tortor cursus, condimentum sem at, imperdiet diam. Aliquam semper sed nisi id tincidunt. Pellentesque vestibulum sem eu pharetra porttitor. Quisque vitae nisi efficitur, placerat tortor quis, volutpat eros.",
    price: 549,
    rating: 7,
    screenSize: 24,
    displayType: "LCD",
    manufacturer: "KIVI",
    resolution: "1366 x 768",
  },
];

//Результат выдачи на /api/shop/smartphones
//Список из телефонов
//
//Также выдается при вызове /api/shop/smartphones/[id]
//и затем фильтруется по id

export const Smartphones: Array<Smartphone> = [
  {
    id: "21",
    title:
      'Android, экран 6.67" AMOLED (1080x2400) 120 Гц, Qualcomm Snapdragon 7+ Gen 2, ОЗУ 12 ГБ, память 256 ГБ, камера 64 Мп, аккумулятор 5000 мАч, 2 SIM (nano-SIM), влагозащита IP53',
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam est sem, posuere vitae volutpat non, pellentesque in ligula. In malesuada eu erat quis sollicitudin. Pellentesque non leo enim. Aenean nunc purus, consequat et dui nec, porta scelerisque sem. Proin ut tortor cursus, condimentum sem at, imperdiet diam. Aliquam semper sed nisi id tincidunt. Pellentesque vestibulum sem eu pharetra porttitor. Quisque vitae nisi efficitur, placerat tortor quis, volutpat eros.",
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
    id: "22",
    title:
      'Android, экран 6.56" IPS (720x1612) 90 Гц, UniSoC Tiger T606, ОЗУ 8 ГБ, память 128 ГБ, поддержка карт памяти, камера 13 Мп, аккумулятор 5000 мАч, 2 SIM (nano-SIM)',
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam est sem, posuere vitae volutpat non, pellentesque in ligula. In malesuada eu erat quis sollicitudin. Pellentesque non leo enim. Aenean nunc purus, consequat et dui nec, porta scelerisque sem. Proin ut tortor cursus, condimentum sem at, imperdiet diam. Aliquam semper sed nisi id tincidunt. Pellentesque vestibulum sem eu pharetra porttitor. Quisque vitae nisi efficitur, placerat tortor quis, volutpat eros.",
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
    id: "23",
    title:
      'Android, экран 6.78" IPS (1080x2460) 120 Гц, Mediatek Helio G99, ОЗУ 8 ГБ, память 128 ГБ, поддержка карт памяти, камера 64 Мп, аккумулятор 5000 мАч, 2 SIM (nano-SIM), влагозащита IP53',
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam est sem, posuere vitae volutpat non, pellentesque in ligula. In malesuada eu erat quis sollicitudin. Pellentesque non leo enim. Aenean nunc purus, consequat et dui nec, porta scelerisque sem. Proin ut tortor cursus, condimentum sem at, imperdiet diam. Aliquam semper sed nisi id tincidunt. Pellentesque vestibulum sem eu pharetra porttitor. Quisque vitae nisi efficitur, placerat tortor quis, volutpat eros.",
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
    id: "24",
    title:
      'Apple iOS, экран 6.7" OLED (1290x2796) 120 Гц, Apple A16 Bionic, ОЗУ 6 ГБ, память 128 ГБ, камера 48 Мп, аккумулятор 4323 мАч, 1 SIM (nano-SIM/eSIM), влагозащита IP68',
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam est sem, posuere vitae volutpat non, pellentesque in ligula. In malesuada eu erat quis sollicitudin. Pellentesque non leo enim. Aenean nunc purus, consequat et dui nec, porta scelerisque sem. Proin ut tortor cursus, condimentum sem at, imperdiet diam. Aliquam semper sed nisi id tincidunt. Pellentesque vestibulum sem eu pharetra porttitor. Quisque vitae nisi efficitur, placerat tortor quis, volutpat eros.",
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
    id: "25",
    title:
      'Android, экран 6.4" AMOLED (1080x2340) 120 Гц, Exynos 1380, ОЗУ 8 ГБ, память 256 ГБ, поддержка карт памяти, камера 50 Мп, аккумулятор 5000 мАч, 2 SIM (nano-SIM), влагозащита IP67',
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam est sem, posuere vitae volutpat non, pellentesque in ligula. In malesuada eu erat quis sollicitudin. Pellentesque non leo enim. Aenean nunc purus, consequat et dui nec, porta scelerisque sem. Proin ut tortor cursus, condimentum sem at, imperdiet diam. Aliquam semper sed nisi id tincidunt. Pellentesque vestibulum sem eu pharetra porttitor. Quisque vitae nisi efficitur, placerat tortor quis, volutpat eros.",
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
    id: "26",
    title:
      'Apple iOS, экран 6.1" IPS (828x1792), Apple A13 Bionic, ОЗУ 4 ГБ, память 64 ГБ, камера 12 Мп, аккумулятор 3046 мАч, 1 SIM (nano-SIM/eSIM), влагозащита IP68',
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam est sem, posuere vitae volutpat non, pellentesque in ligula. In malesuada eu erat quis sollicitudin. Pellentesque non leo enim. Aenean nunc purus, consequat et dui nec, porta scelerisque sem. Proin ut tortor cursus, condimentum sem at, imperdiet diam. Aliquam semper sed nisi id tincidunt. Pellentesque vestibulum sem eu pharetra porttitor. Quisque vitae nisi efficitur, placerat tortor quis, volutpat eros.",
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
//Список из ноутбуков
//
//Также выдается при вызове /api/shop/laptops/[id]
//и затем фильтруется по id

export const Laptops: Array<Laptop> = [
  {
    id: "31",
    name: "Lenovo IdeaPad 1 15IAU7",
    title:
      '15.6" 1920 x 1080, IPS, 60 Гц, Intel Pentium Gold 8505, 8 ГБ DDR4, SSD 256 ГБ, видеокарта встроенная, без ОС, цвет крышки серый, аккумулятор 42 Вт·ч',
    imageUrl:
      "https://content2.onliner.by/catalog/device/header/06621475af1c45f9432afdfbad11bde2.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam est sem, posuere vitae volutpat non, pellentesque in ligula. In malesuada eu erat quis sollicitudin. Pellentesque non leo enim. Aenean nunc purus, consequat et dui nec, porta scelerisque sem. Proin ut tortor cursus, condimentum sem at, imperdiet diam. Aliquam semper sed nisi id tincidunt. Pellentesque vestibulum sem eu pharetra porttitor. Quisque vitae nisi efficitur, placerat tortor quis, volutpat eros.",
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
    id: "32",
    name: "Maibenben x Mechrevo X558",
    title:
      '15.6" 1920 x 1080, IPS, 144 Гц, AMD Ryzen 7 5800H, 16 ГБ DDR4, SSD 1024 ГБ, видеокарта NVIDIA GeForce RTX 3060 6 ГБ (TGP 130 Вт), Linux, цвет крышки серый, аккумулятор 46.7 Вт·ч',
    imageUrl:
      "https://content2.onliner.by/catalog/device/header/25bdd9c7747dfaafffc106a2cd9dab9e.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam est sem, posuere vitae volutpat non, pellentesque in ligula. In malesuada eu erat quis sollicitudin. Pellentesque non leo enim. Aenean nunc purus, consequat et dui nec, porta scelerisque sem. Proin ut tortor cursus, condimentum sem at, imperdiet diam. Aliquam semper sed nisi id tincidunt. Pellentesque vestibulum sem eu pharetra porttitor. Quisque vitae nisi efficitur, placerat tortor quis, volutpat eros.",
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
    id: "33",
    name: "Huawei MateBook D 15",
    title:
      '15.6" 1920 x 1080, IPS, 60 Гц, Intel Core i5 1155G7, 8 ГБ DDR4, SSD 256 ГБ, видеокарта встроенная, Windows 11, цвет крышки серый, аккумулятор 42 Вт·ч',
    imageUrl:
      "https://content2.onliner.by/catalog/device/header/4676df026a785edcdbfb2b56d31ba43f.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam est sem, posuere vitae volutpat non, pellentesque in ligula. In malesuada eu erat quis sollicitudin. Pellentesque non leo enim. Aenean nunc purus, consequat et dui nec, porta scelerisque sem. Proin ut tortor cursus, condimentum sem at, imperdiet diam. Aliquam semper sed nisi id tincidunt. Pellentesque vestibulum sem eu pharetra porttitor. Quisque vitae nisi efficitur, placerat tortor quis, volutpat eros.",
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
    id: "34",
    name: "Lenovo IdeaPad Slim 5",
    title:
      '16.0" 2560 x 1600, IPS, 60 Гц, AMD Ryzen 5 7530U, 16 ГБ DDR4, SSD 512 ГБ, видеокарта встроенная, без ОС, цвет крышки серый, аккумулятор 56.6 Вт·ч',
    imageUrl:
      "https://content2.onliner.by/catalog/device/header/ed52fb757a34669f3e914b52eb1496c4.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam est sem, posuere vitae volutpat non, pellentesque in ligula. In malesuada eu erat quis sollicitudin. Pellentesque non leo enim. Aenean nunc purus, consequat et dui nec, porta scelerisque sem. Proin ut tortor cursus, condimentum sem at, imperdiet diam. Aliquam semper sed nisi id tincidunt. Pellentesque vestibulum sem eu pharetra porttitor. Quisque vitae nisi efficitur, placerat tortor quis, volutpat eros.",
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
    id: "35",
    name: "Acer Aspire 3",
    title:
      '15.6" 1920 x 1080, IPS, 60 Гц, Intel Core i3 1115G4, 8 ГБ DDR4, SSD 512 ГБ, видеокарта встроенная, Windows 11, цвет крышки серебристый, аккумулятор 36.7 Вт·ч',
    imageUrl:
      "https://content2.onliner.by/catalog/device/header/5cc8c3cb5e059980b9421ca7db0cfe54.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam est sem, posuere vitae volutpat non, pellentesque in ligula. In malesuada eu erat quis sollicitudin. Pellentesque non leo enim. Aenean nunc purus, consequat et dui nec, porta scelerisque sem. Proin ut tortor cursus, condimentum sem at, imperdiet diam. Aliquam semper sed nisi id tincidunt. Pellentesque vestibulum sem eu pharetra porttitor. Quisque vitae nisi efficitur, placerat tortor quis, volutpat eros.",
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
    id: "36",
    name: 'Apple Macbook Air 15"',
    title:
      "15.3 2880 x 1864, IPS, 60 Гц, Apple M2, 8 ГБ, SSD 256 ГБ, видеокарта встроенная, Mac OS, цвет крышки серебристый, аккумулятор 66.5 Вт·ч",
    imageUrl:
      "https://content2.onliner.by/catalog/device/header/dbcc352090b0a5e348bd1b9a0327ddb5.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam est sem, posuere vitae volutpat non, pellentesque in ligula. In malesuada eu erat quis sollicitudin. Pellentesque non leo enim. Aenean nunc purus, consequat et dui nec, porta scelerisque sem. Proin ut tortor cursus, condimentum sem at, imperdiet diam. Aliquam semper sed nisi id tincidunt. Pellentesque vestibulum sem eu pharetra porttitor. Quisque vitae nisi efficitur, placerat tortor quis, volutpat eros.",
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
    id: "37",
    name: 'Apple Macbook Pro 14"',
    title:
      '14.2" 3024 x 1964, IPS, 120 Гц, Apple M2 Pro (10 ядер), 16 ГБ, SSD 512 ГБ, видеокарта встроенная, Mac OS, цвет крышки серый, аккумулятор 70 Вт·ч',
    imageUrl:
      "https://content2.onliner.by/catalog/device/header/803784462861fa2a37451fe1b6c2ad30.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam est sem, posuere vitae volutpat non, pellentesque in ligula. In malesuada eu erat quis sollicitudin. Pellentesque non leo enim. Aenean nunc purus, consequat et dui nec, porta scelerisque sem. Proin ut tortor cursus, condimentum sem at, imperdiet diam. Aliquam semper sed nisi id tincidunt. Pellentesque vestibulum sem eu pharetra porttitor. Quisque vitae nisi efficitur, placerat tortor quis, volutpat eros.",
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
    id: "38",
    name: "IRBIS NB500",
    title:
      '13.3" 1920 x 1080, IPS, 60 Гц, сенсорный, Intel Celeron N3350, 3 ГБ DDR4, eMMC 32 ГБ, видеокарта встроенная, Windows 10 Pro, цвет крышки серебристый',
    imageUrl:
      "https://content2.onliner.by/catalog/device/header/fbd33ddeff4fed0c8e010303e1c76178.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam est sem, posuere vitae volutpat non, pellentesque in ligula. In malesuada eu erat quis sollicitudin. Pellentesque non leo enim. Aenean nunc purus, consequat et dui nec, porta scelerisque sem. Proin ut tortor cursus, condimentum sem at, imperdiet diam. Aliquam semper sed nisi id tincidunt. Pellentesque vestibulum sem eu pharetra porttitor. Quisque vitae nisi efficitur, placerat tortor quis, volutpat eros.",
    manufacturer: "IRBIS",
    price: 896,
    rating: 3,
    screenSize: 13.3,
    operatingSystem: "Windows 10 Pro",
    storageCapacityGB: 32,
    RAMGB: 3,
    CPU: "Intel Celeron N3350",
    RAM: "DDR4 2100 МГц",
  },
];

//Результат выдачи на /api/shop/cameras
//Список из камер
//
//Также выдается при вызове /api/shop/cameras/[id]
//и затем фильтруется по id

export const Cameras: Array<Camera> = [
  {
    id: "41",
    name: "Canon EOS 6D Mark II Body",
    title:
      "зеркальная камера, байонет Canon EF, матрица Full frame (полный кадр) 26 Мп, без объектива (body), Wi-Fi",
    imageUrl:
      "https://content2.onliner.by/catalog/device/header/e38b3df3d6543e00ad4d399f2a32cb71.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam est sem, posuere vitae volutpat non, pellentesque in ligula. In malesuada eu erat quis sollicitudin. Pellentesque non leo enim. Aenean nunc purus, consequat et dui nec, porta scelerisque sem. Proin ut tortor cursus, condimentum sem at, imperdiet diam. Aliquam semper sed nisi id tincidunt. Pellentesque vestibulum sem eu pharetra porttitor. Quisque vitae nisi efficitur, placerat tortor quis, volutpat eros.",
    manufacturer: "Canon",
    price: 4984.4,
    rating: 10,
    cameraType: "Зеркальная камера",
    matrixResolution: 26,
    matrixType: "CMOS",
    pictureResolution: "6240 x 4160",
  },
  {
    id: "42",
    name: "Nikon Z5 Body",
    title:
      "беззеркальная камера, байонет Nikon Z, матрица Full frame (полный кадр) 24.3 Мп, без объектива (body), Wi-Fi, два слота для карт памяти",
    imageUrl:
      "https://content2.onliner.by/catalog/device/header/5dd398753f305e4c755bd332a1007a4a.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam est sem, posuere vitae volutpat non, pellentesque in ligula. In malesuada eu erat quis sollicitudin. Pellentesque non leo enim. Aenean nunc purus, consequat et dui nec, porta scelerisque sem. Proin ut tortor cursus, condimentum sem at, imperdiet diam. Aliquam semper sed nisi id tincidunt. Pellentesque vestibulum sem eu pharetra porttitor. Quisque vitae nisi efficitur, placerat tortor quis, volutpat eros.",
    manufacturer: "Nikon",
    price: 4459.9,
    rating: 9,
    cameraType: "Беззеркальная камера",
    matrixResolution: 24.3,
    matrixType: "CMOS",
    pictureResolution: "6240 x 4160",
  },
  {
    id: "43",
    name: "Sony Alpha a6400 Body",
    title:
      "беззеркальная камера, байонет Sony E, матрица APS-C (1.5 crop) 24.2 Мп, без объектива (body), Wi-Fi",
    imageUrl:
      "https://content2.onliner.by/catalog/device/header/62647e4afd5c01e9e0c2cf0841ae2a7e.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam est sem, posuere vitae volutpat non, pellentesque in ligula. In malesuada eu erat quis sollicitudin. Pellentesque non leo enim. Aenean nunc purus, consequat et dui nec, porta scelerisque sem. Proin ut tortor cursus, condimentum sem at, imperdiet diam. Aliquam semper sed nisi id tincidunt. Pellentesque vestibulum sem eu pharetra porttitor. Quisque vitae nisi efficitur, placerat tortor quis, volutpat eros.",
    manufacturer: "Sony",
    price: 3290,
    rating: 9,
    cameraType: "Беззеркальная камера",
    matrixResolution: 24.2,
    matrixType: "EXR CMOS",
    pictureResolution: "6240 x 4160",
  },
];

//Результат выдачи на /api/shop/consoles
//Список из консолей
//
//Также выдается при вызове /api/shop/consoles/[id]
//и затем фильтруется по id

export const Consoles: Array<Console> = [
  {
    id: "51",
    name: "Microsoft Xbox Series X",
    title:
      "1 ТБ, разрешение игр - 4K UHD (2160p), поддержка HDR, подключение по HDMI",
    imageUrl:
      "https://content2.onliner.by/catalog/device/header/5d39d010867f586b24993beac9bcf882.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam est sem, posuere vitae volutpat non, pellentesque in ligula. In malesuada eu erat quis sollicitudin. Pellentesque non leo enim. Aenean nunc purus, consequat et dui nec, porta scelerisque sem. Proin ut tortor cursus, condimentum sem at, imperdiet diam. Aliquam semper sed nisi id tincidunt. Pellentesque vestibulum sem eu pharetra porttitor. Quisque vitae nisi efficitur, placerat tortor quis, volutpat eros.",
    manufacturer: "Microsoft",
    price: 1838,
    rating: 10,
    maxResolution: "4K UHD (2160p)",
    storageCapacityGB: 1024,
    CPU: "AMD Zen 2",
    RAM: "GDDR6",
    RAMGB: 16,
    tvConnectionType: "HDMI",
  },
  {
    id: "52",
    name: "Sony PlayStation 5",
    title:
      "825 ГБ, разрешение игр - 4K UHD (2160p), поддержка HDR, подключение по HDMI, 1 игра в комплекте: Astro’s Playroom",
    imageUrl:
      "https://content2.onliner.by/catalog/device/header/8323b898e839aa79245b105d735aeebe.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam est sem, posuere vitae volutpat non, pellentesque in ligula. In malesuada eu erat quis sollicitudin. Pellentesque non leo enim. Aenean nunc purus, consequat et dui nec, porta scelerisque sem. Proin ut tortor cursus, condimentum sem at, imperdiet diam. Aliquam semper sed nisi id tincidunt. Pellentesque vestibulum sem eu pharetra porttitor. Quisque vitae nisi efficitur, placerat tortor quis, volutpat eros.",
    manufacturer: "Microsoft",
    price: 1862,
    rating: 7,
    maxResolution: "4K UHD (2160p)",
    storageCapacityGB: 825,
    CPU: "AMD Zen 2",
    RAM: "GDDR6",
    RAMGB: 16,
    tvConnectionType: "HDMI",
  },
];

//Результат выдачи на /api/shop/headphones
//Список из наушников
//
//Также выдается при вызове /api/shop/headphones/[id]
//и затем фильтруется по id

export const Headphones: Array<HeadphonesType> = [
  {
    id: "61",
    name: "Haylou W1",
    title:
      "беспроводные наушники с микрофоном, внутриканальные, портативные, полностью беспроводные (TWS), Bluetooth 5.2, 20-20000 Гц, время работы 6 ч, с кейсом 20 ч",
    imageUrl:
      "https://content2.onliner.by/catalog/device/header/ee5328a0b7a71ccd8f8505c03a739db9.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam est sem, posuere vitae volutpat non, pellentesque in ligula. In malesuada eu erat quis sollicitudin. Pellentesque non leo enim. Aenean nunc purus, consequat et dui nec, porta scelerisque sem. Proin ut tortor cursus, condimentum sem at, imperdiet diam. Aliquam semper sed nisi id tincidunt. Pellentesque vestibulum sem eu pharetra porttitor. Quisque vitae nisi efficitur, placerat tortor quis, volutpat eros.",
    manufacturer: "Haylou",
    price: 96.03,
    rating: 7,
    type: "Внутриканальные",
    wireless: true,
  },
  {
    id: "62",
    name: "Redragon Ire Pro",
    title:
      "беспроводные наушники с микрофоном, мониторные (охватывающие), геймерские, съёмный аудиокабель, Bluetooth 5.0, 20-20000 Гц, кабель 1.8 м",
    imageUrl:
      "https://content2.onliner.by/catalog/device/header/be904557aa70d7911ea4eaf043cc0430.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam est sem, posuere vitae volutpat non, pellentesque in ligula. In malesuada eu erat quis sollicitudin. Pellentesque non leo enim. Aenean nunc purus, consequat et dui nec, porta scelerisque sem. Proin ut tortor cursus, condimentum sem at, imperdiet diam. Aliquam semper sed nisi id tincidunt. Pellentesque vestibulum sem eu pharetra porttitor. Quisque vitae nisi efficitur, placerat tortor quis, volutpat eros.",
    manufacturer: "Redragon",
    price: 179,
    rating: 10,
    type: "Накладные геймерские",
    wireless: true,
  },
  {
    id: "63",
    name: "Apple AirPods Pro 2",
    title:
      "беспроводные наушники с микрофоном, внутриканальные, портативные, полностью беспроводные (TWS), Bluetooth 5.3, быстрая зарядка, время работы 6 ч, с кейсом 30 ч, активное шумоподавление",
    imageUrl:
      "https://content2.onliner.by/catalog/device/header/d8e8e88f88d95f4616c729b8386dc023.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam est sem, posuere vitae volutpat non, pellentesque in ligula. In malesuada eu erat quis sollicitudin. Pellentesque non leo enim. Aenean nunc purus, consequat et dui nec, porta scelerisque sem. Proin ut tortor cursus, condimentum sem at, imperdiet diam. Aliquam semper sed nisi id tincidunt. Pellentesque vestibulum sem eu pharetra porttitor. Quisque vitae nisi efficitur, placerat tortor quis, volutpat eros.",
    manufacturer: "Apple",
    price: 868.96,
    rating: 7,
    type: "Внутриканальные",
    wireless: true,
  },
  {
    id: "64",
    name: "Focal Utopia",
    title:
      "наушники, мониторные (охватывающие), для аудиофилов, 5-50000 Гц, кабель 4 м",
    imageUrl:
      "https://content2.onliner.by/catalog/device/header/921064ef875860f244eb63a5a000479f.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam est sem, posuere vitae volutpat non, pellentesque in ligula. In malesuada eu erat quis sollicitudin. Pellentesque non leo enim. Aenean nunc purus, consequat et dui nec, porta scelerisque sem. Proin ut tortor cursus, condimentum sem at, imperdiet diam. Aliquam semper sed nisi id tincidunt. Pellentesque vestibulum sem eu pharetra porttitor. Quisque vitae nisi efficitur, placerat tortor quis, volutpat eros.",
    manufacturer: "Focal",
    price: 22_291.33,
    rating: 10,
    type: "Накладные, для аудиофилов",
    wireless: false,
  },
  {
    id: "65",
    name: "Defender Basic 210",
    title: "наушники, внутриканальные, портативные, 20-20000 Гц, кабель 1.2 м",
    imageUrl:
      "https://content2.onliner.by/catalog/device/header/ddffa48b89b2a1dc253dbae1d277e86e.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam est sem, posuere vitae volutpat non, pellentesque in ligula. In malesuada eu erat quis sollicitudin. Pellentesque non leo enim. Aenean nunc purus, consequat et dui nec, porta scelerisque sem. Proin ut tortor cursus, condimentum sem at, imperdiet diam. Aliquam semper sed nisi id tincidunt. Pellentesque vestibulum sem eu pharetra porttitor. Quisque vitae nisi efficitur, placerat tortor quis, volutpat eros.",
    manufacturer: "Defender",
    price: 2.24,
    rating: 5,
    type: "Внутриканальные",
    wireless: false,
  },
];
