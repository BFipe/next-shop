import NotFoundHandler from "@/src/components/common/NotFoundHandler/NotFoundHandler";

export default function NotFound() {
  return (
    <NotFoundHandler
      notFoundName="Не найдено!"
      notFoundDescription="К сожалению, мы не смогли найти данный продукт."
      pushRoute="/shop"
      routeButtonText="Вернуться к каталогу"
    />
  );
}
