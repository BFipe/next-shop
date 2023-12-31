//_________________________Route & Query handling ______________________________

/**
 * Интерфейс для представления дефолтных параметров маршрута.
 * По умолчанию все значения равны {};
 *
 */
export interface RouteParams {
  /**
   * Директория маршрута.
   *
   * @remarks
   * Переименуйте папку, добавив квадратные скобочки ( [shop] ) чтобы сделать ее динамической
   */
  params: {};

  /**
   * Параметры запроса.
   *
   * @remarks
   * Чтобы получить их нужно в строке запроса после знака & указать их по схеме key=value.
   */
  searchParams: {};
}

/**
 * Интерфейс для представления динамических параметров маршрута.
 *
 * @template T - Значение true если одиночная директория [slug], false если множественная [...slug] или [[...slug]]
 *
 * Если есть много директорий подряд ( [slug] / [glug] ) то можно оставить одно свойство true.
 *
 * (!) Есть проблема с неопределением типов при паттерне ( [slug] / [...glug] ), выдает сразу string | string[]
 *
 * баг в процессе решения.
 *
 * @template K - Название директории, Если множественная, то записывать как ( "one" | "two" )
 */
export interface DynamicRouteParams<T extends boolean, K extends string>
  extends RouteParams {
  /**
   * Директории маршрута.
   *
   * @remarks
   * Для случая, когда директория одиночная ( [slug] ), содержит поле "slug" с типом string.
   * В противном случае, содержит поле "slug" с типом string[].
   */
  params: T extends true ? { [key in K]: string } : { [key in K]: string[] };
}

/**
 * Интерфейс для представления параметров запроса.
 *
 * @template T - Объект с ключами и значениями типа string, представляющий параметры строки запроса (mysite.com/home/?key=value).
 */
export interface QueryRouteParams<T extends Record<string, string | string[]>>
  extends RouteParams {
  /**
   * Параметры поиска.
   *
   * @remarks
   * Объект со значениями key - value в формате string
   */
  searchParams: T;
}

/**
 * Интерфейс, объединяющий DynamicRouteParams и QueryRouteParams.
 *
 * @template T - Значение true если одиночная директория [slug], false если множественная [...slug] или [[...slug]]
 * @template K - Объект с ключами и значениями типа string, представляющий параметры строки запроса (mysite.com/home/?key=value).
 */
export interface DynamicQueryRouteParams<
  T extends true | false,
  K extends string,
  C extends Record<string, string | string[]>
> extends Omit<DynamicRouteParams<T, K>, "searchParams">,
    Omit<QueryRouteParams<C>, "params"> {}
//_____________________________________________________________________________

//_________________________Server route handling ______________________________
/**
 * Интерфейс для представления динамических параметров маршрута в api.
 *
 * @template T - Значение true если одиночная директория [slug], false если множественная [...slug] или [[...slug]]
 *
 * Если есть много директорий подряд ( [slug] / [glug] ) то можно оставить одно свойство true.
 *
 * (!) Есть проблема с неопределением типов при паттерне ( [slug] / [...glug] ), выдает сразу string | string[]
 *
 * баг в процессе решения.
 *
 * @template K - Название директории, Если множественная, то записывать как ( "one" | "two" )
 */
export interface DynamicServerRouteParams<T extends boolean, K extends string> {
  /**
   * Директории api маршрута.
   *
   * @remarks
   * Для случая, когда директория одиночная ( [slug] ), содержит поле "slug" с типом string.
   * В противном случае, содержит поле "slug" с типом string[].
   */
  params: T extends true ? { [key in K]: string } : { [key in K]: string[] };
}
