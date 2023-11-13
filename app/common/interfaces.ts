//_________________________Route params handling _____________________________

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
 */
export interface DynamicRouteParams<T extends true | false>
  extends RouteParams {
  /**
   * Директории маршрута.
   *
   * @remarks
   * Для случая, когда директория одиночная ( [slug] ), содержит поле "directory" с типом string.
   * В противном случае, содержит поле "directory" с типом string[].
   */
  params: T extends true ? { directory: string } : { directory: string[] };
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
  K extends Record<string, string | string[]>
> extends Omit<DynamicRouteParams<T>, "searchParams">,
    Omit<QueryRouteParams<K>, "params"> {}
//_____________________________________________________________________________
