import NotFoundHandler from "@/src/components/common/NotFoundHandler/NotFoundHandler";

export default function NotFound() {
  return (
    <NotFoundHandler
      notFoundName="Не найдено!"
      notFoundDescription="Продуктов данной категории не найдено. Попробуйте зайти позже."
      pushRoute="/shop"
      routeButtonText="Вернуться на страницу продуктов"
    />
  );
}
